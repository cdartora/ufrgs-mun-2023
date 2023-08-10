import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ApplyTabs from "../components/ApplyTabs";

import anniversaryLogo from "../assets/apply/20-anos.svg";
import divider from "../assets/about/divider.svg";
import dividerInverted from "../assets/about/divider-inverted.svg";
import earth from "../assets/about/earth.svg";
import wave from "../assets/apply/wave.svg";

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
              <h3 className="font-black text-2xl text-darkTone z-20">
                Inscrições
              </h3>
            </div>
            <h4 className="font-black text-lg mb-4 relative z-20 text-darkTone">
              Visão Geral
            </h4>
            <p className="text-darkTone font-light relative z-20">
              Inscrever-se no UFRGSMUN 2023 é bastante fácil! Aqui, você
              encontrará alguns passos para seguir, além da nossa matriz de
              países, dos formulários de inscrição e das Perguntas Frequentes.
              Atenção: as inscrições se encerram no dia 16 de setembro ou até
              acabarem as vagas!
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
        {/* <img
          src={wave}
          className="absolute right-0 bottom-0 h-full opacity-20 z-10"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        /> */}

        <div className="max-w-screen-md p-4 md:p-8 text-right text-lightTone mx-auto z-20">
          <h4 className="font-black text-lg mb-4">Como se inscrever?</h4>
          <div className="flex justify-center w-full">
            <ApplyTabs />
          </div>
        </div>
        <img
          src={dividerInverted}
          className="absolute w-full h-12 md:h-16 lg:h-20 bottom-0 z-20"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>

      <div className="max-w-screen-md p-4 md:p-8 text-right text-lightTone mx-auto z-20"></div>
      <div>
        <div>Matriz de países</div>
        <button>Countris</button>
        <button>Matriz de Países</button>
      </div>
      <div>
        <div>Formulários</div>
        <p>As inscrições estarão abertas</p>
        <p>até o dia 16 de setembro ou até acabarem as vagas.</p>
        <div>
          <button>Formulário A</button>
          <button>Press</button>
          <button>CSI-OH</button>
        </div>
      </div>
      <div>
        <div>Edital de benefícios</div>
        <p>
          Reconhecendo a limitação imposta pelos custos relacionados à
          participação de Modelos das Nações Unidas e seguindo com o objetivo de
          democratizar cada vez mais estes espaços, o UFRGSMUN lança mais uma
          edição do Edital de Benefícios. Serão concedidas 10 vagas isentas de
          inscrição para aquelas/es que preencherem os requisitos do edital,
          além de um desconto no Pacote de Eventos Sociais e preferência na
          Hospedagem Solidária oferecida pela equipe do projeto.Interessadas/os
          devem enviar a documentação para ufrgsmun@gmail.com até o dia 02/09.
        </p>
        <button>Edital</button>
      </div>
      <div />

      <div className="bg-brand-dark relative py-20 flex flex-col justify-center items-center">
        <img
          src={divider}
          className="absolute w-full h-12 md:h-16 lg:h-20 top-0 z-30"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />

        <h3 className="font-black text-2xl text-almostWhite z-20">FAQ</h3>
        <p>
          Quer tirar dúvidas rápidas sobre o UFRGSMUN? Confira aqui tudo o que
          você precisa saber para participar da edição desse ano!
        </p>
        <button>FAQ</button>
      </div>

      <Footer />
    </main>
  );
}
