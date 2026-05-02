import RenderNeedsAndWants from "./RenderSummaryCard/RenderNeedsAndWants";
import RenderRemainingCard from "./RenderSummaryCard/RenderRemainingCard";

export default function RenderSummaryCard() {

  return (
    <div className="flex flex-col lg:flex-row gap-2.5 md:gap-5">
      <RenderNeedsAndWants />
      <div className="lg:hidden">
        <RenderRemainingCard />
      </div>
    </div>
  );
}
