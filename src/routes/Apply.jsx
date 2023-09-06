import PageContainer from "../components/PageContainer";
import SectionContainer from "../components/SectionContainer";
import { Title, Subtitle, Paragraph } from "../components/Formatting";
import ApplyTabs from "../components/ApplyTabs";

import anniversaryLogo from "../assets/20-anos-green.svg";
import earth from "../assets/about/earth.svg";
import notice from "../assets/apply/notice.svg";
import form from "../assets/apply/form.svg";

export default function Apply() {
  return (
    <PageContainer>
      <div className="relative text-darkTone">
        <SectionContainer>
          <div className="flex flex-col items-center mb-6">
            <img
              src={anniversaryLogo}
              alt="Logo de aniversários dos 20 anos de UFRGSMUN"
              className="w-7 z-20"
            />
            <Title className="text-title">Inscrições</Title>
          </div>
          <Subtitle className="mb-4">Visão Geral</Subtitle>
          <Paragraph>
            Inscrever-se no UFRGSMUN 2023 é bastante fácil! Aqui, você
            encontrará alguns passos para seguir, além da nossa matriz de
            países, dos formulários de inscrição e das Perguntas Frequentes.
            Atenção: as inscrições se encerram no dia 16 de setembro ou até
            acabarem as vagas!
          </Paragraph>
        </SectionContainer>
        <img
          src={earth}
          className="absolute z-10 right-0 top-0 w-52"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>

      <div className="bg-darkGreen text-almostWhite relative">
        <SectionContainer className="text-right mx-auto">
          <Subtitle className="text-center">Como se inscrever?</Subtitle>
          <div className="flex justify-center w-full">
            <ApplyTabs />
          </div>
        </SectionContainer>
      </div>

      <div className="text-darkTone">
        <SectionContainer>
          <div className="flex flex-col items-center">
            <div className="py-2 px-10 bg-darkGreen text-almostWhite font-black rounded-full">
              Matriz de países
            </div>
            <div className="flex justify-center gap-4 mt-4 text-sm md:flex-row flex-col w-full">
              <button className="rounded-full border-2 border-darkGreen bg-almostWhite text-darkGreen py-2 px-6 inline whitespace-nowrap">
                Countries
              </button>
              <button className="rounded-full border-2 border-darkGreen bg-almostWhite text-darkGreen py-2 px-6 inline whitespace-nowrap">
                Matriz de Países
              </button>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-center items-center gap-2">
              <img src={form} alt="" className="w-5" />
              <h3 className="font-black text-2xl">Formulários</h3>
              <div className="h-[1.5px] bg-darkGreen w-full" />
            </div>
            <div className="mt-4">
              <div className="font-light">
                <p>As inscrições estarão abertas</p>
                <p>até o dia 16 de setembro ou até acabarem as vagas.</p>
              </div>
              <div className="flex gap-4 mt-4 font-normal text-sm flex-col md:flex-row">
                <button className="rounded-full border-2 border-darkGreen bg-almostWhite text-darkGreen py-2 px-6 inline whitespace-nowrap">
                  Formulário A
                </button>
                <button className="rounded-full border-2 border-darkGreen bg-almostWhite text-darkGreen py-2 px-6 inline whitespace-nowrap">
                  Press
                </button>
                <button className="rounded-full border-2 border-darkGreen bg-almostWhite text-darkGreen py-2 px-6 inline whitespace-nowrap">
                  CSI-OH
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 text-right">
            <div className="flex justify-center items-center gap-2">
              <div className="h-[1.5px] bg-darkGreen w-full" />
              <h3 className="font-black text-2xl text-darkTone z-20 inline whitespace-nowrap">
                Edital de Benefícios
              </h3>
              <img src={notice} alt="" className="w-5" />
            </div>
            <p className="font-light my-4">
              Reconhecendo a limitação imposta pelos custos relacionados à
              participação de Modelos das Nações Unidas e seguindo com o
              objetivo de democratizar cada vez mais estes espaços, o UFRGSMUN
              lança mais uma edição do Edital de Benefícios. Serão concedidas 10
              vagas isentas de inscrição para aquelas/es que preencherem os
              requisitos do edital, além de um desconto no Pacote de Eventos
              Sociais e preferência na Hospedagem Solidária oferecida pela
              equipe do projeto.Interessadas/os devem enviar a documentação para
              ufrgsmun@gmail.com até o dia 02/09.
            </p>
            <button className="rounded-full border-2 border-darkGreen bg-almostWhite text-darkGreen py-2 px-6">
              Edital
            </button>
          </div>
        </SectionContainer>
      </div>

      <div className="bg-darkGreen text-almostWhite relative">
        <SectionContainer className="text-center">
          <Title>FAQ</Title>
          <Paragraph className="my-4">
            Quer tirar dúvidas rápidas sobre o UFRGSMUN? Confira aqui tudo o que
            você precisa saber para participar da edição desse ano!
          </Paragraph>
          <button className="py-2 px-10 bg-almostWhite text-darkGreen rounded-full">
            FAQ
          </button>
        </SectionContainer>
      </div>
    </PageContainer>
  );
}
