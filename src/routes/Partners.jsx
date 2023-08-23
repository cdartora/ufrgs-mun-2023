import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PartnersCarousel from "../components/PartnersCarousel";

import earth from "../assets/committees/earth.svg";
import anniversaryLogo from "../assets/committees/20-anos.svg";
import divider from "../assets/conference/divider.svg";
import dividerInverted from "../assets/conference/divider-inverted.svg";
import form from "../assets/apply/form.svg";
import formWhite from "../assets/partners/form-white.svg";

const supporters = [
  {
    img: "nothing",
    url: "https://www.google.com"
  },
];

function Partners() {
  return (
    <main className="App relative">
      <header className="text-lightTone">
        <NavBar />
        <div className="bg-darkGreen">
          <div className="max-w-screen-md px-8 py-16 mx-auto">
            <div className="flex flex-col items-center mb-6">
              <img
                src={anniversaryLogo}
                alt="Logo de aniversários dos 20 anos de UFRGSMUN"
                className="w-7 z-20"
              />
              <h3 className="font-black text-2xl z-20">Parceiros</h3>
            </div>
            <h4 className="font-black text-lg mb-4 relative z-20">
              Patrocinadores
            </h4>
            <p className="font-light relative z-20">
              UFRGSMUN não seria possível sem o apoio de instituições incríveis que acreditam na importância do evento, resultando nas ótimas parcerias que construímos este ano! Confira mais sobre elas!
            </p>
          </div>
          <img
            src={earth}
            className="absolute z-10 right-0 top-0 w-52 opacity-10"
            draggable="false"
            style={{ userSelect: "none" }}
            onMouseDown={() => false}
          />
        </div>

      </header>

      <div className="bg-white relative pt-20 pb-5">
        <img
          src={divider}
          className="absolute w-full h-12 md:h-16 lg:h-20 top-0 z-30"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
        <div className="flex flex-col items-center max-w-screen-md p-8 mx-auto">
          <div className="py-2 px-10 bg-darkGreen font-black text-almostWhite rounded-full">
            Patrocinadores
          </div>
          <PartnersCarousel />
          <div className="flex justify-center items-center gap-2 w-full mb-4 mt-10">
            <img src={form} alt="" className="w-5" />
            <h3 className="font-black text-xl text-darkTone z-20">
              Realizadores
            </h3>
            <div className="h-[1.5px] bg-darkGreen w-full" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <a href="https://www.google.com" target="_blank" className="hover:opacity-75">
              <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
            </a>
            <a href="https://www.google.com" target="_blank" className="hover:opacity-75">
              <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
            </a>
            <a href="https://www.google.com" target="_blank" className="hover:opacity-75">
              <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
            </a>
            <a href="https://www.google.com" target="_blank" className="hover:opacity-75">
              <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
            </a>
            <a href="https://www.google.com" target="_blank" className="hover:opacity-75">
              <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
            </a>
          </div>
        </div>
        <img
          src={dividerInverted}
          className="absolute w-full h-12 md:h-16 lg:h-20 bot-0 z-30"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>

      <div className="bg-brand-dark relative py-8">
        <div className="flex flex-col items-center max-w-screen-md p-8 mx-auto">
          <div className="flex w-full justify-center items-center gap-2 mb-4">
            <img src={formWhite} alt="" className="w-5 text-almostWhite" />
            <h3 className="font-black text-xl text-almostWhite z-20">
              Apoio
            </h3>
            <div className="h-[1.5px] bg-almostWhite w-full" />
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {
              Array(15).fill(null).map((_, index) => (
                <a key={index} href="https://www.google.com" target="_blank" className="hover:opacity-75">
                  <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
                </a>))
            }
          </div>

          <div className="text-left flex w-full justify-center items-center gap-2 mb-4 mt-10">
            <div className="h-[1.5px] bg-almostWhite w-full" />
            <h3 className="font-black text-xl text-almostWhite z-20 inline whitespace-nowrap">
              Muns parceiros
            </h3>
            <img src={formWhite} alt="" className="w-5 text-almostWhite" />
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {
              Array(15).fill(null).map((_, index) => (
                <a key={index} href="https://www.google.com" target="_blank" className="hover:opacity-75">
                  <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
                </a>))
            }
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Partners;
