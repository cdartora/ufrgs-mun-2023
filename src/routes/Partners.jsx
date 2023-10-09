import PageContainer from "../components/PageContainer";
import SectionContainer from "../components/SectionContainer";
import { Title, Subtitle, Paragraph } from "../components/Formatting";
import PartnersCarousel from "../components/partners/PartnersCarousel";

import anniversaryLogo from "../assets/20-anos-white.svg";
import form from "../assets/form.svg";
import formWhite from "../assets/form-white.svg";
import earth from "../assets/green-earth.svg";
import dividerWhite from "../assets/divider-white-inverted.svg";
import dividerGreen from "../assets/divider-green-inverted.svg";

import ufrgsProext from "../assets/partners/ufrgs-proext.png";
import ufrgsFce from "../assets/partners/fce-ufrgs.png";
import ufrgsGrafica from "../assets/partners/ufrgs-grafica.png";
import ufrgsCeri from "../assets/partners/ceri-ufrgs.png";

import confucio from "../assets/partners/confucio.png";
import diplomatique from "../assets/partners/diplomatique.png";
import unicRio from "../assets/partners/unic-rio.png";
import copystar from "../assets/partners/copystar.png";
import rent from "../assets/partners/rent.png";
import pontoDosCafes from "../assets/partners/ponto-dos-cafes.png";
import redbull from "../assets/partners/redbull.png";
import konrad from "../assets/partners/konrad.png";
import uruguay from "../assets/partners/uruguay.png";

function Partners() {
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

      <div className="text-darkTone relative">
        <SectionContainer className="lg:pt-0 lg:pb-40">
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
                href="https://www.ufrgs.br/prorext/"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${ufrgsProext})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>
              <a
                href="https://www.ufrgs.br/fce/"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${ufrgsFce})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>
              <a
                href="https://www.ufrgs.br/grafica/"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${ufrgsGrafica})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>
              <a
                href="https://www.ufrgs.br/ceri/"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${ufrgsCeri})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>
            </div>
          </div>
        </SectionContainer>
        <img
          src={dividerGreen}
          className="absolute w-full h-auto bottom-0 "
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>

      <div className="bg-darkGreen text-almostWhite">
        <SectionContainer className="lg:pt-0">
          <div className="flex w-full justify-center items-center gap-2 mb-4">
            <img src={formWhite} alt="" className="w-5 text-almostWhite" />
            <Subtitle className="inline whitespace-nowrap">Apoio</Subtitle>
            <div className="h-[1.5px] bg-almostWhite w-full" />
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              <a
                href="https://www.ufrgs.br/confucio/"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${confucio})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>

              <a
                href="https://diplomatique.org.br/"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${diplomatique})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>

              <a
                href="https://unicrio.org.br/"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${unicRio})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>

              <a
                href="https://www.ufrgs.br/grafica/"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${ufrgsGrafica})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>

              <a
                href="https://graficacopystar.com.br/"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${copystar})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>
              <a
                href="https://rentcoliving.com.br/"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${rent})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>
              <a
                href="https://www.pontodoscafes.com.br/"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${pontoDosCafes})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>
              <a
                href="https://www.redbull.com/br-pt/"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${redbull})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>
              <a
                href="https://www.kas.de/pt/web/brasilien"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${konrad})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>
              <a
                href="https://cgsanpablo.com/pt/"
                target="_blank"
                className="hover:opacity-75"
              >
                <div
                  style={{
                    backgroundImage: `url(${uruguay})`,
                    backgroundSize: "cover",
                  }}
                  className="w-20 h-20 bg-darkGray rounded-lg shadow-lg"
                ></div>
              </a>
            </div>
          </div>
        </SectionContainer>
      </div>
    </PageContainer>
  );
}

export default Partners;
