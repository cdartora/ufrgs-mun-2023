import shape from "../assets/shape.svg";
import wave from "../assets/wave2.svg";
import heroContent from "../assets/teste.svg";
import Motto from "../components/Motto.jsx";

export default function HeroSection() {
  return (
    <div className="bg-darkGreen relative">
      <div className="px-4 py-6 max-w-screen-md mx-auto">
        <div className="mb-10 z-30 w-full flex justify-center">
          {/* <div className="flex flex-col text-xl">
            <span className="italic font-bold">Atravesse</span>
            <span>a superfície.</span>
            <span>
              <span className="italic font-bold">Encontre</span> respostas
            </span>
            <span>desconhecidas</span>
          </div> */}

          <img
            src={heroContent}
            alt=""
            className="w-96"
            draggable="false"
            style={{ userSelect: "none" }}
            onmousedown="return false"
          />
        </div>
        <Motto />
      </div>
      {/* <div
        className="absolute w-full h-14 bg-no-repeat"
        style={{
          backgroundImage: `url(${shape})`,
          backgroundSize: "100% 100%",
        }}
      ></div> */}
      <img
        src={shape}
        className="block absolute w-full bottom-[-2px] z-10"
        draggable="false"
        style={{ userSelect: "none" }}
        onmousedown="return false"
      />
      <img
        src={wave}
        alt=""
        className="z-20 absolute top-0 opacity-20 h-full"
      />
    </div>
  );
}
