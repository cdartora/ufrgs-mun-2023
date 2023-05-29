import CarouselCard from "./CarouselCard";
import wave from "../assets/home/deadlines/wave.svg";
import calendar from "../assets/home/deadlines/calendar.svg";
import deadlines from "../data/deadlines";

function DeadlinesSection() {
  return (
    <div className=" bg-brand-darker relative py-10">
      <div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <img
            src={calendar}
            alt=""
            className="w-7"
            draggable="false"
            style={{ userSelect: "none" }}
            onMouseDown={() => false}
          />
          <h4 className="text-lg font-extrabold text-zinc-200">Cronograma</h4>
          <div className="scroll-smooth p-5 mt-4 flex w-full gap-4 snap-x overflow-x-auto z-20 md:justify-center">
            {deadlines.map((cardData, index) => (
              <CarouselCard cardData={cardData} key={index} />
            ))}
          </div>
        </div>
        <img
          src={wave}
          className="absolute w-full h-48 md:h-52 lg:h-56 opacity-20 z-10 top-0 bottom-0 my-auto"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>
    </div>
  );
}

export default DeadlinesSection;
