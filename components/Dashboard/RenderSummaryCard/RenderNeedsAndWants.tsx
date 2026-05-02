import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { dataNeedsAndWants } from "./dataNeedsAndWants";
import { Progress } from "@/components/ui/progress";
import RenderRemainingCard from "./RenderRemainingCard";

export default function RenderNeedsAndWants() {
  return (
    <div className="flex flex-col md:flex-row gap-[10px] md:gap-5 w-full">    
        {dataNeedsAndWants.map((cardItem, index) => (
            <Card key={index} className="ring ring-light-3 w-full flex-2 flex flex-col justify-between">
                <CardHeader className="flex gap-4 items-center">
                    <div className="bg-primary-muted size-max p-2 rounded-full">
                    {/* SVG */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19.298 9.566H4.702a1.96 1.96 0 0 0-1.535.744a1.94 1.94 0 0 0-.363 1.66l1.565 6.408a3.9 3.9 0 0 0 1.4 2.072c.682.519 1.517.8 2.376.8h7.708c.859 0 1.694-.281 2.376-.8a3.9 3.9 0 0 0 1.4-2.072l1.565-6.407a1.94 1.94 0 0 0-1.044-2.208a2 2 0 0 0-.854-.197M8.087 13.46v3.895M12 13.46v3.895m3.913-3.895v3.895m2.935-7.789a6.8 6.8 0 0 0-2.006-4.82A6.86 6.86 0 0 0 12 2.75a6.86 6.86 0 0 0-4.842 1.996a6.8 6.8 0 0 0-2.005 4.82"
                        />
                    </svg>
                    </div>
                    <div className="flex gap-2 items-center">
                    <CardTitle className="text-xl md:text-[22px] lg:text-2xl font-bold">
                        {cardItem.title}
                    </CardTitle>
                    <CardDescription className="text-[10px]">(This Week)</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col lg:flex-row gap-3 md:gap-6">
                    <div className="flex flex-col gap-1">
                    <h2 className="text-[10px] md:text-[12px] lg:text-sm text-dark/75">
                        Weekly Budget
                    </h2>
                    <p className="text-[12px] md:text-sm lg:text-base">
                        ₱ {cardItem.weeklyBudget.toLocaleString("en-PH", {minimumFractionDigits: 2})}
                    </p>
                    </div>
                    <div className="flex flex-col gap-1">
                    <h2 className="text-[10px] md:text-[12px] lg:text-sm text-dark/75">
                        Spent
                    </h2>
                    <p className="text-[12px] md:text-sm lg:text-base">₱ {cardItem.spent.toLocaleString("en-PH", {minimumFractionDigits: 2})}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                    <h2 className="text-[10px] md:text-[12px] lg:text-sm">Remaining</h2>
                    <p className="text-xl md:text-[22px] lg:text-2xl text-primary font-bold">
                        ₱ {cardItem.remaining.toLocaleString("en-PH", {minimumFractionDigits: 2})}
                    </p>
                    </div>
                </CardContent>
                <CardFooter className="bg-light border-0 flex gap-4 pt-0">
                    <Progress value={cardItem.progressBar} className="bg-primary-muted h-1.5" />
                    <div className="flex whitespace-nowrap">
                        {cardItem.progressBar}% used
                    </div>
                </CardFooter>
            </Card>
        ))}

        <div className="hidden lg:block w-full flex-1">
            <RenderRemainingCard />
        </div>
    </div>
  );
}
