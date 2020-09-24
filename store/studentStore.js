import create from "zustand";

export const useStudentStore = create((set) => ({
  key: "",
  setKey: (value) => set({ key: value }),
  name: "",
  setName: (value) => set({ name: value }),
  age: null,
  setAge: (value) => set({ age: value }),
  address: "",
  setAddress: (value) => set({ address: value }),
  gender: "",
  setGender: (value) => set({ gender: value }),
  showModal: false,
  setShowModal: (value) => {
    set({ showModal: value });
  },
  data: [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      gender: "male",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      gender: "male",
    },
  ],
  setData: (value) => set({ data: value }),
  searchResult: [],
  setSearchResult: (value) => set({ searchResult: value }),
}));
