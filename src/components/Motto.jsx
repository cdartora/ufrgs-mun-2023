import React from "react";
import { Paragraph, Subtitle } from "./Formatting";

function Motto() {
  return (
    <div className="text-lightTone">
      <h4 className="italic font-medium text-lg">Motto</h4>
      <div className="mb-2 leading-5">
        <Subtitle>Desafiando limites</Subtitle>
        <Subtitle>e buscando soluções profundas</Subtitle>
      </div>
      <Paragraph>
        Em 2023, o UFRGSMUN pretende extrapolar as barreiras do superficial, do
        dado, do trivial, procurando ir além de meras soluções paliativas, com a
        consciência de que respostas eficazes são apenas alcançadas quando
        buscadas em profundidade - profundidade de debate, de diálogo, de
        conhecimento e de senso crítico. No cenário internacional, ao mesmo
        tempo que mudanças são constantes, há impasses de longa data que parecem
        irresolúveis. Na décima sexta edição do UFRGSMUN, buscaremos revelar
        novas alternativas a tais desafios, atravessando superfícies e
        obstáculos, alcançando respostas até então inexploradas. Atualmente,
        instituições nacionais e internacionais estão ameaçadas. Como
        estudantes, cidadãs(os) e futuras(os) líderes, temos o dever de
        encontrar e divulgar essas "respostas desconhecidas", a fim de que
        inverdades e retóricas rasas possam ser sobrepassadas por argumentos
        sólidos e construtivos.
      </Paragraph>
    </div>
  );
}

export default Motto;
