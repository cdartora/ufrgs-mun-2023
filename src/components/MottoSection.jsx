import EarthDetail from "../assets/mundo.svg";
import CelebrationIcon from "../assets/CelebrationIcon.svg";

export default function MottoSection() {
  return (
    <section className="flex flex-col bg-lightTone p-6 relative">
      {/* Details */}
      <div className="w-[80%] border-solid border-darkBorders border-t-[1px] absolute right-0" />
      <img src={CelebrationIcon} className="z-1 absolute w-8 left-4 top-3" />
      <img src={EarthDetail} className="z-1 absolute bottom-0 left-0 w-64" />

      {/* Main Container */}
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start mx-auto md:px-8 content mt-10 overflow-x-auto">
        {/* Motto */}
        <div className="text-left md:w-1/2 flex flex-col items-center justify-center mb-4 md:mb-0 h-full md:px-5">
          <div className="w-full font-bold text-2xl text-darkGray mb-4 flex justify-center barlow">
            2023 Motto
          </div>
          <div className="text-darkText text-base tracking-wide font-normal raleway">
            Em 2023, o UFRGSMUN pretende extrapolar as barreiras do superficial,
            do dado, do trivial, procurando ir além de meras soluções
            paliativas, com a consciência de que respostas eficazes são apenas
            alcançadas quando buscadas em profundidade - profundidade de debate,
            de diálogo, de conhecimento e de senso crítico. No cenário
            internacional, ao mesmo tempo que mudanças são constantes, há
            impasses de longa data que parecem irresolúveis. Na décima sexta
            edição do UFRGSMUN, buscaremos revelar novas alternativas a tais
            desafios, atravessando superfícies e obstáculos, alcançando
            respostas até então inexploradas. Atualmente, instituições nacionais
            e internacionais estão ameaçadas. Como estudantes, cidadãs(os) e
            futuras(os) líderes, temos o dever de encontrar e divulgar essas
            "respostas desconhecidas", a fim de que inverdades e retóricas rasas
            possam ser sobrepassadas por argumentos sólidos e construtivos.
          </div>
        </div>

        {/* Videos */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center h-full mb-5 px-4">
          <div className="w-full font-bold text-2xl text-darkGray mb-5 md:mb-10 flex justify-center barlow">
            Vídeos
          </div>
          <div className="outline-1 outline-darkBorders outline-offset-[10px] outline mb-10 md:mb-12 relative">
            <div className="absolute bg-lightTone font-bold text-darkBorders text-md right-2 px-3 -top-6">
              Teaser
            </div>
            <iframe
              class="youtube"
              src="https://www.youtube-nocookie.com/embed/JwkBcE0qRdM?rel=0&amp;controls=0&amp;showinfo=0"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen=""
            ></iframe>
          </div>
          <div className="outline-1 outline-darkBorders outline-offset-[10px] outline relative">
            <div className="absolute bg-lightTone font-bold text-darkBorders text-md right-2 px-3 -top-6">
              Comitês
            </div>
            <iframe
              class="youtube"
              src="https://www.youtube-nocookie.com/embed/JwkBcE0qRdM?rel=0&amp;controls=0&amp;showinfo=0"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
