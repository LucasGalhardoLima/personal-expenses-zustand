import { create } from "zustand";

export const useDashboard = create((set) => ({
  income: 22000,
  expenses: 11000,
  balance: 5000,
  period: {
    from: new Date(),
    to: new Date(),
  },
  updatePeriod: ({ from, to }: { from: Date; to: Date }) => {
    set({ period: { from, to } });
  },
  updateDashboardValues: ({
    income,
    expenses,
    balance,
  }: {
    income: number;
    expenses: number;
    balance: number;
  }) => set({ income, expenses, balance }),
}));
