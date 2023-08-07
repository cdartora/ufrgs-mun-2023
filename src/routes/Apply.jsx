import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import anniversaryLogo from "../assets/apply/20-anos.svg";
import divider from "../assets/about/divider.svg"
import earth from "../assets/about/earth.svg";

export default function Apply() {
  return (
    <main className="App">
      <header>
        <NavBar />
        <div>
          <div className="max-w-screen-md p-8 mx-auto mb-10">
            <div className="flex flex-col items-center mb-6">
              <img
                src={anniversaryLogo}
                alt="Logo de aniversários dos 20 anos de UFRGSMUN"
                className="w-7 z-20"
              />
              <h3 className="font-black text-2xl text-darkTone z-20">Inscrições</h3>
            </div>
            <h4 className="font-black text-lg mb-4 relative z-20 text-darkTone">
              Visão Geral
            </h4>
            <p className="text-darkTone font-light relative z-20">
             Inscrever-se no UFRGSMUN 2023 é bastante fácil! Aqui, você encontrará alguns passos para seguir, além da nossa matriz de países, dos formulários de inscrição e das Perguntas Frequentes. Atenção: as inscrições se encerram no dia 16 de setembro ou até acabarem as vagas! 
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
        <div className="max-w-screen-md p-8 text-right text-lightTone mx-auto">
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
      </div>

      <Footer />
    </main>
  );
}