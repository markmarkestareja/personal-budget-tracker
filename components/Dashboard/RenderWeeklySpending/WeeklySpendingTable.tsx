import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

type ExpenseType = {
    description: string,
    spent: number,
    budget: number,
}

const expenses: ExpenseType[] = [
    {
        description: "Transportation",
        spent: 350,
        budget: 600,
    },
]

export default function WeeklySpendingTable() {
  return (
    <Table>
        <TableHeader>
            <TableHead>Description</TableHead>
            <TableHead>Spent</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Remaining</TableHead>
        </TableHeader>

        <TableBody>
            {expenses.map((expense, index) => (
                <TableRow key={index}>
                    <TableCell>{expense.description}</TableCell>
                    <TableCell>{expense.spent}</TableCell>
                    <TableCell>{expense.budget}</TableCell>
                    <TableCell>{expense.budget - expense.spent}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  )
}
