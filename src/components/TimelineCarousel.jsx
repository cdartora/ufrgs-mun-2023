import earth from "../assets/about/earth.svg";

const years = [];
for (let year = 2003; year < 2023; year++) {
  years.push(year);
}

function TimelineCarousel() {
  return (
    <>
      <div className="scroll-smooth p-5 mt-4 flex w-full gap-4 snap-x overflow-x-auto relative">
        {years.map((cardData, index) => (
          <div
            className="cursor-pointer relative shadow-lg z-20 rounded-full w-12 h-12 bg-brand-dark p-5 flex justify-center items-center font-extrabold text-white text-xs text-center"
            key={index}
          >
            {cardData}
            <img
              src={earth}
              className="absolute z-10 overflow-hidden opacity-20 right-0"
              draggable="false"
              style={{ userSelect: "none" }}
              onMouseDown={() => false}
            />
          </div>
        ))}
        <div className="h-1 bg-brand-dark absolute z-10 w-[1600px] top-[50%] translate-y-[-50%] " />
      </div>
    </>
  );
}

export default TimelineCarousel;
