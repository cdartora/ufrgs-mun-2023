import CommitteeCard from "../components/CommitteeCard";
import PageContainer from "../components/PageContainer";
import SectionContainer from "../components/SectionContainer";
import { Title, Subtitle, Paragraph } from "../components/Formatting";

import earth from "../assets/committees/earth.svg";
import anniversaryLogo from "../assets/20-anos-white.svg";

import committeeImageUrl from "../assets/committees/committee-1.svg";

// standby data for eventual content
const committees = [
  {
    title: ["Conselho de Segurança", "das Nações Unidas"],
    imgUrl: committeeImageUrl,
    summary:
      'Reconhecido como o órgão primário das Nações Unidas para a manutenção da paz e da segurança internacional, o Conselho de Segurança das Nações Unidas (CSNU) difere dos demais comitês da ONU por possuir algumas características únicas e especiais. Além de ser o único organismo cujas resoluções vinculam todos os Estados-membros da ONU, é do mandato do Conselho o direito de autorizar o uso da força mediante missões de manutenção da paz ou coalizões militares e, também, de impor sanções econômicas e militares. Entretanto, como tais medidas são sempre um último recurso, e soluções pacíficas são desejáveis, o CSNU pode contribuir para o cessamento da disputa investigando ou mediando o conflito, tanto pelo uso de enviados especiais quanto pela instalação de missões políticas.O CSNU é composto por quinze membros, dos quais cinco são permanentes, e dez são selecionados pela Assembleia Geral para mandatos de dois anos. Os cinco membros permanentes do Conselho de Segurança são a República Popular da China, a França, a Federação Russa, o Reino Unido e os Estados Unidos, e eles possuem o que é comumente conhecido como "poder de veto". Os atuais membros temporários do CSNU são Bolívia, Cazaquistão, Costa do Marfim, Etiópia, Guiné Equatorial, Holanda, Kuwait, Peru, Polônia e Suécia.',
    topicA: {
      title:
        "THE HUMANITARIAN IMPACTS OF UNILATERAL AND MULTILATERAL SANCTIONS",
      description:
        'Since the end of the Cold War, economic sanctions have become an instrument increasingly used by major powers to achieve international policy goals. The utilization of such mechanism seeks to weaken the coercive capacity of the targeted elite, leading to economic and political disturbances in the country, with the expectation, thus, that these sanctions will promote the respect to human rights and the democratization. However, the growing employment of sanctions and the consequent humanitarian crises led to an understanding that such sanctions could be a harmful foreign policy tool due to the destabilizing effects they create in the targeted countries. Specifically, sanctions could cause significant socio-economic and political damage in these countries, causing disproportionate stress to ordinary citizens. In the face of such a problem, the discussion about the impact of economic sanctions arises as a challenge for the international community, especially in what concerns the controversies and the legitimacy of these sanctions. In this sense, the United Nations Human Rights Council is in charge of questioning the use of these measures and debating about the responsibility of the senders, being also necessary to analyze the viability of a restructured approach to sanctions that could be more "intelligent" or "directed", targeting regimes rather than people.',
    },
    topicB: {
      title: "NATIONS WITHOUT STATES: THE SITUATION OF THE KURD POPULATION",
      description:
        "The Kurdistan is a Kurdish-majority region comprised by the areas of Turkey, Iraq, Syria, and Iran. The Kurds have never existed as a recognized politically independent community, being under the domain of other States throughout history, and were never internationally and formally recognized as a threatened population. The lack of protection led to rising upheavals amongst the Kurdish, which claimed suffering state repression, discrimination, and economical neglect in their homeland. As a result, they consolidated their movement for greater autonomy and even independence. Although the clashes between regional governments and Kurdish armed groups passed through a brief period of peace, the rising Syrian conflict created new tensions that resulted in local governments taking strong measures to avoid the possibility of secession and the formation of an independent Kurdistan. Among such strong measures, there is the intensification of military operations in Southeast Turkey, which affected primarily the Kurdish population. In times of civil strife and escalation of conflicts - as in Syria - it is of paramount importance the respect of human rights, so that Kurds do not become easy targets for political groups that use security as a discourse to neglect or even violate such rights. It is therefore the task of this committee to bring up the debate on the situation of the Kurdish population, to present the problem to the international community, to assess and enforce treaties by the Turkish, Iranian, Iraqi and Syrian governments, and to create reasonable resolutions to avoid future violations.",
    },
  },
  {
    title: ["Conselho de Segurança", "das Nações Unidas"],
    imgUrl: committeeImageUrl,
    summary:
      'Reconhecido como o órgão primário das Nações Unidas para a manutenção da paz e da segurança internacional, o Conselho de Segurança das Nações Unidas (CSNU) difere dos demais comitês da ONU por possuir algumas características únicas e especiais. Além de ser o único organismo cujas resoluções vinculam todos os Estados-membros da ONU, é do mandato do Conselho o direito de autorizar o uso da força mediante missões de manutenção da paz ou coalizões militares e, também, de impor sanções econômicas e militares. Entretanto, como tais medidas são sempre um último recurso, e soluções pacíficas são desejáveis, o CSNU pode contribuir para o cessamento da disputa investigando ou mediando o conflito, tanto pelo uso de enviados especiais quanto pela instalação de missões políticas.O CSNU é composto por quinze membros, dos quais cinco são permanentes, e dez são selecionados pela Assembleia Geral para mandatos de dois anos. Os cinco membros permanentes do Conselho de Segurança são a República Popular da China, a França, a Federação Russa, o Reino Unido e os Estados Unidos, e eles possuem o que é comumente conhecido como "poder de veto". Os atuais membros temporários do CSNU são Bolívia, Cazaquistão, Costa do Marfim, Etiópia, Guiné Equatorial, Holanda, Kuwait, Peru, Polônia e Suécia.',
    topicA: {
      title:
        "THE HUMANITARIAN IMPACTS OF UNILATERAL AND MULTILATERAL SANCTIONS",
      description:
        'Since the end of the Cold War, economic sanctions have become an instrument increasingly used by major powers to achieve international policy goals. The utilization of such mechanism seeks to weaken the coercive capacity of the targeted elite, leading to economic and political disturbances in the country, with the expectation, thus, that these sanctions will promote the respect to human rights and the democratization. However, the growing employment of sanctions and the consequent humanitarian crises led to an understanding that such sanctions could be a harmful foreign policy tool due to the destabilizing effects they create in the targeted countries. Specifically, sanctions could cause significant socio-economic and political damage in these countries, causing disproportionate stress to ordinary citizens. In the face of such a problem, the discussion about the impact of economic sanctions arises as a challenge for the international community, especially in what concerns the controversies and the legitimacy of these sanctions. In this sense, the United Nations Human Rights Council is in charge of questioning the use of these measures and debating about the responsibility of the senders, being also necessary to analyze the viability of a restructured approach to sanctions that could be more "intelligent" or "directed", targeting regimes rather than people.',
    },
    topicB: {
      title: "NATIONS WITHOUT STATES: THE SITUATION OF THE KURD POPULATION",
      description:
        "The Kurdistan is a Kurdish-majority region comprised by the areas of Turkey, Iraq, Syria, and Iran. The Kurds have never existed as a recognized politically independent community, being under the domain of other States throughout history, and were never internationally and formally recognized as a threatened population. The lack of protection led to rising upheavals amongst the Kurdish, which claimed suffering state repression, discrimination, and economical neglect in their homeland. As a result, they consolidated their movement for greater autonomy and even independence. Although the clashes between regional governments and Kurdish armed groups passed through a brief period of peace, the rising Syrian conflict created new tensions that resulted in local governments taking strong measures to avoid the possibility of secession and the formation of an independent Kurdistan. Among such strong measures, there is the intensification of military operations in Southeast Turkey, which affected primarily the Kurdish population. In times of civil strife and escalation of conflicts - as in Syria - it is of paramount importance the respect of human rights, so that Kurds do not become easy targets for political groups that use security as a discourse to neglect or even violate such rights. It is therefore the task of this committee to bring up the debate on the situation of the Kurdish population, to present the problem to the international community, to assess and enforce treaties by the Turkish, Iranian, Iraqi and Syrian governments, and to create reasonable resolutions to avoid future violations.",
    },
  },
  {
    title: ["Conselho de Segurança", "das Nações Unidas"],
    imgUrl: committeeImageUrl,
    summary:
      'Reconhecido como o órgão primário das Nações Unidas para a manutenção da paz e da segurança internacional, o Conselho de Segurança das Nações Unidas (CSNU) difere dos demais comitês da ONU por possuir algumas características únicas e especiais. Além de ser o único organismo cujas resoluções vinculam todos os Estados-membros da ONU, é do mandato do Conselho o direito de autorizar o uso da força mediante missões de manutenção da paz ou coalizões militares e, também, de impor sanções econômicas e militares. Entretanto, como tais medidas são sempre um último recurso, e soluções pacíficas são desejáveis, o CSNU pode contribuir para o cessamento da disputa investigando ou mediando o conflito, tanto pelo uso de enviados especiais quanto pela instalação de missões políticas.O CSNU é composto por quinze membros, dos quais cinco são permanentes, e dez são selecionados pela Assembleia Geral para mandatos de dois anos. Os cinco membros permanentes do Conselho de Segurança são a República Popular da China, a França, a Federação Russa, o Reino Unido e os Estados Unidos, e eles possuem o que é comumente conhecido como "poder de veto". Os atuais membros temporários do CSNU são Bolívia, Cazaquistão, Costa do Marfim, Etiópia, Guiné Equatorial, Holanda, Kuwait, Peru, Polônia e Suécia.',
    topicA: {
      title:
        "THE HUMANITARIAN IMPACTS OF UNILATERAL AND MULTILATERAL SANCTIONS",
      description:
        'Since the end of the Cold War, economic sanctions have become an instrument increasingly used by major powers to achieve international policy goals. The utilization of such mechanism seeks to weaken the coercive capacity of the targeted elite, leading to economic and political disturbances in the country, with the expectation, thus, that these sanctions will promote the respect to human rights and the democratization. However, the growing employment of sanctions and the consequent humanitarian crises led to an understanding that such sanctions could be a harmful foreign policy tool due to the destabilizing effects they create in the targeted countries. Specifically, sanctions could cause significant socio-economic and political damage in these countries, causing disproportionate stress to ordinary citizens. In the face of such a problem, the discussion about the impact of economic sanctions arises as a challenge for the international community, especially in what concerns the controversies and the legitimacy of these sanctions. In this sense, the United Nations Human Rights Council is in charge of questioning the use of these measures and debating about the responsibility of the senders, being also necessary to analyze the viability of a restructured approach to sanctions that could be more "intelligent" or "directed", targeting regimes rather than people.',
    },
    topicB: {
      title: "NATIONS WITHOUT STATES: THE SITUATION OF THE KURD POPULATION",
      description:
        "The Kurdistan is a Kurdish-majority region comprised by the areas of Turkey, Iraq, Syria, and Iran. The Kurds have never existed as a recognized politically independent community, being under the domain of other States throughout history, and were never internationally and formally recognized as a threatened population. The lack of protection led to rising upheavals amongst the Kurdish, which claimed suffering state repression, discrimination, and economical neglect in their homeland. As a result, they consolidated their movement for greater autonomy and even independence. Although the clashes between regional governments and Kurdish armed groups passed through a brief period of peace, the rising Syrian conflict created new tensions that resulted in local governments taking strong measures to avoid the possibility of secession and the formation of an independent Kurdistan. Among such strong measures, there is the intensification of military operations in Southeast Turkey, which affected primarily the Kurdish population. In times of civil strife and escalation of conflicts - as in Syria - it is of paramount importance the respect of human rights, so that Kurds do not become easy targets for political groups that use security as a discourse to neglect or even violate such rights. It is therefore the task of this committee to bring up the debate on the situation of the Kurdish population, to present the problem to the international community, to assess and enforce treaties by the Turkish, Iranian, Iraqi and Syrian governments, and to create reasonable resolutions to avoid future violations.",
    },
  },
];

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
          {committees.map((committee, idx) => {
            const isOdd = idx % 2 == 0;

            return (
              <CommitteeCard key={idx} committee={committee} isOdd={isOdd} />
            );
          })}
        </SectionContainer>
      </div>
    </PageContainer>
  );
}

export default Committee;
