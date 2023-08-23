import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PartnersCarousel from "../components/PartnersCarousel";

import earth from "../assets/committees/earth.svg";
import anniversaryLogo from "../assets/committees/20-anos.svg";
import divider from "../assets/conference/divider.svg";
import dividerInverted from "../assets/conference/divider-inverted.svg";
import form from "../assets/apply/form.svg";
import formWhite from "../assets/partners/form-white.svg";

function Prepare() {
  return (
    <main className="App relative">
      <header className="text-lightTone">
        <NavBar />
        <div className="bg-darkGreen">
          <div className="max-w-screen-md px-8 pt-16 pb-4 mx-auto">
            <div className="flex flex-col items-center mb-6">
              <img
                src={anniversaryLogo}
                alt="Logo de aniversários dos 20 anos de UFRGSMUN"
                className="w-7 z-20"
              />
              <h3 className="font-black text-2xl z-20">Preparação</h3>
            </div>
            <h4 className="font-black text-lg mt-10 relative z-20">
              Preparação
            </h4>
            <p className="font-light relative z-20 mb-4">
              Prepare para o UFRGSMUN desse ano
            </p>
            <div>
              <div className="flex justify-center gap-4 text-sm md:flex-row flex-col w-full">
                <button className="rounded-full border-2 border-almostWhite bg-transparent text-almostWhite py-2 px-6 inline whitespace-nowrap">
                  Guia de estudos
                </button>
                <button className="rounded-full border-2 border-almostWhite bg-transparent text-almostWhite py-2 px-6 inline whitespace-nowrap">
                  Guia de regras
                </button>
                <button className="rounded-full border-2 border-almostWhite bg-transparent text-almostWhite py-2 px-6 inline whitespace-nowrap">
                  Relatório do país
                </button>
              </div>
              <h4 className="font-black text-lg mt-10 relative z-20">
                Política de prêmios
              </h4>
              <p className="font-light relative z-20 mb-4">
                Visando estimular e valorizar o trabalho em grupo e a cooperação, a XVI edição do UFRGSMUN não concederá prêmios.
              </p>
            </div>
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
            Guia de estudos dos comitês
          </div>
          <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 mx-auto mt-10">
            {
              Array(7).fill(null).map((_, index) => (
                <a key={index} href="https://www.google.com" target="_blank" className="hover:opacity-75">
                  <div className="h-[30vw] md:h-48 w-full bg-darkGray rounded-lg"></div>
                </a>))
            }
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Prepare;

