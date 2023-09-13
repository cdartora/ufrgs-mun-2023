import PageContainer from "../components/PageContainer";
import SectionContainer from "../components/SectionContainer";
import { Title, Subtitle, Paragraph } from "../components/Formatting";

import earth from "../assets/right-green-earth.svg";
import anniversaryLogo from "../assets/20-anos-white.svg";

function Committee() {
  return (
    <PageContainer>
      <div className="bg-darkGreen text-almostWhite">
        <SectionContainer>
          <div className="flex flex-col items-center mb-6">
            <img
              src={anniversaryLogo}
              alt="Logo de aniversários dos 20 anos de UFRGSMUN"
              className="w-7 z-20"
            />
            <Title>Comitês</Title>
          </div>
          <Subtitle>Visão Geral</Subtitle>
          <Paragraph>
            Em 2023, nossos comitês e tópicos abarcarão órgãos oficiais das
            Nações Unidas e cúpulas de organizações internacionais, além dos
            nossos tradicionais Comitê de Imprensa e o Gabinete de Crises.
            Quatro deles serão em português (CDHNU, CMDA, CSI-ORH e Imprensa) e
            cinco deles serão em inglês (CICA-Summit, DISEC, IsDB, Legal e
            UNSC). Enquanto que CMDA, IsDB e UNSC serão realizados em dupla, os
            outros serão individuais.
          </Paragraph>
        </SectionContainer>
        <img
          src={earth}
          className="absolute z-10 right-0 top-0 w-52 opacity-10"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>
    </PageContainer>
  );
}

export default Committee;
