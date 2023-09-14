import PageContainer from "../components/PageContainer";
import SectionContainer from "../components/SectionContainer";
import { Title, Subtitle, Paragraph } from "../components/Formatting";

import earth from "../assets/right-green-earth.svg";
import anniversaryLogo from "../assets/20-anos-white.svg";
import CDHNU from "../assets/committees/CDHNU.png";

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

      <div className="relative text-darkTone">
        <SectionContainer>
          <div className="pb-20">
            <div className={"flex items-end justify-start w-full"}>
              <div className="flex flex-col text-xl lg:text-3xl text-darkBorders lg:pb-14 pb-5">
                <span className="font-extrabold">
                  Conselho de Direitos Humanos
                </span>
                <span className="font-light">das Nações Unidas</span>
              </div>
              <img
                src={CDHNU}
                className="w-72"
                draggable="false"
                style={{ userSelect: "none" }}
                onMouseDown={() => false}
              />
            </div>
            <div>
              <Paragraph className="text-darkTone text-justify">
                Fundado no dia 15 de março de 2006 pela resolução 60/251 da
                Assembléia Geral das Nações Unidas, o Conselho de Direitos
                Humanos das Nações Unidas (CDHNU) foi criado para suceder a
                extinta Comissão das Nações Unidas para os Direitos Humanos
                (CNUDH). Além das responsabilidades herdadas do antigo CNUDH,
                novos órgãos foram criados no âmbito e sob a responsabilidade do
                CDHNU, são os casos do Mecanismo de Revisão Periódica Universal
                e do Programa de Reclamações . Em 2011, o Comitê passou por um
                reexame de suas atividades, como previsto na resolução que
                fundou o Comitê. Contando com 47 membros, com mandato de 3 anos
                e eleitos em Assembléia Geral via votação secreta, o CDHNU pode
                contar ainda com a participação de Estados observadores,
                Organizações Internacionais, organizações não-governamentais e
                instituições internacionais de direitos humanos. Os membros do
                comitê não podem ser reeleitos após dois mandatos consecutivos.
                Tendo como objetivo garantir a proteção universal dos direitos
                humanos, o CDHNU atua ainda como fórum para discussões e
                respostas acerca dos desafios atuais que os direitos humanos
                enfrentam nos Estados-membros das Nações Unidas. Neste comitê,
                as discussões se darão em Língua Portuguesa e os participantes
                atuarão como delegados. A mediação será feita pelo Bureau. Ao
                final de cada tópico, os delegados deverão elaborar e aprovar,
                por maioria simples, uma Resolução de caráter recomendatório que
                expresse as conclusões dos debates ocorridos entre os Estados
                participantes. Como dito anteriormente, a Resolução possui
                caráter recomendatório, no entanto, possui extrema relevância
                para a elaboração de políticas e ações nacionais e
                internacionais que objetivem a garantia e preservação dos
                direitos humanos.
              </Paragraph>
              <Paragraph className="mt-2">
                <strong>TÓPICO A:</strong> Centros de Detenção Arbitrária em
                Massa: violações de Direitos Humanos e efeitos na comunidade
                internacional
                <br />
                <strong>TÓPICO B:</strong> O Aumento da Insegurança Alimentar no
                Terceiro Mundo
              </Paragraph>
            </div>
          </div>

          {/* <div className="pb-20">
            <div
              className={
                "flex items-end justify-start w-full flex-row-reverse text-right"
              }
            >
              <div className="flex flex-col text-xl lg:text-3xl text-darkBorders lg:pb-14 pb-5">
                <span className="font-extrabold">{title[0]}</span>
                <span className="font-light">{title[1]}</span>
              </div>
              <img
                src={imgUrl}
                className="w-72"
                draggable="false"
                style={{ userSelect: "none" }}
                onMouseDown={() => false}
              />
            </div>
            <div>
              <pre className="font-light  text-darkTone text-justify">
                {summary}
              </pre>
            </div>
          </div> */}
        </SectionContainer>
      </div>
    </PageContainer>
  );
}

export default Committee;
