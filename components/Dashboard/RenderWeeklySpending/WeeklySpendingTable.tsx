import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ExpenseType = {
  description: string;
  spent: number;
  budget: number;
  svg?: React.ReactNode;
};

const expenses: ExpenseType[] = [
  {
    description: "Transportation",
    spent: 350,
    budget: 600,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="var(--primary)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
          <path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H9m-6-6h15m-6 0V6" />
        </g>
      </svg>
    ),
  },
  {
    description: "Lunch",
    spent: 750,
    budget: 1200,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="var(--primary)"
          d="M8.1 13.34L3.91 9.16a4.01 4.01 0 0 1 0-5.66l7.02 7zm6.78-1.81L13.41 13l6.88 6.88l-1.41 1.41L12 14.41l-6.88 6.88l-1.41-1.41l9.76-9.76c-.71-1.53-.21-3.68 1.38-5.27c1.91-1.92 4.65-2.28 6.11-.82c1.47 1.47 1.11 4.21-.81 6.12c-1.59 1.59-3.74 2.09-5.27 1.38"
        />
      </svg>
    ),
  },
  {
    description: "Snacks",
    spent: 350,
    budget: 600,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="var(--primary)"
            strokeWidth="1.5"
          />
          <path
            stroke="var(--primary)"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M14.5 7L16 5m3 2l1-1m-8-1l-1-1m-.5 3l-1.366.366M7 5L6 4m.792 5.144l-.585-1.288"
          />
          <path
            fill="var(--primary)"
            d="m12.5 22l.034.75a.75.75 0 0 0 .569-1.196zm.444-2.372l.446.603zm6.535-4.833l-.446-.603zm-4.86 4.06l.603-.446zm.7-2.85l.446.603zm2.93.165l.604-.446zm3.378-1.453l-.487.57a.75.75 0 0 0 1.208-.367zm-3.043 1.906l-.603.446a.75.75 0 0 0 1.133.084zm.101-.102l.53.53a.75.75 0 0 0 .21-.654zm-4.066 2.77l-.225.715a.75.75 0 0 0 .755-.185zm.185-.185l.53.53a.75.75 0 0 0 .073-.976zM3.021 17.913a.75.75 0 1 0 1.252-.826zm4.943 2.412a.75.75 0 1 0-.656 1.35zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm1.103 18.804c-.233-.315-.2-.963.287-1.323l-.892-1.206c-1.117.826-1.353 2.404-.601 3.421zm2.12-3.145c-.296-.4-.237-1.224.542-1.8l-.892-1.207c-1.225.907-1.793 2.633-.857 3.9zm.542-1.8c.78-.577 1.586-.392 1.881.007l1.206-.892c-.936-1.265-2.753-1.228-3.979-.322zm4.16-1.211c.496-.367 1-.293 1.215-.11l.973-1.142c-.867-.739-2.162-.633-3.08.046zM21.25 12a9.3 9.3 0 0 1-.345 2.514l1.443.406c.262-.93.402-1.909.402-2.92zm-8.784 9.25c-.134.007-.264 0-.466 0v1.5c.11 0 .36.007.534 0zm5.18-4.634l.335.453l1.206-.892l-.335-.453zm1.78-.219c-.047-.274.086-.694.499-.999l-.892-1.206c-.791.585-1.24 1.536-1.087 2.453zm-.312.756l.102-.101l-1.06-1.061l-.102.101zm-5.724 3.078c.357-.265.745-.306 1.004-.225l.45-1.43c-.767-.242-1.648-.068-2.346.449zm.626-.93l.185.25l1.206-.891l-.185-.25zm1.133.52l.186-.185l-1.061-1.06l-.185.185zM4.273 17.087A9.2 9.2 0 0 1 2.75 12h-1.5c0 2.183.652 4.216 1.771 5.913zM12 21.25a9.2 9.2 0 0 1-4.036-.925l-.656 1.35A10.7 10.7 0 0 0 12 22.75z"
          />
          <path
            stroke="var(--primary)"
            strokeWidth="1.5"
            d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m6.613 2c-.5-.5-1.529-.861-2-1.276"
          />
          <path
            stroke="var(--primary)"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="m16.65 8.977l.066 1.412m3.962-.304L19 11.563M5.665 12.641L6.5 11.5m-2.817-1.15l-.079-1.412"
          />
        </g>
      </svg>
    ),
  },
];

export default function WeeklySpendingTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Description</TableHead>
          <TableHead>Spent</TableHead>
          <TableHead>Budget</TableHead>
          <TableHead>Remaining</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {expenses.map((expense, index) => (
          <TableRow key={index}>
            <TableCell className="flex gap-2 p-4 items-center"><span className="bg-primary-muted p-2 rounded-full">{expense.svg}</span>{expense.description}</TableCell>
            <TableCell className="p-4">₱ {expense.spent.toLocaleString("en-PH", {minimumFractionDigits: 2})}</TableCell>
            <TableCell className="p-4">₱ {expense.budget.toLocaleString("en-PH", {minimumFractionDigits: 2})}</TableCell>
            <TableCell className="p-4">₱ {(expense.budget - expense.spent).toLocaleString("en-PH", {minimumFractionDigits: 2})}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
