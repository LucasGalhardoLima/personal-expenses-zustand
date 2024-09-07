"use client";

import { DatePickerWithRange } from "@/components/Calendar";
import { Chart } from "@/components/Chart";
import { ExpenseItem } from "@/components/ExpenseItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useDashboard } from "@/stores/dashboard";
import { DollarSign, PiggyBank, Wallet } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  const { income, expenses, balance, period, updateDashboardValues } =
    useDashboard<{
      income: number;
      expenses: number;
      balance: number;
      period: Date[];
      updateDashboardValues: ({
        income,
        expenses,
        balance,
      }: {
        income: number;
        expenses: number;
        balance: number;
      }) => void;
    }>((state: any) => ({
      income: state.income,
      expenses: state.expenses,
      balance: state.balance,
      period: state.period,
      updateDashboardValues: state.updateDashboardValues,
    }));

  useEffect(() => {
    updateDashboardValues({
      income: Math.floor(Math.random() * 10000),
      expenses: Math.floor(Math.random() * 10000),
      balance: Math.floor(Math.random() * 10000),
    });
  }, [period]);

  const cards = [
    {
      title: "Total de entrada",
      value: Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(income),
      diff: "-$23,000 from last month",
      icon: <Wallet className="h-4 w-4" />,
    },
    {
      title: "Total de saida",
      value: Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(expenses),
      diff: "-$23,000 from last month",
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      title: "Lucros no período",
      value: Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(balance),
      diff: "-$23,000 from last month",
      icon: <PiggyBank className="h-4 w-4" />,
    },
  ];

  const contas = [
    {
      title: "Luz",
      amount: 350,
      tag: "Essencial",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cacb4e394c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Água",
      amount: 120,
      tag: "Essencial",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cacb4e394c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Combustível",
      amount: 300,
      tag: "Essencial",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cacb4e394c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Cartão de Credito",
      amount: 3000,
      tag: "Cartão de Credito",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cacb4e394c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Netflix",
      amount: 30,
      tag: "Assinatura",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cacb4e394c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Spotify",
      amount: 60,
      tag: "Assinatura",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cacb4e394c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Cartão de Credito",
      amount: 3000,
      tag: "Cartão de Credito",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cacb4e394c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Cartão de Credito",
      amount: 3000,
      tag: "Cartão de Credito",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cacb4e394c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  ];

  return (
    <main>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-semibold">Dashboard</h2>
        <DatePickerWithRange />
      </div>
      <div className="mt-2">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Card key={card.title}>
              <CardTitle className="p-6 flex flex-row items-center justify-between space-y-0 pb-2 text-sm font-medium">
                {card.title}
                {card.icon}
              </CardTitle>
              <CardContent className="p-6 pt-0">
                <h2 className="text-2xl font-bold">{card.value}</h2>
                <p className="text-xs text-muted-foreground">{card.diff}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-2">
          <Card className="col-span-4">
            <CardTitle className="flex flex-col space-y-1.5 p-6">
              Overview
            </CardTitle>
            <CardContent>
              <Chart />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardTitle className="flex flex-col space-y-1.5 p-6">
              Gastos recentes
            </CardTitle>
            <CardContent className="flex gap-4 flex-col">
              {contas.map((conta) => (
                <ExpenseItem key={conta.title} expenseItem={conta} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
