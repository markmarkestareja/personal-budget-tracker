import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RenderSummaryCard() {
  return (
    <div>
      <div>
        <Card className="ring ring-light-3">
          <CardHeader className="flex gap-4 items-center">
            <div className="bg-light-2 size-max p-2 rounded-full">
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
              <CardTitle className="text-xl md:text-[22px] lg:text-2xl font-bold">NEEDS</CardTitle>
              <CardDescription className="text-[10px]">(This Week)</CardDescription>
              <CardContent className="flex flex-col">
                <div>
                    <h2>Weekly Budget</h2>
                </div>
              </CardContent>
            </div>
          </CardHeader>
        </Card>
        <div>Wants</div>
      </div>
      <div>Remaining</div>
    </div>
  );
}
