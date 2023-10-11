import PageContainer from "../components/PageContainer";
import SectionContainer from "../components/SectionContainer";
import { Title, Subtitle, Paragraph } from "../components/Formatting";

import anniversaryLogo from "../assets/20-anos-white.svg";
import divider from "../assets/divider-white-inverted.svg";
import earth from "../assets/right-green-earth.svg";

import CDHNU from "/committees/CDHNU.webp";
import CELAC from "/committees/CELAC.webp";
import CIJ from "/committees/CIJ.webp";
import DPSUA from "/committees/DPS-UA.webp";
import CESLA from "/committees/CES-LA.webp";
import PRESS from "/committees/PRESS.webp";
import UNSC from "/committees/UNSC.webp";
import SPECPOL from "/committees/SPECPOL.webp";

const studyBooks = [
  {
    name: "Conselho de Direitos Humanos das Nações Unidas",
    img: CDHNU,
    url: "",
  },
  {
    name: "Comunidade de Estados Latino-Americanos e Caribenhos",
    img: CELAC,
    url: "",
  },
  {
    name: "Corte Internacional",
    img: CIJ,
    url: "",
  },
  {
    name: "Defesa, Proteção e Segurança da União Africana",
    img: DPSUA,
    url: "",
  },
  {
    name: "Conselho Econômico e Social",
    img: CESLA,
    url: "",
  },
  {
    name: "Imprensa Internacional",
    img: PRESS,
    url: "",
  },
  {
    name: "The Special Political and Decolonization Committee",
    img: SPECPOL,
    url: "",
  },
  {
    name: "The United Nations Security Council",
    img: UNSC,
    url: "",
  },
];

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
          src={divider}
          className="absolute w-full h-auto bottom-0 "
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
        <img
          src={earth}
          className="absolute z-10 right-0 top-0 w-52 opacity-10"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>

      <div className="text-almostWhite">
        <SectionContainer className="lg:pt-0">
          <div className="py-2 px-10 bg-darkGreen font-black rounded-full text-center">
            Guia de estudos dos comitês
          </div>
          <div className="text-darkTone scroll-smooth pb-5 px-10 mt-4 flex w-full gap-10 snap-x overflow-x-auto ">
            {studyBooks.map(({ name, img, url }) => (
              <a
                target="_blank"
                href={url}
                className="min-w-[200px] mt-4 text-lg font-bold hover:underline underline-offset-2"
              >
                <img
                  src={img}
                  className="h-48 w-48 snap-center rounded-xl shadow-lg shadow-black/10"
                />
                <a>{name}</a>
              </a>
            ))}
          </div>
        </SectionContainer>
      </div>
    </PageContainer>
  );
}

export default Prepare;
