import { create } from "zustand";

const initialState = {
  cart: [],
};

export const useProductsStore = create((set) => ({
    ...initialState,

    addProductToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      console.log(product);

      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),

}));