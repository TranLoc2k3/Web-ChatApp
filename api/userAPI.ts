import { axiosClient } from "@/configs/axios.config";
const userAPI = {
  onSignUp: async (
    url: string,
    payload: { username: string; password: string }
  ) => {
    try {
      const res= await  axiosClient.post(url,payload)
      return res.data;
    } catch (error) {
      return error;
    }
  },
  getUserByPhone:(url:string)=>{
    try {
      const res=axiosClient.get(url)
      return res;
    } catch (error) {
      return error;
    }
   

  }
};
export default userAPI;
