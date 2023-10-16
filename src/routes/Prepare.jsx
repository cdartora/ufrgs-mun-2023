import PageContainer from "../components/PageContainer";
import SectionContainer from "../components/SectionContainer";
import { Title, Subtitle, Paragraph } from "../components/Formatting";

import anniversaryLogo from "../assets/20-anos-white.svg";
import earth from "../assets/right-green-earth.svg";

function Prepare() {
  return (
    <PageContainer>
      <div className="bg-darkGreen text-almostWhite relative">
        <SectionContainer className="lg:pb-40">
          <div className="flex flex-col items-center mb-6">
            <img
              src={anniversaryLogo}
              alt="Logo de aniversários dos 20 anos de UFRGSMUN"
              className="w-7 z-20"
            />
            <Title>Preparação</Title>
          </div>
          <Subtitle className="mb-4">Prepare-se para o UFRGSMUN</Subtitle>
          <div className="flex justify-center gap-4 text-sm md:flex-row flex-col w-full mb-10">
            <button className="rounded-full border-2 border-almostWhite bg-transparent text-almostWhite py-2 px-6 inline whitespace-nowrap">
              Guia de estudos
            </button>
            <a
              href="/documents/guia-de-regras.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center rounded-full border-2 border-almostWhite bg-transparent text-almostWhite py-2 px-6 inline whitespace-nowrap"
            >
              Guia de regras
            </a>
            <a
              href="/documents/country-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center rounded-full border-2 border-almostWhite bg-transparent text-almostWhite py-2 px-6 inline whitespace-nowrap"
            >
              Relatório do país
            </a>
          </div>
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

export default Prepare;
