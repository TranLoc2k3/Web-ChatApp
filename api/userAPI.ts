import { axiosClient } from "@/configs/axios.config";
import { url } from "inspector";
import { use } from "react";

const userAPI = {
  onSignUp: (
    url: string,
    { username, password }: { username: string; password: string }
  ) =>
    axiosClient.post(url, {
      username,
      password,
    }),
  updateUserInfo: (
    url: string,
    {
      fullname,
      image,
      birthday,
      sex,
    }: { fullname: string; image: File; birthday: string; sex: string }
  ) =>
    axiosClient.post(
      url,
      {
        fullname,
        image,
        birthday,
        sex,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ),
  onSignIn: (username: string, password: string) =>
    axiosClient.post("/auth/sign-in", {
      username,
      password,
    }),
  getUserByPhone: (url: string) =>
    axiosClient.get(`${url}`).then((res) => res.data),
  updatePassword: (url: string,
    { username, password }: { username: string; password: string }) =>
    axiosClient.patch(url, {
      username,
      password,
    })
};

export { userAPI };