import create from "zustand";

export const useMsg = create((set) => ({
  msg: "",
  setMsg: (value) => set({ msg: value }),
}));
