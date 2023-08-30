import CarouselCard from "./CarouselCard";
import { Title } from "./Formatting";

import calendar from "../assets/home/calendar.svg";
import deadlines from "../data/deadlines";

function DeadlinesSection() {
  return (
    <div className=" bg-darkGreen relative py-10 text-almostWhite">
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
          <Title>Cronograma</Title>
          <div className="scroll-smooth p-5 mt-4 flex w-full gap-4 snap-x overflow-x-auto z-20 md:justify-center">
            {deadlines.map((cardData, index) => (
              <CarouselCard cardData={cardData} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeadlinesSection;
