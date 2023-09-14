import SocialEventsTabs from "../components/conference/SocialEventsTabs";
import PageContainer from "../components/PageContainer";
import SectionContainer from "../components/SectionContainer";
import { Title, Subtitle, Paragraph } from "../components/Formatting";

import anniversaryLogo from "../assets/20-anos-white.svg";
import earth from "../assets/green-earth.svg";
import dividerWhite from "../assets/divider-white-inverted.svg";
import dividerGreen from "../assets/divider-green-inverted.svg";

function Conference() {
  return (
    <PageContainer>
      <div className="bg-darkGreen text-almostWhite relative">
        <SectionContainer className="pb-36">
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
        <img
          src={dividerWhite}
          className="absolute w-full h-auto bottom-0 "
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>

      <div className="relative text-darkTone">
        <SectionContainer className="text-right lg:pt-0 lg:pb-36">
          <Subtitle className="mb-4">Acomodação</Subtitle>
          <Paragraph>
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
          </Paragraph>
        </SectionContainer>
        <img
          src={dividerGreen}
          className="absolute w-full h-auto bottom-0 "
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>

      <div className="bg-darkGreen text-almostWhite relative">
        <SectionContainer className="flex flex-col items-center">
          <Subtitle className="text-center mb-2">Eventos Sociais</Subtitle>
          <Paragraph className="mb-2">
            Debater e simular o dia todo pode ser desgastante, sabemos disso.
            Que melhor maneira de recarregar suas energias do que curtir uma
            noite ao lado de amigos depois de um dia de trabalho duro?
          </Paragraph>
          <Paragraph>
            Nossos eventos sociais proporcionam a você a chance de relaxar,
            fugir do comum, se divertir e aproveitar ao máximo a sua experiência
            no UFRGSMUN. O nosso pacote social, o qual inclui a Festa Open Bar à
            Fantasia e a Copa do Mundo/Churrasco, custa R$70 para os
            participantes que comprarem antecipadamente e R$80 durante os dias
            do evento na Help Desk.
          </Paragraph>
          <SocialEventsTabs />
        </SectionContainer>
      </div>
    </PageContainer>
  );
}

export default Conference;
