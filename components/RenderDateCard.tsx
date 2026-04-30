import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RenderDateCard() {
  const nextPayDay = new Date(2026, 4, 16);
  const remainingDays = GetRemainingDays(nextPayDay);

  console.log(remainingDays);

  function GetRemainingDays(targetDate: Date) {
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }

  function calculateRemainingDays() {
    return remainingDays > 0
      ? `${remainingDays}  day${remainingDays > 1 ? "s" : ""}`
      : "Today is payday";
  }

  const dateCardData = [
    {
      title: "Current Period",
      dateInfo: "Apr 16 - April 30, 2026",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            d="M7.5 6V1m10 5V1m4 16v4.5h-18v-3m17.863-10H3.352M.5 18.25v.25h17.9l.15-.25l.234-.491A28 28 0 0 0 21.5 5.729V3.5h-18v2.128A28 28 0 0 1 .743 17.744z"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: "Next Salary",
      dateInfo: "Apr 16, 2026 (Thu)",
      svg: (
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
            strokeWidth="1.5"
          >
            <path d="M12 6v12m3-8.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5" />
            <path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
          </g>
        </svg>
      ),
    },
    {
      title: "Next Salary In",
      dateInfo: calculateRemainingDays(),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            d="M7.5 6V1m10 5V1m4 16v4.5h-18v-3m17.863-10H3.352M.5 18.25v.25h17.9l.15-.25l.234-.491A28 28 0 0 0 21.5 5.729V3.5h-18v2.128A28 28 0 0 1 .743 17.744z"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5">
      {dateCardData.map((item, index) => (
        <Card key={index} className="w-full bg-light-2 ring-1 ring-light-3">
          <div className="flex flex-col lg:flex-row gap-3 md:gap-0">
            <div className="flex items-center pl-4">
              {/* SVG */}
              {item.svg}
            </div>
            <div className="">
              <CardHeader>
                <CardTitle className="text-[8px] md:text-[10px] lg:text-[12px]">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[10px] md:text-[14px] lg:text-[16px] font-bold">
                  {item.dateInfo}
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
