"use client";
import { CircleDashed, Route } from "lucide-react";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "react18-input-otp";

import toast, { Toaster } from "react-hot-toast";
import { auth } from "@/firebase.config";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import UseStore from "../zustand-state/UseStore";
import userAPI from "@/api/userAPI";
import { AxiosResponse } from "axios";

// import Otp
interface Props {
  handleChange: (name: string, val: string) => void;
  defaultValue: string;
  name: string;
}
const customInputStyle = {
  border: "1px solid #60a5fa",
  width: "100%",
};
interface CustomWindow extends Window {
  recaptchaVerifier?: RecaptchaVerifier;
  confirmationResult?: any;
}
declare const window: CustomWindow;

const SignUp: React.FC = () => {
  const { user, setUser } = UseStore();
  const [phone, setPhone] = useState<string>("");
  const [result, setResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");

  const [showOpt, setShowOpt] = useState(false);
  const route = useRouter();
  const handleChange1 = (enteredOtp: string) => {
    setOtp(enteredOtp);
  };
  const getUser = async () => {
    try {
      const res:any = await userAPI.getUserByPhone(`user/get-user/${phone}`);
      return res.data;
    } catch (e) {
      return e;
    }
  };

  const onCaptchVerify = async () => {
    if (!window.recaptchaVerifier) {
      const auth = getAuth();
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response: void) => {},
          "expired-callback": () => {},
        }
      );
    }
  };
  const onSignup = async () => {
    const user = await getUser();
    //  cú Optional Chaining ? : dùng để kiểm tra trong đối tượng trả về có username k
    if (user?.username) {
      toast.error("phone number already exists!");
      return;
    } else {
      setLoading(true);
      onCaptchVerify();
      const appVerifier = window.recaptchaVerifier;
      const formatPh = "+" + phone;
      if (appVerifier) {
        signInWithPhoneNumber(auth, formatPh, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setLoading(false);
            setResult(false);
            setShowOpt(true);

            toast.success("OTP sender successfully!");
          })
          .catch((error) => {
            toast.error("OTP sender failed!");
            setLoading(false);
            setResult(true);
          });
      }
    }
  };
  function onOPTVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res: any) => {
        console.log(res);
        setLoading(false);
        setUser(phone);
        toast.success("OTP verify successfully!");
        route.push("/auth/sign-up/identify");
      })
      .catch((err: void) => {
        console.log(err);
        setLoading(false);
      });
  }
  return (
    <div className="bg-gradient-to-bl from-cyan-200 to-blue-400 h-screen w-screen flex justify-center  ">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        <div className="text-center mt-[50px]">
          <h1 className="text-blue-600 text-5xl font-bold ">Zalo</h1>
          <h2 className="mt-2">
            Đăng ký tài khoản Zalo <br />
            Thông tin bảo mật đến với lựa chọn khách hàng
          </h2>
        </div>
        <div className="bg-white w-[420px] h-[300px] mt-6 ">
          <div className="">
            <h3 className="text-center p-4  border-b">Đăng ký tài khoản</h3>
          </div>
          <div className="pl-8 pr-8">
            <div className="flex mt-8 border-b pb-2 flex-col">
              {result && (
                <div>
                  <PhoneInput
                    country={"vn"}
                    value={phone}
                    onChange={setPhone}
                    inputStyle={customInputStyle}
                  />
                </div>
              )}
              {showOpt && (
                <div className="flex justify-center">
                  <OtpInput
                    value={otp}
                    onChange={handleChange1}
                    numInputs={6}
                    separator={<span>-</span>}
                  />
                </div>
              )}
            </div>
          </div>

          {/* sign in */}
          <div className="pl-8 pr-8 mt-8">
            {result && (
              <button
                className=" bg-blue-500 text-white w-full p-3 rounded-full hover:bg-blue-600 flex justify-center"
                onClick={onSignup}
              >
                Xác thực mã OTP
                {loading && <CircleDashed className="ml-5 animate-spin  " />}
              </button>
            )}
            {showOpt && (
              <button
                className=" bg-blue-500 text-white w-full p-3 rounded-full hover:bg-blue-600 flex justify-center"
                onClick={onOPTVerify}
              >
                xác nhận
                {loading && <CircleDashed className="ml-5 animate-spin  " />}
              </button>
            )}
          </div>

          {/* quên mật khẩu */}
          <div className="pl-8 pr-8 mt-3 text-center">
            {showOpt && <div className="hover:underline">Quay về</div>}

            {result && (
              <Link href="/auth/sign-in" className="hover:underline">
                Quay lại
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
