const years = [];

for (let year = 2003; year < 2023; year++) {
  years.push(year);
}

function TimelineCarousel() {
  return (
    <div className="scroll-smooth p-5 mt-4 flex w-full gap-4 snap-x overflow-x-auto z-20 md:justify-center">
      {years.map((cardData, index) => (
        <div
          className="shadow-lg rounded-full w-12 h-12 bg-brand-dark p-5 flex justify-center items-center font-extrabold text-white text-xs text-center"
          key={index}
        >
          {cardData}
        </div>
      ))}
    </div>
  );
}

export default TimelineCarousel;
