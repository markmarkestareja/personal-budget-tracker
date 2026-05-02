import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function RenderRemainingCard() {
  return (
    <Card className="w-full h-full flex-col md:flex-row lg:flex-col justify-around items-center">
      <CardHeader className="w-full">
        <CardTitle className="w-full text-center flex flex-col md:flex-row lg:flex-col items-center gap-2 md:gap-4 text-[12px] md:text-sm lg:text-base">
          <div className="bg-primary-muted p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
              </g>
            </svg>
          </div>
          REMAINING UNTIL <br /> MAY 1
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full flex flex-col items-center gap-2 md:gap-4">
        <p className="text-dark/75 text-[8px] md:text[10] lg:text-[12px]">
          After Fixed Expenses
        </p>
        <p className="text-primary text-[26px] md:text-[28px] lg:text-3xl font-bold whitespace-nowrap">
          ₱ 1, 550.00
        </p>
      </CardContent>
    </Card>
  );
}
