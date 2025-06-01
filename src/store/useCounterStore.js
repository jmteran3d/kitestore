import { create } from "zustand";

const initialState = {
  cartState: 0,
};

export const useCounterStore = create((set) => ({
  ...initialState,
  addProduct: () => set((state) => ({ cartState: state.cartState + 1 })),
  removeProduct: () => set((state) => ({ cartState: state.cartState - 1 })),
}));
