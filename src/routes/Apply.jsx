import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import anniversaryLogo from "../assets/about/20-anos.svg";

export default function Apply() {
  return (
    <main className="App">
      <header>
        <NavBar />
        <div>
          <div className="max-w-screen-md p-8 mx-auto ">
            <div className="flex flex-col items-center mb-6">
              <img
                src={anniversaryLogo}
                alt="Logo de aniversários dos 20 anos de UFRGSMUN"
                className="w-7 z-20"
              />
              <h3 className="font-black text-2xl text-darkTone z-20">Sobre</h3>
            </div>
            <h4 className="font-black text-lg mb-4 relative z-20 text-darkTone">
              O que é um modelo da ONU?
            </h4>
            <p className="text-darkTone font-light relative z-20">
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
        </div>
      </header>
      <Footer />
    </main>
  );
}