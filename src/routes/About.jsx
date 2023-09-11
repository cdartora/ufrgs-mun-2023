import TeamSection from "../components/TeamSection";
import PageContainer from "../components/PageContainer";
import TimelineCarousel from "../components/TimelineCarousel";
import SectionContainer from "../components/SectionContainer";
import { Title, Subtitle, Paragraph } from "../components/Formatting";

import anniversaryLogo from "../assets/20-anos-white.svg";
import dialog from "../assets/about/dialog.svg";
import divider from "../assets/divider-white-inverted.png";

export default function About() {
  return (
    <PageContainer>
      <div className="relative bg-darkGreen text-almostWhite">
        <SectionContainer className="pb-40">
          <div className="flex flex-col items-center mb-6">
            <img
              src={anniversaryLogo}
              alt="Logo de aniversários dos 20 anos de UFRGSMUN"
              className="w-7 z-20"
            />
            <Title>Sobre</Title>
          </div>
          <Subtitle className="mb-4">O que é um modelo da ONU?</Subtitle>
          <Paragraph>
            Um “Modelo das Nações Unidas” é uma conferência que proporciona aos
            seus participantes uma simulação sobre temas importantes da agenda
            internacional, de acordo com as regras de procedimento das próprias
            reuniões das Nações Unidas. Durante a simulação, os participantes
            atuarão como delegados de diversos países, com a responsabilidade de
            sustentar suas posições ao longo das discussões e defender seus
            interesses de acordo com suas respectivas políticas externas. Além
            disso, os MUNs oferecem a oportunidade de atuar, além de
            representantes diplomáticos, como Chefes de Estado, Ministros,
            juízes ou mesmo como jornalistas no comitê de imprensa
            internacional, cobrindo as discussões que ocorrem nos comitês dos
            órgãos da ONU.
          </Paragraph>
        </SectionContainer>
        <img
          src={divider}
          className="absolute w-full h-auto bottom-0 "
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>

      <div className="relative text-darkTone">
        <SectionContainer className="text-right">
          <Subtitle className="mb-4">E o UFRGSMUN?</Subtitle>
          <Paragraph>
            Um “Modelo das Nações Unidas” é uma conferência que proporciona aos
            seus participantes uma simulação sobre temas importantes da agenda
            internacional, de acordo com as regras de procedimento das próprias
            reuniões das Nações Unidas. Durante a simulação, os participantes
            atuarão como delegados de diversos países, com a responsabilidade de
            sustentar suas posições ao longo das discussões e defender seus
            interesses de acordo com suas respectivas políticas externas. Além
            disso, os MUNs oferecem a oportunidade de atuar, além de
            representantes diplomáticos, como Chefes de Estado, Ministros,
            juízes ou mesmo como jornalistas no comitê de imprensa
            internacional, cobrindo as discussões que ocorrem nos comitês dos
            órgãos da ONU.
          </Paragraph>

          <div className="text-center mt-16">
            <Subtitle className="mb-2">Nossa História</Subtitle>
            <Paragraph>
              Clique nos anos para saber mais sobre nossa jornada até aqui!
            </Paragraph>
            <TimelineCarousel />
          </div>
        </SectionContainer>
      </div>

      <div className="bg-darkGreen relative flex justify-center">
        <div className="bg-lightGray rounded-full py-2 px-6 font-black text-lg text-almostWhite absolute shadow-md -top-[27.5px]">
          Equipe
        </div>
        <SectionContainer className="flex flex-col items-center">
          <div className="mt-4 pt-10 px-4 text-center flex flex-col items-center">
            <img src={dialog} alt="balão de texto" width={35} />
            <p className="font-light text-almostWhite">
              <span className="font-bold">Participantes</span> com este{" "}
              <span className="font-bold">ícone</span> querem
              <span className="font-bold"> compartilhar suas histórias!</span>
            </p>
          </div>
          <TeamSection />
        </SectionContainer>
      </div>
    </PageContainer>
  );
}
