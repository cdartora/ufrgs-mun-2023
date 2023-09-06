import SocialEventsTabs from "../components/SocialEventsTabs";
import PageContainer from "../components/PageContainer";
import SectionContainer from "../components/SectionContainer";
import { Title, Subtitle, Paragraph } from "../components/Formatting";

import anniversaryLogo from "../assets/20-anos-white.svg";
import earth from "../assets/conference/earth.svg";
import divider from "../assets/conference/divider.svg";
import dividerInverted from "../assets/conference/divider-inverted.svg";
import wave from "../assets/about/wave.svg";

function Conference() {
  return (
    <PageContainer>
      <div className="bg-darkGreen text-almostWhite relative">
        <SectionContainer>
          <div className="flex flex-col items-center mb-6">
            <img
              src={anniversaryLogo}
              alt="Logo de aniversários dos 20 anos de UFRGSMUN"
              className="w-7 z-20"
            />
            <Title>Conferência</Title>
          </div>
          <Subtitle className="font-black text-lg relative z-20">
            Local
          </Subtitle>
          <Paragraph className="italic mb-4">
            Hotel Plaza São Rafael - Av. Alberto Bins, 514
          </Paragraph>
          <Paragraph>
            O UFRGSMUN acontecerá mais uma vez no Plaza São Rafael Hotel. É um
            dos hotéis mais conceituados de Porto Alegre, devido aos seus
            serviços de alta qualidade e diversidade de quartos para eventos,
            como exposições, congressos e casamentos. Por isso oferece um
            ambiente adequado para hospedar o UFRGSMUN. O Plaza São Rafael está
            bem localizado no centro de Porto Alegre, estando a 20 minutos do
            Aeroporto Internacional Salgado Filho e a 5 minutos da rodoviária.
            Está próximo a áreas comerciais, shopping centers e restaurantes, a
            uma curta distância dos centros financeiro e administrativo da
            cidade e do Estado, da Universidade Federal do Rio Grande do Sul
            (UFRGS) e de muitos dos mais famosos pontos turísticos da cidade. A
            localização do hotel permitirá que os participantes explorem Porto
            Alegre e descubram o que ela tem de melhor. Além disso, por estar no
            coração do centro da cidade, o Plaza São Rafael também é conveniente
            para os delegados que residem em Porto Alegre.
          </Paragraph>
        </SectionContainer>
        <img
          src={earth}
          className="absolute z-10 left-0 top-0 w-52 opacity-10"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>

      <div className="bg-white relative py-20">
        <img
          src={divider}
          className="absolute w-full h-12 md:h-16 lg:h-20 top-0 z-30"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
        <div className="max-w-screen-md p-8 text-right text-darkTone mx-auto">
          <h4 className="font-black text-lg mb-4">Acomodação</h4>
          <p className="font-light">
            O UFRGS Model United Nations, projeto idealizado e criado por alunos
            da Universidade Federal do Rio Grande do Sul (UFRGS), foi a primeira
            conferência MUN a surgir no Sul do Brasil. Ao longo de seus vinte
            anos de história, o projeto cresceu, evoluiu e se firmou como um dos
            mais renomados e tradicionais MUNs do país - sendo reconhecido pela
            excelência de seu corpo docente e administrativo. A cada ano, a
            UFRGSMUN busca proporcionar a oportunidade de debater temas muitas
            vezes marginalizados pelos debates internacionais – abordando com
            ênfase especial os fóruns regionais e as questões locais. Além
            disso, como projeto de extensão da UFRGS, o UFRGSMUN pretende
            representar mais do que uma simulação da ONU: quer empoderar seus
            participantes, promover a igualdade entre eles e contribuir para sua
            formação pessoal e acadêmica. Em todas as suas edições, a UFRGSMUN
            espera possibilitar uma intensa troca de saberes, experiências e
            memórias aos que constroem e participam do evento.
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

      <div className="bg-darkGreen mb-6 relative">
        <div className="max-w-screen-md p-8 mx-auto flex flex-col items-center">
          <h4 className="font-black text-lg text-center text-lightTone mb-2">
            Eventos Sociais
          </h4>
          <p className="text-lightTone font-light mb-2">
            Debater e simular o dia todo pode ser desgastante, sabemos disso.
            Que melhor maneira de recarregar suas energias do que curtir uma
            noite ao lado de amigos depois de um dia de trabalho duro?
          </p>
          <p className="text-lightTone font-light">
            Nossos eventos sociais proporcionam a você a chance de relaxar,
            fugir do comum, se divertir e aproveitar ao máximo a sua experiência
            no UFRGSMUN. O nosso pacote social, o qual inclui a Festa Open Bar à
            Fantasia e a Copa do Mundo/Churrasco, custa R$70 para os
            participantes que comprarem antecipadamente e R$80 durante os dias
            do evento na Help Desk.
          </p>
          <SocialEventsTabs />
        </div>
      </div>
    </PageContainer>
  );
}

export default Conference;
