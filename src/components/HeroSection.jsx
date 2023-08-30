import Motto from "../components/Motto.jsx";
import SectionContainer from "./SectionContainer";

import heroContent from "../assets/home/hero/content.svg";
import divider from "../assets/divider-white-inverted.png";
import wave from "../assets/wave.svg";

export default function HeroSection() {
  return (
    <div
      className="bg-darkGreen relative bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${wave})` }}
    >
      <SectionContainer className="pb-40">
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
        className="absolute w-full h-auto bottom-0 "
        draggable="false"
        style={{ userSelect: "none" }}
        onMouseDown={() => false}
      />
    </div>
  );
}
