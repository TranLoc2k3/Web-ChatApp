"use client";
"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var link_1 = require("next/link");
var react_phone_input_2_1 = require("react-phone-input-2");
require("react-phone-input-2/lib/style.css");
var react18_input_otp_1 = require("react18-input-otp");
var react_hot_toast_1 = require("react-hot-toast");
var UseStore_1 = require("../zustand/UseStore");
var customInputStyle = {
    border: "1px solid #60a5fa",
    width: "100%"
};
var SignUp = function () {
    var _a = UseStore_1["default"](), user = _a.user, setUser = _a.setUser;
    var _b = react_1.useState(""), phone = _b[0], setPhone = _b[1];
    var _c = react_1.useState(true), result = _c[0], setResult = _c[1];
    var _d = react_1.useState(false), loading = _d[0], setLoading = _d[1];
    var _e = react_1.useState(""), otp = _e[0], setOtp = _e[1];
    var _f = react_1.useState(false), showOpt = _f[0], setShowOpt = _f[1];
    var route = navigation_1.useRouter();
    // const handleChange1 = (enteredOtp: string) => {
    //   setOtp(enteredOtp);
    // };
    // const onCaptchVerify = async () => {
    //   if (!window.recaptchaVerifier) {
    //     const auth = getAuth();
    //     window.recaptchaVerifier = new RecaptchaVerifier(
    //       auth,
    //       "recaptcha-container",
    //       {
    //         size: "invisible",
    //         callback: (response: void) => {},
    //         "expired-callback": () => {},
    //       }
    //     );
    //   }
    // };
    // function onSignup() {
    //   setLoading(true);
    //   onCaptchVerify();
    //   const appVerifier = window.recaptchaVerifier;
    //   const formatPh = "+" + phone;
    //   if (appVerifier) {
    //     signInWithPhoneNumber(auth, formatPh, appVerifier)
    //       .then((confirmationResult) => {
    //         window.confirmationResult = confirmationResult;
    //         setLoading(false);
    //         setResult(false);
    //         setShowOpt(true)
    //         toast.success("OTP sender successfully!");
    //       })
    //       .catch((error) => {
    //         toast.error("OTP sender failed!");
    //         setLoading(false);
    //         setResult(true);
    //       });
    //   }
    // }
    // function onOPTVerify() {
    //   setLoading(true);
    //   window.confirmationResult
    //     .confirm(otp)
    //     .then(async (res: any) => {
    //       console.log(res);
    //       setLoading(false);
    //       setUser(phone);
    //       toast.success("OTP verify successfully!");
    //       route.push("/auth/sign-up/identify");
    //     })
    //     .catch((err: void) => {
    //       console.log(err);
    //       setLoading(false);
    //     });
    // }
    var onSignUp = function () {
        react_hot_toast_1["default"].success("Chọn thành công");
        setUser(phone);
        route.push("/auth/sign-up/identify");
    };
    return (React.createElement("div", { className: "bg-gradient-to-bl from-cyan-200 to-blue-400 h-screen w-screen flex justify-center  " },
        React.createElement("div", null,
            React.createElement(react_hot_toast_1.Toaster, { toastOptions: { duration: 4000 } }),
            React.createElement("div", { id: "recaptcha-container" }),
            React.createElement("div", { className: "text-center mt-[50px]" },
                React.createElement("h1", { className: "text-blue-600 text-5xl font-bold " }, "Zalo"),
                React.createElement("h2", { className: "mt-2" },
                    "\u0110\u0103ng k\u00FD t\u00E0i kho\u1EA3n Zalo ",
                    React.createElement("br", null),
                    "Th\u00F4ng tin b\u1EA3o m\u1EADt \u0111\u1EBFn v\u1EDBi l\u1EF1a ch\u1ECDn kh\u00E1ch h\u00E0ng")),
            React.createElement("div", { className: "bg-white w-[420px] h-[300px] mt-6 " },
                React.createElement("div", { className: "" },
                    React.createElement("h3", { className: "text-center p-4  border-b" }, "\u0110\u0103ng k\u00FD t\u00E0i kho\u1EA3n")),
                React.createElement("div", { className: "pl-8 pr-8" },
                    React.createElement("div", { className: "flex mt-8 border-b pb-2 flex-col" },
                        result && (React.createElement("div", null,
                            React.createElement(react_phone_input_2_1["default"], { country: "vn", value: phone, onChange: setPhone, inputStyle: customInputStyle }))),
                        showOpt && (React.createElement("div", { className: "flex justify-center" },
                            React.createElement(react18_input_otp_1["default"], { value: otp, 
                                // onChange={handleChange1}
                                numInputs: 6, separator: React.createElement("span", null, "-") }))))),
                React.createElement("div", { className: "pl-8 pr-8 mt-8" },
                    result && (React.createElement("button", { className: " bg-blue-500 text-white w-full p-3 rounded-full hover:bg-blue-600 flex justify-center", onClick: onSignUp },
                        "X\u00E1c th\u1EF1c m\u00E3 OTP",
                        loading && React.createElement(lucide_react_1.CircleDashed, { className: "ml-5 animate-spin  " }))),
                    showOpt && (React.createElement("button", { className: " bg-blue-500 text-white w-full p-3 rounded-full hover:bg-blue-600 flex justify-center" },
                        "X\u00E1c th\u1EF1c m\u00E3 OTP",
                        loading && React.createElement(lucide_react_1.CircleDashed, { className: "ml-5 animate-spin  " })))),
                React.createElement("div", { className: "pl-8 pr-8 mt-3 text-center" },
                    showOpt && React.createElement("div", { className: "hover:underline" }, "Quay v\u1EC1"),
                    result && (React.createElement(link_1["default"], { href: "/auth/sign-in", className: "hover:underline" }, "Quay l\u1EA1i")))))));
};
exports["default"] = SignUp;
