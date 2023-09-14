import { Title } from "../Formatting";
import SectionContainer from "../SectionContainer";

import earth from "../../assets/earth.svg";
import divider from "../../assets/divider-green-inverted.svg";

function VideosSection() {
  return (
    <>
      <div className="relative text-darkTone">
        <SectionContainer className="lg:pt-0 pb-40">
          <div className="flex flex-col items-center justify-center">
            <Title className="w-full mb-2">Teaser</Title>
            <iframe
              className="youtube rounded-2xl shadow-xlg"
              src="https://www.youtube.com/embed/W1TgOzDLBSM"
              allow="autoplay; encrypted-media"
              allowFullScreen=""
            ></iframe>
          </div>
          <img
            src={earth}
            alt=""
            className="z-10 absolute -left-20 bottom-0 md:hidden"
            draggable="false"
            style={{ userSelect: "none" }}
            onMouseDown={() => false}
            width={300}
          />
          <img
            src={earth}
            alt=""
            className="z-10 absolute -left-20 bottom-10 hidden md:block"
            draggable="false"
            style={{ userSelect: "none" }}
            onMouseDown={() => false}
            width={400}
          />
        </SectionContainer>
        <img
          src={divider}
          className="absolute w-full bottom-0 z-30"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>
    </>
  );
}

export default VideosSection;
