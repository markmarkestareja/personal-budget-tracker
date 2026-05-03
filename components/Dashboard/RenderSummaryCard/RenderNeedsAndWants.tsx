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
        <Card
          key={index}
          className="ring ring-light-3 w-full flex-2 flex flex-col justify-between"
        >
          <CardHeader className="flex gap-4 items-center">
            <div className="bg-primary-muted size-max p-2 rounded-full">
              {/* SVG */}
              {cardItem.svg}
            </div>
            <div className="flex gap-2 items-center">
              <CardTitle className="text-xl md:text-[22px] lg:text-2xl">
                {cardItem.title}
              </CardTitle>
              <CardDescription className="text-[10px]">
                (This Week)
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col lg:flex-row gap-3 md:gap-6">
            <div className="flex flex-col gap-1 justify-between">
              <h2 className="text-[10px] md:text-[12px] lg:text-sm text-dark/75">
                Weekly Budget
              </h2>
              <p className="text-[12px] md:text-sm lg:text-base whitespace-nowrap">
                ₱{" "}
                {cardItem.weeklyBudget.toLocaleString("en-PH", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="flex flex-col gap-1 justify-between">
              <h2 className="text-[10px] md:text-[12px] lg:text-sm text-dark/75">
                Spent
              </h2>
              <p className="text-[12px] md:text-sm lg:text-base whitespace-nowrap">
                ₱{" "}
                {cardItem.spent.toLocaleString("en-PH", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="flex flex-col gap-1 justify-between">
              <h2 className="text-[10px] md:text-[12px] lg:text-sm">
                Remaining
              </h2>
              <p className="text-xl md:text-[22px] lg:text-2xl text-primary font-bold whitespace-nowrap">
                ₱{" "}
                {cardItem.remaining.toLocaleString("en-PH", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </CardContent>
          <CardFooter className="bg-light border-0 flex gap-4 pt-0">
            <Progress
              value={cardItem.progressBar}
              className="bg-primary-muted h-1.5"
            />
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
