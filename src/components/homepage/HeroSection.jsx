import Motto from "./Motto.jsx";
import SectionContainer from "../SectionContainer.jsx";

import heroContent from "../../assets/content.svg";
import divider from "../../assets/divider-white-inverted.svg";
import wave from "../../assets/wave.svg";

export default function HeroSection() {
  return (
    <div
      className="bg-darkGreen text-almostWhite relative bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${wave})` }}
    >
      <SectionContainer className="lg:pb-40">
        <div className="mt-4 mb-2 z-30 w-full flex justify-center">
          <img
            src={heroContent}
            alt=""
            className="w-96"
            draggable="false"
            style={{ userSelect: "none" }}
            onMouseDown={() => false}
          />
        </div>
        <Motto />
      </SectionContainer>
      <img
        src={divider}
        className="absolute w-full h-auto bottom-0 transform rotate-x-180 transform-origin-center"
        draggable="false"
        style={{ userSelect: "none" }}
        onMouseDown={() => false}
      />
    </div>
  );
}
