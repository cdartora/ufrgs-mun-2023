import PageContainer from "../components/PageContainer";
import SectionContainer from "../components/SectionContainer";
import { Title, Subtitle, Paragraph } from "../components/Formatting";

import earth from "../assets/right-green-earth.svg";
import anniversaryLogo from "../assets/20-anos-white.svg";
import divider from "../assets/divider-white-inverted.svg";
import CDHNU from "/committees/CDHNU.webp";
import CELAC from "/committees/CELAC.webp";
import CIJ from "/committees/CIJ.webp";
import DPSUA from "/committees/DPS-UA.webp";
import CESLA from "/committees/CES-LA.webp";
import PRESS from "/committees/PRESS.webp";
import UNSC from "/committees/UNSC.webp";
import SPECPOL from "/committees/SPECPOL.webp";

function Committee() {
  return (
    <PageContainer>
      <div className="relative bg-darkGreen text-almostWhite">
        <SectionContainer className="lg:pb-40">
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
          className="absolute z-10 right-0 top-0 w-44 opacity-10"
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
        <img
          src={divider}
          className="absolute w-full h-auto bottom-0 "
          draggable="false"
          style={{ userSelect: "none" }}
          onMouseDown={() => false}
        />
      </div>

      <div className="relative text-darkTone">
        <SectionContainer className="lg:pt-0">
          <div className="pb-20">
            <div className="flex justify-center w-full">
              <div className="flex flex-col justify-center text-xl lg:text-3xl text-darkBorders lg:pb-14 pb-5 text-right">
                <span className="font-extrabold">
                  Conselho
                  <br />
                  de Direitos
                  <br />
                  Humanos
                </span>
                <span className="font-light">
                  das Nações
                  <br />
                  Unidas
                </span>
              </div>
              <img
                src={CDHNU}
                className="w-44"
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

          <div className="pb-20">
            <div className="flex justify-center w-full flex-row-reverse text-right">
              <div className="flex flex-col justify-center text-xl lg:text-3xl text-darkBorders lg:pb-14 pb-5 text-left">
                <span className="font-extrabold">
                  Comunidade
                  <br />
                  de Estados
                </span>
                <span className="font-light">
                  Latino-Americanos
                  <br />e Caribenhos
                </span>
              </div>
              <img
                src={CELAC}
                className="w-44"
                draggable="false"
                style={{ userSelect: "none" }}
                onMouseDown={() => false}
              />
            </div>
            <div>
              <Paragraph className="text-darkTone text-justify">
                Criada em fevereiro de 2010, na Cúpula da Unidade da América
                Latina e do Caribe, a Comunidade de Estados Latino-Americanos e
                Caribenhos (CELAC) é um bloco regional intergovernamental
                composto por 33 países. A CELAC sucede o Grupo do Rio e a Cúpula
                da América Latina e do Caribe sobre Integração e Desenvolvimento
                (CALC). Foi justamente na I Cúpula de Países da América Latina e
                Caribe, sediada pelo Brasil em 2018, que foram reunidos
                representantes dos 33 países (incluindo o Brasil) que
                integrariam a CELAC, para discutir um projeto de integração
                regional. A CELAC atua em duas principais vertentes: a
                cooperação para o desenvolvimento e a concertação política. Na
                primeira, a CELAC atua por meio da promoção de reuniões
                ministeriais ou de alto nível sobre temas de interesse dos
                países da região, como educação, desenvolvimento social,
                cultura, transportes, infraestrutura e energia. Já a segunda
                encontra sua principal razão de ser em intervenções conjuntas no
                âmbito da Assembleia Geral das Nações Unidas e de suas
                Comissões, além de outros pronunciamentos sobre temas relevantes
                da agenda internacional e regional. A CELAC reitera sua
                importância ao facilitar o diálogo da América Latina com o resto
                do mundo, proporcionando à região coordenar posições com outros
                blocos regionais e países emergentes, como China, Índia, Rússia
                e União Europeia. Além disso, a CELAC trabalha para consolidar a
                identidade própria da região no Sistema Internacional. A CELAC
                pode atuar por diferentes frentes, como reuniões políticas,
                reuniões ministeriais especializadas ou grupos de trabalho
                setoriais. Uma dessas frentes é, justamente, o Conselho de
                Ministros das Relações Exteriores, a ser aqui trabalhado. Não
                foram encontradas informações acerca dos documentos produzidos
                por tal instância.
              </Paragraph>
              <Paragraph className="mt-2">
                <strong>TÓPICO A:</strong> Ameaças ao Estado Democrático de
                Direito na América Latina
                <br />
                <strong>TÓPICO B:</strong> Desafios à Transição Energética na
                América Latina
              </Paragraph>
            </div>
          </div>

          <div className="pb-20">
            <div className="flex justify-center w-full mx-auto">
              <div className="flex flex-col justify-center text-xl lg:text-3xl text-darkBorders lg:pb-14 pb-5 text-right">
                <span className="font-extrabold">
                  Corte
                  <br />
                  Internacional
                </span>
                <span className="font-light">de Justiça</span>
              </div>
              <img
                src={CIJ}
                className="w-44"
                draggable="false"
                style={{ userSelect: "none" }}
                onMouseDown={() => false}
              />
            </div>
            <div>
              <Paragraph className="text-darkTone text-justify">
                A Corte Internacional de Justiça (CIJ) é o principal órgão
                jurídico vinculado às Nações Unidas, localizada em Haia, Países
                Baixos. Sua missão é resolver conflitos entre Estados por meio
                da aplicação do direito internacional, bem como pelo seu próprio
                Estatuto. A CIJ tem jurisdição sobre as disputas submetidas a
                ela por Estados que aceitam sua jurisdição voluntariamente. Além
                disso, também pode ser solicitada a fornecer pareceres
                consultivos sobre questões de direito internacional a pedido de
                outros órgãos das Nações Unidas e de outros organismos
                internacionais ou nacionais. Portanto, a Corte pode tanto julgar
                casos quanto elaborar consultas jurídicas sobre problemas
                jurídicos pontuais. Nos casos julgados, o procedimento é o
                seguinte: (i) a fase escrita, na qual as partes apresentam suas
                razões; (ii) a fase oral, na qual são realizadas sessões
                públicas; e (iii) a deliberação da Corte, que consiste na
                sentença. O procedimento consultas jurídicas, por sua vez,
                ocorre dessa forma: (i) a fase escrita, com a apresentação das
                razões dos Estados participantes ou consultantes; (ii) a fase
                oral, com a realização de sessões públicas, nas quais os Estados
                são convidados; e (iii) a pronúncia do parecer consultivo. O
                comitê da UFRGSMUN poderá apresentar dois formatos ligeiramente
                distintos, de acordo com a escolha dos tópicos sugeridos e da
                natureza dos debates (casos ou opiniões consultivas).
                Geralmente, os casos são apreciados por um Colegiado de 15
                Magistrados, sujeito a alterações pelas particularidades do
                caso, e há também a representação dos Estados envolvidos na
                disputa. Para a dinâmica, as partes apresentam as suas razões e,
                após, os Magistrados procedem para os debates orais e proferem a
                sua sentença. Em uma opinião consultiva, por sua vez, são,
                normalmente, 5 Juízes que acedem a questão, e a representação
                das partes envolve o órgão ou Estado que submete a questão, bem
                como demais Estados interessados. Contudo, para fins de maior
                aproveitamento dos debates na XX UFRGSMUN, esse formato pode ser
                flexibilizado, incluindo mais representações de juízes (desde
                que seja um número ímpar), e sugere-se que haja também a
                representação dos agentes conflitantes (em duplas, se possível).
                Assim, a dinâmica seria a apresentação das razões dos
                consultantes e das partes interessadas (se houver), os debates
                orais e, por último, a pronúncia do parecer consultivo pelos
                Magistrados. Quanto ao documento a ser produzido pelos delegados
                ao fim do debate, também há uma pequena distinção de acordo com
                a natureza jurídica do litígio a ser debatido: para um caso, há
                uma sentença. Para uma opinião consultiva, por consequência,
                haverá um parecer consultivo a ser redigido. Considerando essas
                distinções, a diretoria acadêmica do comitê sugere que os dois
                temas a serem debatidos sejam de igual natureza, ou seja, ou
                dois casos ou duas opiniões consultivas. Dessa forma, os
                procedimentos e a dinâmica do comitê serão facilitadas, para que
                os delegados possam tirar maior proveito da substância dos
                debates.
              </Paragraph>
              <Paragraph className="mt-2">
                <strong>TÓPICO A:</strong> Aplicação da Convenção Internacional
                sobre a Eliminação de todas as formas de Discriminação Racial
                <br />
                <strong>TÓPICO B:</strong> Consequências Legais das Políticas
                Práticas de Israel no Território Palestino Ocupado Incluindo
                Jerusalém Oriental
              </Paragraph>
            </div>
          </div>

          <div className="pb-20">
            <div className="flex justify-center w-full flex-row-reverse text-right">
              <div className="flex flex-col justify-center text-xl lg:text-3xl text-darkBorders lg:pb-14 pb-5 text-left">
                <span className="font-extrabold">
                  Defesa, Proteção
                  <br />e Segurança
                </span>
                <span className="font-light">da União Africana</span>
              </div>
              <img
                src={DPSUA}
                className="w-44"
                draggable="false"
                style={{ userSelect: "none" }}
                onMouseDown={() => false}
              />
            </div>
            <div>
              <Paragraph className="text-darkTone text-justify">
                Em 1999, a Organização da Unidade Africana (OUA) declarou apoio
                a criação de uma unidade africana, com objetivos de integrar o
                continente e inseri-lo na economia global, como também abordar
                as demais questões internas — sociais, políticas e econômicas.
                Assim, em julho de 2002, foi lançada a União Africana (UA),
                composta por todos os 55 Estados africanos, visando a
                integração, a prosperidade e a promoção da paz, além de
                objetivar representar uma força na arena global. Dentre os
                objetivos citados no Ato Constitutivo da UA e o Protocolo de
                Emendas do Ato Constitutivo da UA, alguns dos mais relevantes
                são: a) defender a soberania, integridade territorial e
                independência dos seus Estados membros; b) incentivar a
                cooperação internacional; c) promover a paz, segurança e
                estabilidade no continente; d) promover e proteger os direitos
                humanos e dos povos; e e) promover a cooperação em todos os
                campos da atividade humana para elevar os padrões de vida dos
                povos africanos. Desse modo, o trabalho da UA é posto em prática
                através de vários órgãos, dentre eles: a Assembleia dos Chefes
                de Estado e de Governo, o Conselho Executivo, o Conselho de Paz
                e Segurança e a Comissão da União Africana — além do mais,
                através do Parlamento Pan-Africano e do Conselho Econômico,
                Social e Cultural (ECOSOCC), os cidadãos são convidados a
                participar nas decisões. Também, a UA conta com órgão especiais
                para lidar com assuntos jurídicos e legais — incluindo questões
                de direitos humanos — e mais uma série de outros departamentos.
                Por fim, as línguas oficiais da UA e de suas instituições são:
                árabe, francês, português, espanhol, kiswahili e qualquer outro
                idioma africano.
              </Paragraph>
              <Paragraph className="mt-2">
                <strong>TÓPICO A:</strong> Desafios à Soberania Estatal na
                África Oriental
                <br />
                <strong>TÓPICO B:</strong> Revoluções Coloridas e Guerras
                Híbridas na África
              </Paragraph>
            </div>
          </div>

          <div className="pb-20">
            <div className="flex justify-center w-full mx-auto">
              <div className="flex flex-col justify-center text-xl lg:text-3xl text-darkBorders lg:pb-14 pb-5 text-right">
                <span className="font-extrabold">
                  Conselho
                  <br />
                  Econômico e Social
                </span>
                <span className="font-light">da Liga Árabe</span>
              </div>
              <img
                src={CESLA}
                className="w-44"
                draggable="false"
                style={{ userSelect: "none" }}
                onMouseDown={() => false}
              />
            </div>
            <div>
              <Paragraph className="text-darkTone text-justify">
                O Conselho Econômico e Social da Liga Árabe é um órgão que
                articula a integração econômica e está incorporado à Liga Árabe.
                Fundada em 22 de março de 1945 na cidade do Cairo, a Liga de
                Estados Árabes, também chamada de Liga Árabe, é uma organização
                regional composta por 22 Estados. Foi concebida em 1944 pelo
                Protocolo de Alexandria que previa a formação de uma unidade
                capaz de colaborar para o fortalecimento dos laços entre os
                Estados árabes formando um palco onde a cooperação econômica e a
                discussão sobre assuntos próprios da região tivessem espaço para
                ecoar. Entre ajustes e reformas, em 2020 a Liga completou 75
                anos de formação e é hoje um ator consolidado e garantidor da
                estabilidade do sistema regional árabe. Criado em 1950 pelo
                Tratado de Cooperação Defesa e Economia Conjunta da Liga dos
                Estados Árabes, a fim de fomentar o intercâmbio comercial, o
                Conselho Econômico e Social define políticas e programas que
                promovem desenvolvimento humano e crescimento econômico entre os
                membros da Liga. O Conselho reúne-se duas vezes por ano com os
                demais países-membros para definir as diretrizes da atividade
                diplomática que abrangem a esfera política, cultural, econômica
                e social. Além de desempenhar um papel de mediar e elucidar
                conflitos, o Conselho Econômico e Social presta assistência
                técnica e financeira aos países-membros para ajudá-los a
                implementar essas políticas e programas.
              </Paragraph>
              <Paragraph className="mt-2">
                <strong>TÓPICO A:</strong> Impacto das Mudanças Climáticas na
                Economia dos Estados Árabes
                <br />
                <strong>TÓPICO B:</strong> Geopolítica Hídrica no Oriente Médio
              </Paragraph>
            </div>
          </div>

          <div className="pb-20">
            <div className="flex justify-center w-full flex-row-reverse text-right">
              <div className="flex flex-col justify-center text-xl lg:text-3xl text-darkBorders lg:pb-14 pb-5 text-left">
                <span className="font-extrabold">Imprensa</span>
                <span className="font-light">Internacional</span>
              </div>
              <img
                src={PRESS}
                className="w-44"
                draggable="false"
                style={{ userSelect: "none" }}
                onMouseDown={() => false}
              />
            </div>
            <div>
              <Paragraph className="text-darkTone text-justify">
                A imprensa internacional — no papel de coletar, investigar,
                analisar, checar e transmitir acontecimentos em um mundo
                globalizado — lida com a responsabilidade de reportar fatos à
                sociedade, conectando, curando, certificando e traduzindo o que
                lhe é de interesse. O jornalismo emerge no cenário internacional
                com a missão de levar conhecimento ao grande público acerca do
                contexto global no qual está inserido, configurando-se,
                portanto, como uma ponte entre aqueles que tomam as decisões e
                aqueles que são influenciados por essas. Hoje, em um período
                marcado pela essencialidade do digital, o jornalismo encontra-se
                em transformação, potencializando as técnicas antigas de forma a
                conduzi-las ao encontro das novas, convergindo os formatos e
                redescobrindo o ofício por meio das tecnologias contemporâneas.
                Nesse contexto, o Comitê de Imprensa Internacional (CI)
                apresenta-se como uma maneira de compreender esse cenário,
                simulando, pois, o funcionamento dos principais veículos de
                comunicação mundiais na cobertura de assuntos internacionais.
                Durante o evento, o CI será responsável por realizar a cobertura
                midiática de todas as sessões simuladas no UFRGS Model United
                Nations (UFRGSMUN) para as plataformas digitais — Twitter,
                TikTok e Instagram. Os repórteres produzirão, além de materiais
                relativos à cobertura das sessões, entrevistas, reportagens e
                artigos à luz das linhas editoriais em representação. Com o
                mesmo intuito, estará no escopo dos jornalistas a produção de
                telejornais e coletivas de imprensa.
              </Paragraph>
              <Paragraph className="mt-2">
                <strong>TÓPICO:</strong> Diretrizes para a Cobertura
                Jornalística de Modelos das Nações Unidas
              </Paragraph>
            </div>
          </div>

          <div className="pb-20">
            <div className="flex justify-center w-full mx-auto">
              <div className="flex flex-col justify-center text-xl lg:text-3xl text-darkBorders lg:pb-14 pb-5 text-right">
                <span className="font-extrabold">
                  The Special
                  <br />
                  Political
                </span>
                <span className="font-light">
                  and Decolonization
                  <br />
                  Committee
                </span>
              </div>
              <img
                src={SPECPOL}
                className="w-44"
                draggable="false"
                style={{ userSelect: "none" }}
                onMouseDown={() => false}
              />
            </div>
            <div>
              <Paragraph className="text-darkTone text-justify">
                The Fourth Committee of the General Assembly of the United
                Nation is the Special Political and Decolonization Committee,
                also known as SPECPOL. The committee was established in 1993,
                being a combination of the Decolonization Committee and the
                Special Political Committee. The Fourth Committee has the main
                objective to discuss political issues involving five
                decolonization-related agenda items: the effects of atomic
                radiation, questions relating to information, a comprehensive
                review of the question of peacekeeping operations as well as a
                review of special political missions, the United Nations Relief
                and Works Agency for Palestinian Refugees in the Near East
                (UNRWA), Israeli Practices and settlement activities affecting
                the rights of the Palestinian people and other Arabs of the
                occupied territories and International cooperation in the
                peaceful uses of outer space (United Nations, 2022).
              </Paragraph>
              <Paragraph className="mt-2">
                <strong>TOPIC A:</strong> The Situation in Western Sahara
                Nowadays, People’s Self-Determination and MINURSO effectiveness
                <br />
                <strong>TOPIC B:</strong> Colonial Impacts of Climate Change in
                the Third World
              </Paragraph>
            </div>
          </div>

          <div className="pb-20">
            <div className="flex justify-center w-full flex-row-reverse text-right">
              <div className="flex flex-col justify-center text-xl lg:text-3xl text-darkBorders lg:pb-14 pb-5 text-left">
                <span className="font-extrabold">
                  The United
                  <br />
                  Nations
                </span>
                <span className="font-light">
                  Security
                  <br />
                  Council
                </span>
              </div>
              <img
                src={UNSC}
                className="w-44"
                draggable="false"
                style={{ userSelect: "none" }}
                onMouseDown={() => false}
              />
            </div>
            <div>
              <Paragraph className="text-darkTone text-justify">
                The United Nations Security Council (UNSC) is one of the main
                organs of the United Nations, responsible for the peace and
                security maintenance, friendly development of relations between
                countries, cooperation to solve international conflicts, Human
                Rights respect promotion and commitment to a harmonized system
                for nations. Also, the Security Council is the only UN committee
                with power to decide mandatory actions to all UN members,
                differing themselves from other organs that are only able to
                make recommendations. The Council is responsible for both
                investigating acts of aggression and disputes, but it is also
                its role to step in on ongrowing future threats, fulfilling this
                goal with non-armed acts – such as ceasefire calls in escalation
                conflicts, military observers or with a peacekeeping operation –
                to start their movements. Moreover, the UNSC can use armed
                options to stop the conflict – economic sanctions, embargoes,
                restrictions, bans, suspensions or military actions – in order
                to maintain peace. Their internal structure is composed of 15
                member states: 10 elected by the General Assembly for two years
                and the other 5 occupying permanent seats – China, the United
                States, France, United Kingdom and Russia – with veto power,
                which allows them to block any resolution with just one vote.
              </Paragraph>
              <Paragraph className="mt-2">
                <strong>TOPIC A:</strong> Implications of Developing Submarine
                Fleets in the Asia-Pacific Region: the situation of Taiwan
                <br />
                <strong>TOPIC B:</strong> The Turkish Invasion, Occupation or
                Bombardment of Northern Syria: the attempt to stop the creation
                of the Kurdish State
              </Paragraph>
            </div>
          </div>
        </SectionContainer>
      </div>
    </PageContainer>
  );
}

export default Committee;
