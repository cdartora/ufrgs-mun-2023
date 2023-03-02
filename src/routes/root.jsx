import UfrgsMunLogo from "../assets/logo.svg";
import HeroImage from "../assets/20-anos.svg";
import Detail from "../assets/ondulação.svg";

export default function Root() {
  return (
    <div className=" h-[120vh] bg-gradient-to-b from-darkGreen to-lightGreen">
      {/* Header and Navigation */}
      <header className="py-5 px-8 bg-transparent flex justify-around items-center z-2">
        <div className="z-2">
          <img src={UfrgsMunLogo} alt="UFRGS Mun logo" />
        </div>
        <nav className="z-2">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-lightTone hover:text-gray-300 transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lightTone hover:text-gray-300 transition-colors"
              >
                Parceiros
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lightTone hover:text-gray-300 transition-colors"
              >
                Conferência
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lightTone hover:text-gray-300 transition-colors"
              >
                Enomum
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lightTone hover:text-gray-300 transition-colors"
              >
                Comitês
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lightTone hover:text-gray-300 transition-colors"
              >
                Preparação
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lightTone hover:text-gray-300 transition-colors"
              >
                Inscrições
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-16 flex flex-col items-center text-center">
        <div className="w-full flex space-x-4 items-center justify-center gap-10 z-2">
          <div className="w-1/2 h-full flex">
            <div className="text-lightTone font-bold text-left ml-64 text-5xl flex flex-col gap-2">
              <span>ATRAVESSE A</span>
              <span>SUPERFÍCIE.</span>
              <span>ENCONTRE</span>
              <span>RESPOSTAS</span>
              <span>DESCONHECIDAS</span>
              <div className="flex flex-col font-normal text-right text-2xl">
                <span>break the surface.</span>
                <span>reach hidden answers</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2">
            <img
              src={HeroImage}
              className="h-4/5"
              alt="Comemoração de 20 anos da conferência UFRGS Mun"
            />
          </div>
        </div>
      </section>
      <div className="absolute top-0 left-0 w-full z-1">
        <img src={Detail} alt="" />
      </div>
    </div>
  );
}
