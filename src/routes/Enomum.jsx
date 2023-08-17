import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import anniversaryLogo from "../assets/apply/20-anos.svg";
import divider from "../assets/about/divider.svg";
import dividerInverted from "../assets/about/divider-inverted.svg";
import earth from "../assets/about/earth.svg";

function Enomum() {
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
              <h3 className="font-black text-2xl text-darkTone z-20">ENOMUM</h3>
            </div>
            <h4 className="font-black text-lg mb-4 relative z-20 text-darkTone">
              ENOMUM
            </h4>
            <p className="text-darkTone font-light relative z-20">
              O Encontro Nacional de Organizadores de Modelos das Nações Unidas
              (ENOMUN) é um evento anual que, ao reunir organizadores de modelos
              de todas as regiões do Brasil, tem como objetivo promover a
              integração e o engajamento entre MUNs, buscando, assim,
              continuamente fortalecer a Modelândia brasileira. Através da
              composição de mesas de discussão, o ENOMUN tornou-se um importante
              espaço ao permitir e incentivar a ocorrência debates sobre temas
              relevantes como, por exemplo, a uniformização e reformulação de
              regras de procedimento, a democratização dos eventos e a sua
              qualidade acadêmica.
            </p>
            <p className="text-darkTone font-light relative z-20 my-2">
              Em 2018, a quinta edição do ENOMUN ocorrerá em Porto Alegre e será
              sediada pelo Universidade Federal do Rio Grande do Sul Model
              United Nations (UFRGSMUN). Na edição de 2018, o evento continuará
              adotando como objetivo a constante união e cooperação entre os
              modelos de simulação de todo o Brasil, dando continuidade aos
              importantes avanços que foram alicerçados em edições passadas. É
              nesse sentido que a quinta edição do Encontro também realizará a
              primeira eleição para a presidência da Federação Brasileira de
              Modelos das Nações Unidas, formalmente instituída em 2018, na
              edição extraordinária do ENOMUN, ocorrida na cidade de Uberlândia.
            </p>
            <p className="text-darkTone font-light relative z-20">
              O encontro será realizado nos dias 5 e 6 de novembro e contará com
              5 Mesas de Discussões. Em breve maiores informações e detalhes
              sobre o evento serão disponibilizados.
            </p>
            <div className="flex justify-center w-full mt-4">
              <button className="rounded-full border-2 border-darkGreen bg-almostWhite text-darkGreen py-2 px-6 inline whitespace-nowrap">
                Conheça o Estatuto
              </button>
            </div>
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
      </div>

      <Footer />
    </main>
  );
}

export default Enomum;
