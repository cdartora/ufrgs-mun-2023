import wave from "../assets/home/hero/wave.svg";
import divider from "../assets/home/hero/divider.svg";
import dividerDesktop from "../assets/home/hero/divider-desktop.svg";
import heroContent from "../assets/home/hero/content.svg";
import Motto from "../components/Motto.jsx";

export default function HeroSection() {
  return (
    <div className="bg-darkGreen relative">
      <div className="px-4 py-6 max-w-screen-md mx-auto">
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
      </div>
      <img
        src={dividerDesktop}
        className="block absolute w-full h-12 md:h-16 lg:h-20 bottom-0 z-20"
        draggable="false"
        style={{ userSelect: "none" }}
        onMouseDown={() => false}
      />
      {/* <img
        src={dividerDesktop}
        className="hidden absolute w-full max-h-8 bottom-[-2px] z-20 md:block"
        draggable="false"
        style={{ userSelect: "none" }}
        onMouseDown={() => false}
      /> */}
      <img
        src={wave}
        alt=""
        className="z-10 absolute -top-40 opacity-10 h-full"
        draggable="false"
        style={{ userSelect: "none" }}
        onMouseDown={() => false}
      />
    </div>
  );
}
