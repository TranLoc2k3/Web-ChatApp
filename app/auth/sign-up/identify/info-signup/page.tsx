"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import { ChangeEvent, useState } from "react";
const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};
function InfoSignUp() {
  const [selectImage, setSelectImage] = useState<string|null>(null);
  const route = useRouter();
  const quaylai = () => {
    route.push("/auth/sign-up/identify");
  };
  const hoantat = () => {
    route.push("/auth/sign-in");
  };
const handleImageChange =(event:ChangeEvent<HTMLInputElement>)=>{
  // nghe sự kiện file vào thay đổi lấy file đó
  const imageFile= event.target.files?.[0];
  if(imageFile){
    setSelectImage(URL.createObjectURL(imageFile))
  }
}
const defaultImage = "https://th.bing.com/th/id/OIP.JBpgUJhTt8cI2V05-Uf53AHaG1?rs=1&pid=ImgDetMain"
  return (
    <div className="h-screen w-screen  bg-gradient-to-bl from-cyan-200 to-blue-400 flex justify-center items-center ">
      <div className="flex justify-start">
        <div className="w-[600px]  bg-white mt-8 mb-8 rounded-3xl py-[50px]">
          {/* 1 cập nhật */}
          <div className="mt-[30px] flex justify-center flex-col items-center">
            <h2 className="font-bold text-[20px] text-gray-700 ">
              Cập nhật thông tin
            </h2>

            <div className="w-[100px] h-[100px] bg-blue-500 rounded-full flex justify-center items-center mt-2 cursor-pointer relative top-0 bottom-0 right-0 left-0">
              {selectImage ? (
                <img
                  src= {selectImage}
                  alt="abc"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                (
                  <img
                  src={defaultImage}
                    alt="abc"
                    className="w-full h-full object-cover rounded-full"
                  />
                )
              )}

              <input
                type="file"
                className="absolute top-0 left-0 right-0 bottom-0 opacity-0"
                onChange={handleImageChange}
              />
            </div>
          </div>
          {/* 2 input */}
          <div className=" flex flex-col  items-center mt-[50px] h-[250px]">
            <div className="rounded-2xl border-2 border-gray-300 p-2 bg-white mb-6">
              <input
                type="text"
                className="w-[400px]"
                placeholder="Tên của bạn"
              />
            </div>
            <div className="flex space-x-10 mt-4">
              <div className="rounded-2xl border-2 border-gray-300 p-2 bg-white mb-6 flex ">
                <div>
                  <label
                    htmlFor="male"
                    className="mr-2 border-gray-300 p-2 bg-white text-gray-400"
                  >
                    Nam
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      className="ml-2"
                    />
                  </label>
                  <label
                    htmlFor="female"
                    className="border-gray-300 p-2 bg-white text-gray-400"
                  >
                    Nữ
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      className="ml-2 w-[50px]"
                    />
                  </label>
                </div>
              </div>
              <div className="rounded-2xl border-2 border-gray-300 p-2 bg-white mb-6">
                <Space direction="vertical" className="">
                  <DatePicker
                    style={{
                      width: "",
                      height: "30px",
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      outline: "none",
                      borderRadius: "5px",
                    }}
                    onChange={onChange}
                  />
                </Space>
              </div>
            </div>
          </div>
          {/* 3 nút */}
          <div className="flex justify-center">
            <Button
              variant="default"
              size="default"
              className="bg-slate-400 text-white w-[150px] h-[50px] p-3 rounded-md hover:bg-slate-300 mr-7"
              onClick={quaylai}
            >
              Quay lại
            </Button>
            <Button
              variant="default"
              size="default"
              className="bg-blue-500 text-white w-[150px] h-[50px] p-3 rounded-md hover:bg-blue-600"
              onClick={hoantat}
            >
              Hoàn tất
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSignUp;
