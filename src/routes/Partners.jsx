import PageContainer from "../components/PageContainer";
import SectionContainer from "../components/SectionContainer";
import { Title, Subtitle, Paragraph } from "../components/Formatting";
import PartnersCarousel from "../components/partners/PartnersCarousel";

import anniversaryLogo from "../assets/20-anos-white.svg";
import form from "../assets/form.svg";
import formWhite from "../assets/form-white.svg";
import earth from "../assets/right-green-earth.svg"

function Partners() {
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
            <Title>Parceiros</Title>
          </div>
          <Subtitle className="mb-4">Patrocinadores</Subtitle>
          <Paragraph>
            UFRGSMUN não seria possível sem o apoio de instituições incríveis
            que acreditam na importância do evento, resultando nas ótimas
            parcerias que construímos este ano! Confira mais sobre elas!
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

      <div className="text-darkTone">
        <SectionContainer>
          <div className="py-2 px-10 bg-darkGreen text-almostWhite font-black rounded-full text-center">
            Patrocinadores
          </div>
          <PartnersCarousel />
          <div className="flex justify-center items-center gap-2 w-full mb-4 mt-10">
            <img src={form} alt="" className="w-5" />
            <Title>Realizadores</Title>
            <div className="h-[1.5px] bg-darkGreen w-full" />
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              <a
                href="https://www.google.com"
                target="_blank"
                className="hover:opacity-75"
              >
                <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                className="hover:opacity-75"
              >
                <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                className="hover:opacity-75"
              >
                <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                className="hover:opacity-75"
              >
                <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                className="hover:opacity-75"
              >
                <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
              </a>
            </div>
          </div>
        </SectionContainer>
      </div>

      <div className="bg-darkGreen text-almostWhite">
        <SectionContainer>
          <div className="flex w-full justify-center items-center gap-2 mb-4">
            <img src={formWhite} alt="" className="w-5 text-almostWhite" />
            <Subtitle className="inline whitespace-nowrap">Apoio</Subtitle>
            <div className="h-[1.5px] bg-almostWhite w-full" />
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {Array(15)
                .fill(null)
                .map((_, index) => (
                  <a
                    key={index}
                    href="https://www.google.com"
                    target="_blank"
                    className="hover:opacity-75"
                  >
                    <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
                  </a>
                ))}
            </div>
          </div>

          <div className="flex w-full justify-center items-center gap-2 mb-4 mt-10">
            <div className="h-[1.5px] bg-almostWhite w-full" />
            <Subtitle className="inline whitespace-nowrap">
              Muns parceiros
            </Subtitle>
            <img src={formWhite} alt="" className="w-5 text-almostWhite" />
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {Array(15)
                .fill(null)
                .map((_, index) => (
                  <a
                    key={index}
                    href="https://www.google.com"
                    target="_blank"
                    className="hover:opacity-75"
                  >
                    <div className="w-20 h-20 bg-darkGray rounded-lg"></div>
                  </a>
                ))}
            </div>
          </div>
        </SectionContainer>
      </div>
    </PageContainer>
  );
}

export default Partners;
