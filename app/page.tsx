import RenderDateCard from "@/components/RenderDateCard";
import RenderSummaryCard from "@/components/Dashboard/RenderSummaryCard";
import RenderWeeklySpendingCard from "@/components/Dashboard/RenderWeeklySpendingCard";

export default function Home() {
  return (
    <>
      <RenderDateCard />
      <RenderSummaryCard />
      <RenderWeeklySpendingCard />
    </>
  );
}
