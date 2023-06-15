import TimelineCard from "./TimelineCard";
import timeline from "../data/timeline";

function TimelineCarousel() {
  return (
    <>
      <div className="scroll-smooth p-5 mt-4 flex w-full gap-4 snap-x overflow-x-auto relative">
        {timeline.map((cardData, index) => (
          <TimelineCard cardData={cardData} key={index} />
        ))}
        <div className="h-1 bg-brand-dark absolute z-10 w-[1600px] top-[50%] translate-y-[-50%] " />
      </div>
    </>
  );
}

export default TimelineCarousel;
