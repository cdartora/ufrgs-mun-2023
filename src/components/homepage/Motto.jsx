import React from "react";
import { Paragraph, Subtitle } from "../Formatting";

function Motto() {
  return (
    <div>
      <h4 className="italic font-medium text-lg">Motto</h4>
      <div className="mb-2 leading-5">
        <Subtitle>Reafirmando propósitos,</Subtitle>
        <Subtitle>motivando transformações. </Subtitle>
      </div>
      <Paragraph>
        Em 2023, o modelo das Nações Unidas da Universidade Federal do Rio
        Grande do Sul celebra um marco muito especial: chegamos, este ano, à
        nossa vigésima edição. O simbolismo da celebração das duas décadas do
        UFRGSMUN marca não somente a excelência do projeto, a competência das
        pessoas que o compõem e o engajamento dos delegados que ano após ano
        comparecem em nosso evento; marca, também, o papel social do UFRGSMUN
        enquanto projeto de extensão que, de maneira contínua, vem promovendo a
        pesquisa, o estudo e o debate dentro do meio acadêmico sobre temas
        relevantes para a sociedade. Tendo em vista a contribuição de nosso
        projeto para a formação educacional e profissional das pessoas que ele
        vem atingindo há vinte anos, bem como sua capacidade de continuar
        inferindo na realidade e possibilitando mudanças dentro do meio
        acadêmico e social, a frase escolhida para passar nossa mensagem este
        ano é "reafirmando propósitos, motivando transformações". Esperamos que
        com o desenvolvimento da nossa vigésima edição, assim como com a
        celebração do evento ao fim deste ano, o UFRGSMUN venha a reafirmar seus
        propósitos de defesa da educação pública e da extensão universitária, de
        valorização da pesquisa e estudos das ciências humanas e sociais, de
        promoção do diálogo diplomático e da preservação dos direitos coletivos
        individuais, como vem exitosamente fazendo nos últimos vinte anos.
        Ainda, contamos com que o impacto do projeto siga motivando
        transformações em nossa sociedade, e contribuindo na formação de
        indivíduos que se engajem por causas humanas, justas e democráticas.
      </Paragraph>
    </div>
  );
}

export default Motto;
