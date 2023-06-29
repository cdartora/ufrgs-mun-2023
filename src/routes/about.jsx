import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
import anniversaryLogo from "../assets/about/20-anos.svg";
import TimelineCarousel from "../components/TimelineCarousel";
import divider from "../assets/about/divider.svg";
import dividerInverted from "../assets/about/divider-inverted.svg";
import wave from "../assets/about/wave.svg";
import wave2 from "../assets/about/wave-2.svg";
import dialog from "../assets/about/dialog.svg";

import earth from "../assets/about/earth.svg";

export default function About() {
  return (
    <main className="App">
      <header className="text-zinc-200 relative pb-10">
        <NavBar />
        <div>
          <div className="max-w-screen-md p-8 mx-auto ">
            <div className="flex flex-col items-center mb-6">
              <img
                src={anniversaryLogo}
                alt="Logo de aniversários dos 20 anos de UFRGSMUN"
                className="w-7 z-20"
              />
              <h3 className="font-extrabold text-xl text-green-text z-20">
                Sobre
              </h3>
            </div>
            <h4 className="font-extrabold text-sm text-black mb-4 relative z-20">
              O que é um modelo da ONU?
            </h4>
            <p className="text-calendar-text text-xs font-light relative z-20">
              Um “Modelo das Nações Unidas” é uma conferência que proporciona
              aos seus participantes uma simulação sobre temas importantes da
              agenda internacional, de acordo com as regras de procedimento das
              próprias reuniões das Nações Unidas. Durante a simulação, os
              participantes atuarão como delegados de diversos países, com a
              responsabilidade de sustentar suas posições ao longo das
              discussões e defender seus interesses de acordo com suas
              respectivas políticas externas. Além disso, os MUNs oferecem a
              oportunidade de atuar, além de representantes diplomáticos, como
              Chefes de Estado, Ministros, juízes ou mesmo como jornalistas no
              comitê de imprensa internacional, cobrindo as discussões que
              ocorrem nos comitês dos órgãos da ONU.
            </p>
          </div>
          <img
            src={earth}
            className="absolute z-10 right-0 top-0 w-52"
            draggable="false"
            style={{ userSelect: "none" }}
            onMouseDown={() => false}
          />
        </div>
      </header>

      <div className="bg-brand-dark relative py-20">
        <img
          src={divider}
          className="absolute w-full h-12 md:h-16 lg:h-20 top-0 z-30"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
        <div className="max-w-screen-md p-8 text-right mx-auto">
          <h4 className="font-extrabold text-sm text-lightTone mb-4">
            E o UFRGSMUN?
          </h4>
          <p className="text-lightTone text-xs font-light">
            Um “Modelo das Nações Unidas” é uma conferência que proporciona aos
            seus participantes uma simulação sobre temas importantes da agenda
            internacional, de acordo com as regras de procedimento das próprias
            reuniões das Nações Unidas. Durante a simulação, os participantes
            atuarão como delegados de diversos países, com a responsabilidade de
            sustentar suas posições ao longo das discussões e defender seus
            interesses de acordo com suas respectivas políticas externas. Além
            disso, os MUNs oferecem a oportunidade de atuar, além de
            representantes diplomáticos, como Chefes de Estado, Ministros,
            juízes ou mesmo como jornalistas no comitê de imprensa
            internacional, cobrindo as discussões que ocorrem nos comitês dos
            órgãos da ONU.
          </p>
        </div>
        <img
          src={wave}
          alt=""
          className="z-10 absolute top-0 right-0 opacity-20 h-full"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
        <img
          src={dividerInverted}
          className="absolute w-full h-12 md:h-16 lg:h-20 bottom-0 z-20"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>

      <div className="bg-white mb-6 relative pt-10">
        <div className="max-w-screen-md text-center py-8 mx-auto">
          <h4 className="font-extrabold text-sm text-black mb-2">
            Nossa História
          </h4>
          <p className="text-calendar-text text-xs font-light">
            Clique nos anos para saber mais sobre nossa jornada até aqui!
          </p>
          <TimelineCarousel />
        </div>
      </div>

      <div className="bg-brand-dark relative flex justify-center">
        <div className="bg-lightGray rounded-full py-2 px-6 font-extrabold text-sm text-white absolute shadow-md -top-[22.5px]">
          Equipe
        </div>
        <div className="max-w-screen-md">
          <div className="pt-10 px-4 text-center flex flex-col items-center">
            <img src={dialog} alt="balão de texto" width={35} />
            <p className="font-light text-white text-sm">
              <span className="font-bold">Participantes</span> com este{" "}
              <span className="font-bold">ícone</span> querem
              <span className="font-bold"> compartilhar suas histórias!</span>
            </p>
          </div>
          <TeamSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
