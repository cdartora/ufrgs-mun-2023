import CarouselCard from "./CarouselCard";
import wave from "../assets/wave-2.svg";
import calendar from "../assets/calendar.svg";
const dates = [
  {
    month: "AGO",
    day: "01",
    name: "Lançamento matriz de países",
  },
  {
    month: "AGO",
    day: "05",
    name: "Abertura das inscrições",
  },
  {
    month: "SET",
    day: "02",
    name: "Prazo edital de benefícios",
  },
  {
    month: "SET",
    day: "23",
    name: "Abertura do formulário B",
  },
  {
    month: "SET",
    day: "25",
    name: "Lançamento guias de estudos",
  },
  {
    month: "OUT",
    day: "31",
    name: "Primeiro dia do UFRGSMUN",
  },
];

function DeadlinesSection() {
  return (
    <div className=" bg-brand-darker relative pb-10">
      <div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <img
            src={calendar}
            alt=""
            className="w-7"
            draggable="false"
            style={{ userSelect: "none" }}
            onmousedown="return false"
          />
          <h4 className="text-lg font-extrabold text-zinc-200">Cronograma</h4>
          <div className="scroll-smooth p-5 mt-4 flex w-full gap-4 snap-x overflow-x-auto z-20 md:justify-center">
            {dates.map((cardData) => (
              <CarouselCard
                cardData={cardData}
                key={cardData.backgroundImage}
              />
            ))}
          </div>
        </div>
      </div>
      <img
        src={wave}
        className="absolute w-full opacity-20 z-10 top-10"
        draggable="false"
        style={{ userSelect: "none" }}
        onmousedown="return false"
      />
    </div>
  );
}

export default DeadlinesSection;
