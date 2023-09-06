import PageContainer from "../components/PageContainer";
import SectionContainer from "../components/SectionContainer";
import { Title, Subtitle, Paragraph } from "../components/Formatting";

import earth from "../assets/committees/earth.svg";
import anniversaryLogo from "../assets/20-anos-white.svg";

function Prepare() {
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
            <Title>Preparação</Title>
          </div>
          <Subtitle>Preparação</Subtitle>
          <Paragraph className="mb-4">
            Prepare para o UFRGSMUN desse ano
          </Paragraph>
          <div className="flex justify-center gap-4 text-sm md:flex-row flex-col w-full mb-4">
            <button className="rounded-full border-2 border-almostWhite bg-transparent text-almostWhite py-2 px-6 inline whitespace-nowrap">
              Guia de estudos
            </button>
            <button className="rounded-full border-2 border-almostWhite bg-transparent text-almostWhite py-2 px-6 inline whitespace-nowrap">
              Guia de regras
            </button>
            <button className="rounded-full border-2 border-almostWhite bg-transparent text-almostWhite py-2 px-6 inline whitespace-nowrap">
              Relatório do país
            </button>
          </div>
          <Subtitle>Política de prêmios</Subtitle>
          <Paragraph className="mb-4">
            Visando estimular e valorizar o trabalho em grupo e a cooperação, a
            XVI edição do UFRGSMUN não concederá prêmios.
          </Paragraph>
        </SectionContainer>
      </div>

      <div className="text-almostWhite">
        <SectionContainer>
          <div className="py-2 px-10 bg-darkGreen font-black rounded-full text-center">
            Guia de estudos dos comitês
          </div>
          <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 mx-auto mt-10">
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <a
                  key={index}
                  href="https://www.google.com"
                  target="_blank"
                  className="hover:opacity-75"
                >
                  <div className="h-[30vw] md:h-48 w-full bg-darkGray rounded-lg"></div>
                </a>
              ))}
          </div>
        </SectionContainer>
      </div>
    </PageContainer>
  );
}

export default Prepare;
