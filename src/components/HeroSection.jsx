import Motto from "../components/Motto.jsx";
import SectionContainer from "./SectionContainer";

import wave from "../assets/home/hero/wave.svg";
import divider from "../assets/home/hero/divider.svg";
import dividerDesktop from "../assets/home/hero/divider-desktop.svg";
import heroContent from "../assets/home/hero/content.svg";

export default function HeroSection() {
  return (
    <div className="bg-darkGreen relative">
      <SectionContainer>
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
        src={dividerDesktop}
        className="block absolute w-full h-12 md:h-16 lg:h-20 bottom-0 z-20"
        draggable="false"
        style={{ userSelect: "none" }}
        onMouseDown={() => false}
      />
      {/* <img
        src={wave}
        alt=""
        className="z-10 absolute -top-40 opacity-10 h-full"
        draggable="false"
        style={{ userSelect: "none" }}
        onMouseDown={() => false}
      /> */}
    </div>
  );
}
