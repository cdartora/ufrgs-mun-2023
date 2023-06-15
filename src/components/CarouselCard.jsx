import React from "react";

function CarouselCard({ cardData }) {
  const { month, day, name } = cardData;
  return (
    <div className="min-w-[150px] max-w-[150px]">
      <div className="rounded-3xl bg-zinc-200 flex flex-col h-36 relative overflow-hidden">
        <div className="bg-calendar-grey rounded-full flex flex-col justify-center items-center -mt-10 -mx-2 relative font-extrabold text-zinc-200 shadow-md">
          <div className="flex flex-col items-center pt-12 pb-2">
            <h5>{month}</h5>
            <h5>{day}</h5>
          </div>
        </div>
        <div className="px-4 py-2 text-center">
          <p className="text-xs text-calendar-text font-light">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
