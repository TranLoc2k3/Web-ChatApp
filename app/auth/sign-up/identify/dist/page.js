"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var react_phone_input_2_1 = require("react-phone-input-2");
require("react-phone-input-2/lib/style.css");
var UseStore_1 = require("@/app/components/zustand/UseStore");
var react_hot_toast_1 = require("react-hot-toast");
var userAPI_1 = require("@/api/userAPI");
function SignUp() {
    var _this = this;
    var customInputStyle = {
        border: "1px solid #60a5fa",
        width: "100%"
    };
    var _a = UseStore_1["default"](), user = _a.user, setUser = _a.setUser;
    var _b = react_1.useState(user || ""), phone = _b[0], setPhone = _b[1];
    var _c = react_1.useState(""), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState(""), confirmPassword = _d[0], setConfirmPassword = _d[1];
    var _e = react_1.useState(false), result = _e[0], setResult = _e[1];
    var route = navigation_1.useRouter();
    // Xử lý xác thực
    var handleReliable = function () {
        setResult(true);
        route.push("/auth/sign-up/identify/info-signup");
    };
    var onClickSignUp = function () { return __awaiter(_this, void 0, void 0, function () {
        var payload, res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!password && !confirmPassword) {
                        react_hot_toast_1["default"].error("Mật khẩu không được để trống");
                        return [2 /*return*/];
                    }
                    if (password && password !== confirmPassword) {
                        react_hot_toast_1["default"].error("Mật khẩu không khớp");
                        return [2 /*return*/];
                    }
                    payload = {
                        username: phone,
                        password: password
                    };
                    if (!(password === confirmPassword)) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userAPI_1.userAPI.onSignUp("/auth/sign-up", payload)];
                case 2:
                    res = _a.sent();
                    if (res.data.message === "User already exists!") {
                        react_hot_toast_1["default"].error("Tài khoản đã tồn tại");
                    }
                    else {
                        react_hot_toast_1["default"].success("Đăng ký thành công");
                        setUser(phone);
                        handleReliable();
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    react_hot_toast_1["default"].error("Đăng ký thất bại");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "bg-gradient-to-bl from-cyan-200 to-blue-400 h-screen w-screen flex justify-center  " },
        React.createElement("div", { id: "recaptcha-container" }),
        React.createElement(react_hot_toast_1.Toaster, { toastOptions: { duration: 4000 } }),
        React.createElement("div", null,
            React.createElement("div", { className: "text-center mt-[50px]" },
                React.createElement("h1", { className: "text-blue-600 text-5xl font-bold " }, "Zalo"),
                React.createElement("h2", { className: "mt-2" },
                    "\u0110\u0103ng k\u00FD t\u00E0i kho\u1EA3n Zalo ",
                    React.createElement("br", null),
                    "Th\u00F4ng tin b\u1EA3o m\u1EADt \u0111\u1EBFn v\u1EDBi l\u1EF1a ch\u1ECDn kh\u00E1ch h\u00E0ng")),
            React.createElement("div", { className: "bg-white w-[420px] h-[400px] mt-6 " },
                React.createElement("div", { className: "" },
                    React.createElement("h3", { className: "text-center p-4  border-b" }, "\u0110\u0103ng k\u00FD t\u00E0i kho\u1EA3n")),
                React.createElement("div", { className: "pl-8 pr-8" },
                    React.createElement("div", { className: "flex mt-8 border-b pb-2" },
                        React.createElement(react_phone_input_2_1["default"], { country: "vn", value: phone, onChange: function (phone) { return setPhone(phone); }, inputStyle: customInputStyle }))),
                React.createElement("div", { className: "pl-8 pr-8" },
                    React.createElement("div", { className: "flex mt-8 border-b pb-2" },
                        React.createElement("span", { className: "mr-4" },
                            React.createElement(lucide_react_1.Lock, null)),
                        React.createElement("input", { value: password, type: "password", placeholder: "M\u1EADt kh\u1EA9u", className: "w-full transition focus-visible:outline-none ", onChange: function (e) { return setPassword(e.target.value); } }))),
                React.createElement("div", { className: "pl-8 pr-8" },
                    React.createElement("div", { className: "flex mt-8 border-b pb-2 " },
                        React.createElement("span", { className: "mr-4" },
                            React.createElement(lucide_react_1.PackageCheck, null)),
                        React.createElement("input", { value: confirmPassword, type: "password", placeholder: "X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u", className: "w-full transition  focus-visible:outline-none", onChange: function (e) { return setConfirmPassword(e.target.value); } }))),
                React.createElement("div", { className: "pl-8 pr-8 mt-8" },
                    React.createElement("button", { className: " bg-blue-500 text-white w-full p-3 rounded-full hover:bg-blue-600", onClick: onClickSignUp }, "\u0110\u0103ng k\u00FD t\u00E0i kho\u1EA3n")),
                React.createElement("div", { className: "pl-8 pr-8 mt-3 text-center" },
                    React.createElement(link_1["default"], { href: "/auth/sign-up", className: "hover:underline" }, "Quay v\u1EC1"))))));
}
exports["default"] = SignUp;
