import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import anniversaryLogo from "../assets/20-anos-2.svg";
import TimelineCarousel from "../components/TimelineCarousel";

export default function About() {
  return (
    <main className="App">
      <header className="text-zinc-200">
        <NavBar />
        <div className="max-w-screen-md p-8">
          <div className="flex flex-col items-center mb-6">
            <img
              src={anniversaryLogo}
              alt="Logo de aniversários dos 20 anos de UFRGSMUN"
              className="w-7"
            />
            <h3 className="font-extrabold text-xl text-green-text">Sobre</h3>
          </div>
          <h4 className="font-extrabold text-sm text-black mb-4">
            O que é um modelo da ONU?
          </h4>
          <p className="text-calendar-text text-xs font-light">
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
      </header>
      <div className="max-w-screen-md p-8 bg-brand-dark text-right">
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
          representantes diplomáticos, como Chefes de Estado, Ministros, juízes
          ou mesmo como jornalistas no comitê de imprensa internacional,
          cobrindo as discussões que ocorrem nos comitês dos órgãos da ONU.
        </p>
      </div>
      <div className="max-w-screen-md text-center py-8">
        <h4 className="font-extrabold text-sm text-black mb-2">
          Nossa História
        </h4>
        <p className="text-calendar-text text-xs font-light">
          Clique nos anos para saber mais sobre nossa jornada até aqui!
        </p>
        <TimelineCarousel />
      </div>
      <div className="max-w-screen-md bg-brand-dark"></div>
      <Footer />
    </main>
  );
}
