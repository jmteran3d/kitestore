import { create } from "zustand";

export const useCounterStore = create((set) => ({
  cartState: 0,
  addProduct: () => set((state) => ({ cartState: state.cartState + 1 })),
  removeProduct: () => set((state) => ({ cartState: state.cartState - 1 })),
}));
