import { create } from "zustand";
interface UserState {
  user: string | null;
  setUser: (newUser: string) => void;
}
// localStorage, để đảm bảo rằng chúng ta chỉ thực hiện các hoạt động localStorage khi chạy trên client-side.
const UseStore = create<UserState>((set) => ({
  user: typeof window !=="undefined"?localStorage.getItem("user")??null:null,
  setUser: (newUser: string) => {
    set({ user: newUser });
    if(typeof window !=="undefined"){
      localStorage.setItem("user", newUser);
    }
  },
}));

export default UseStore;
