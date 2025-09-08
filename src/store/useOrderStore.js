import { create } from "zustand";

const useOrderStore = create((set) => ({
  orders: [],

  addOrder: (recipe) =>
    set((state) => {
      // avoid duplicate orders
      const exists = state.orders.find((o) => o.idMeal === recipe.idMeal);
      if (exists) return state;
      return { orders: [...state.orders, recipe] };
    }),

  removeOrder: (idMeal) =>
    set((state) => ({
      orders: state.orders.filter((o) => o.idMeal !== idMeal),
    })),

  clearOrders: () => set({ orders: [] }),
}));

export default useOrderStore;
