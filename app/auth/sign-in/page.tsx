"use client";
import { Lock } from "lucide-react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import CustomToast from "@/components/ui/CustomToast";
import { Button } from "@/components/ui/button";
interface SignInResponse {
  success: boolean;
  message?: string;
  // Thêm các trường dữ liệu khác nếu cần thiết
}
async function signIn(
  phone: string,
  password: string
): Promise<SignInResponse> {
  try {
    const response = await fetch("http://localhost:4040/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phone,
        password: password,
      }),
    });
    console.log("okeee");
    if (!response.ok) {
      throw new Error("Failed to sign in");
    }

    const data: SignInResponse = await response.json();

    if (data.success) {
      return { success: true };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error("Error signing in:", error);
    return { success: false, message: "Internal server error" };
  }
}

function SignIn() {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const route = useRouter();

  const handleSignIn = async () => {
    const signInResponse = await signIn(phone, password);
    if (signInResponse.success) {
      // Đăng nhập thành công, điều hướng tới trang dashboard hoặc trang khác
      route.push("/dashboard");
    } else {
      // Hiển thị thông báo lỗi đăng nhập không thành công
      alert(signInResponse.message || "Đăng nhập không thành công");
    }
  };
  const customInputStyle = {
    border: "1px solid #60a5fa",
    width: "100%",
  };
  console.log(phone);
  console.log(password);
  return (
    <div className="bg-gradient-to-bl from-cyan-200 to-blue-400 h-screen w-screen flex justify-center">
      <div>
        <div className="text-center mt-[50px]">
          <h1 className="text-blue-600 text-5xl font-bold ">Zalo</h1>
          <h2 className="mt-2">
            Đăng nhập tài khoản Zalo <br />
            để kết nối với ứng dụng Zalo Web
          </h2>
        </div>
        <div className="bg-white w-[420px] h-[400px] mt-6 ">
          <div className="">
            <h3 className="text-center p-4  border-b">Với số điện thoại</h3>
          </div>
          <div className="pl-8 pr-8">
            <div className="flex mt-8 border-b pb-2">
              <PhoneInput
                country={"vn"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={customInputStyle}
              />
            </div>
          </div>
          {/* password */}
          <div className="pl-8 pr-8">
            <div className="flex mt-8 border-b pb-2">
              <span className="mr-4">
                <Lock />
              </span>

              <input
                placeholder="Mật khẩu"
                className="w-full transition focus-visible:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          {/* log in */}
          <div className="pl-8 pr-8 mt-8">
            <button
              className=" bg-blue-500 text-white w-full p-3 rounded-full hover:bg-blue-600"
              onClick={handleSignIn}
            >
              Đăng nhập với mật khẩu
            </button>
          </div>

          {/* quên mật khẩu */}
          <div className="pl-8 pr-8 mt-10 text-center">
            <Link className="hover:underline mr-5" href="/auth/sign-up">
              Quên mật khẩu
            </Link>
            <Link
              className="border border-blue-100 text-blue-500 w-full p-3  hover:underline"
              href="/auth/sign-up"
            >
              Đăng ký tài khoản
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
