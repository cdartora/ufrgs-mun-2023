import earth from "../assets/home/videos/earth.svg";
import divider from "../assets/home/videos/divider.svg";
import dividerDesktop from "../assets/home/videos/divider-desktop.svg";

function VideosSection() {
  return (
    <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center px-4 pb-16 mt-5">
      <div className="px-6 z-20">
        <div className="w-full font-extrabold text-2xl text-brand-grey mb-2">
          Teaser
        </div>
        <iframe
          className="youtube rounded-2xl shadow-xlg"
          src="https://www.youtube-nocookie.com/embed/JwkBcE0qRdM?rel=0&amp;controls=0&amp;showinfo=0"
          allow="autoplay; encrypted-media"
          allowFullScreen=""
        ></iframe>
        <div className="w-full font-extrabold text-2xl text-brand-grey mb-2 mt-4">
          Mais vídeos
        </div>
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
        className="z-10 absolute -left-20 bottom-0 hidden md:block"
        draggable="false"
        style={{ userSelect: "none" }}
        onMouseDown={() => false}
        width={400}
      />
      {/* <img
        src={divider}
        alt=""
        className="md:hidden z-30 absolute -bottom-[1px] w-full"
        draggable="false"
        style={{ userSelect: "none" }}
        onMouseDown={() => false}
      /> */}
      <img
        src={dividerDesktop}
        className="block absolute w-screen h-12 md:h-16 lg:h-20 bottom-0 z-20"
        draggable="false"
        style={{ userSelect: "none" }}
        onMouseDown={() => false}
      />
    </div>
  );
}

export default VideosSection;
