import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
import TimelineCarousel from "../components/TimelineCarousel";

import anniversaryLogo from "../assets/20-anos-white.svg";
import divider from "../assets/divider-green.svg"
import dividerInverted from "../assets/divider-inverted-green.svg";
import dialog from "../assets/about/dialog.svg";

import earth from "../assets/about/earth.svg";

export default function About() {
  return (
    <main className="App">
      <header className="relative pb-10 bg-darkGreen text-almostWhite">
        <NavBar />
        <div>
          <div className="max-w-screen-md p-8 mx-auto ">
            <div className="flex flex-col items-center mb-6">
              <img
                src={anniversaryLogo}
                alt="Logo de aniversários dos 20 anos de UFRGSMUN"
                className="w-7 z-20"
              />
              <h3 className="font-black text-2xl z-20">Sobre</h3>
            </div>
            <h4 className="font-black text-lg mb-4 relative z-20">
              O que é um modelo da ONU?
            </h4>
            <p className="font-light relative z-20">
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
          {/* <img
            src={earth}
            className="absolute z-10 right-0 top-0 w-52"
            draggable="false"
            style={{ userSelect: "none" }}
            onMouseDown={() => false}
          /> */}
        </div>
      </header>

      <div className="relative py-20 text-darkTone">
        <div className="max-w-screen-md p-8 text-right mx-auto">
          <h4 className="font-black text-lg mb-4">E o UFRGSMUN?</h4>
          <p className="font-light">
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

        <div className="max-w-screen-md text-center py-8 mx-auto">
          <h4 className="font-extrabold text-lg mb-2">Nossa História</h4>
          <p className="font-light">
            Clique nos anos para saber mais sobre nossa jornada até aqui!
          </p>
          <TimelineCarousel />
        </div>

      </div>

      <div className="bg-brand-dark relative flex justify-center">
        <div className="bg-lightGray rounded-full py-2 px-6 font-black text-lg text-almostWhite absolute shadow-md -top-[22px]">
          Equipe
        </div>
        <div className="max-w-screen-md flex flex-col items-center">
          <div className="mt-4 pt-10 px-4 text-center flex flex-col items-center">
            <img src={dialog} alt="balão de texto" width={35} />
            <p className="font-light text-almostWhite">
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
