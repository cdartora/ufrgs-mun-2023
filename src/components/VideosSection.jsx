import { Title } from "./Formatting";
import SectionContainer from "./SectionContainer";

import earth from "../assets/home/videos/earth.svg";
import divider from "../assets/divider-green-inverted.png";

function VideosSection() {
  return (
    <>
      <div className="relative text-darkTone">
        <SectionContainer className="pt-2 pb-40">
          <div className="flex flex-col items-center justify-center">
            <Title className="w-full mb-2">Teaser</Title>
            <iframe
              className="youtube rounded-2xl shadow-xlg"
              src="https://www.youtube-nocookie.com/embed/JwkBcE0qRdM?rel=0&amp;controls=0&amp;showinfo=0"
              allow="autoplay; encrypted-media"
              allowFullScreen=""
            ></iframe>
            <Title className="w-full mb-2 mt-4">Mais vídeos</Title>
            <iframe
              className="youtube rounded-2xl shadow-xlg z-20"
              src="https://www.youtube-nocookie.com/embed/JwkBcE0qRdM?rel=0&amp;controls=0&amp;showinfo=0"
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
          className="absolute w-full h-12 md:h-16 lg:h-20 bottom-0 z-30"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>
    </>
  );
}

export default VideosSection;
