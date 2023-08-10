import classNames from "classnames";

import { Tab } from "@headlessui/react";

import earth from "../assets/apply/earth.svg";

const steps = [
  {
    name: "Passo 1",
    title: "Organizar uma delegação e escolher um(a) chefe de delegação",
    steps: [
      "A primeira coisa a fazer para organizar uma delegação é encontrar pessoas que desejam participar da simulação.",
      "Depois, você deve escolher um ou mais países da Matriz de Países que possui representações em todos os comitês que você e seus/suas amigos(as) querem participar.",
      "Cada delegação pode conter entre 01 (um) a 20 (vinte) participantes. Dentre estes membros, deve ser escolhido o(a) Chefe de Delegação, que será responsável por preencher os formulários, realizar os pagamentos e estar em contato direto com o staff do UFRGSMUN.",
      "Caso você deseje um país específico, você deve convidar pessoas o suficiente para preencher as vagas desta representação. Porém, não esqueça de que não é certo que a sua delegação irá receber a primeira opção solicitada.",
      "O número de delegados(as) e países que sua delegação deseja representar deve ser informado no Formulário A, que estará disponível a partir do dia 05 de agosto.",
    ],
  },
  {
    name: "Passo 2",
    title: "Preenchendo Formulário A",
    steps: [
      "Uma vez que sua delegação decidiu os países de preferência, o(a) Chefe de Delegação deve preencher o Formulário A.",
      "Durante o preenchimento do formulário, deverão ser informadas 12 (doze) combinações de países que agradariam a sua delegação. Esse procedimento é para facilitar o trabalho do Secretariado na alocação de preferências. Ao preencher, é necessário ter em mente que o número de delegados deve ser equivalente ao número de vagas demandado na inscrição da delegação.",
      "Após a sua delegação – representada pelo(a) Chefe de Delegação – submeter o Formulário, ele ou ela irá receber um e-mail indicando os procedimentos de pagamento.",
    ],
  },
  {
    name: "Passo 3",
    title: "Pagamento",
    steps: [
      "O valor por pessoa é de R$155,00 em uma parcela ou R$175,00 dividido em duas vezes.",
      "Os(as) Chefes de Delegação podem escolher no momento da inscrição se a delegação irá realizar o pagamento em uma ou duas parcelas. O método de pagamento escolhido necessariamente deve ser o mesmo para todos os membros da delegação.",
      "O comprovante do pagamento de toda a delegação deve ser enviado pelo(a) Chefe de Delegação para o e-mail do UFRGSMUN. Quando enviado o e-mail, pelo(a) Chefe de Delegação irá receber um retorno confirmando o recebimento do pagamento. Outro e-mail deverá ser enviado quando for realizado o pagamento da segunda parcela da inscrição.",
    ],
  },
  {
    name: "Passo 4",
    title: "Prencheendo Formulário B",
    steps: [
      "Até o dia 22 de setembro, os(as) Chefes de Delegação irão receber outro e-mail indicando os países designados para a delegação. Uma vez recebida a representação, o(a) Chefe de Delegação terá que aguardar apenas até o dia 23 de setembro para preencher o Formulário B.",
      "Gabinete de crises e imprensa:: Participantes que desejam participar do Gabinete de Crises (Coalizão Saudita na República do Iêmen: Operação Renewal of Hope) ou da Imprensa Internacional devem preencher um formulário específico para inscrição. As vagas são alocadas com base na ordem de chegada.",
    ],
  },
];

function ApplyTabs() {
  return (
    <div className="w-full flex flex-col items-center justify-center max-w-md md:px-2 py-6 md:py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex items-center">
          <div className="z-20 flex justify-center items-center">
            {steps.map((step, idx) => (
              <>
                <Tab
                  key={step.name}
                  className={({ selected }) =>
                    classNames(
                      "z-20 w-16 h-16 md:w-20 md:h-20 p-2 overflow-hidden text-base font-bold bg-almostWhite rounded-full",
                      "focus:outline-none focus:ring-2",
                      selected
                        ? "ui-selected:bg-almostWhite ui-selected:text-darkTone"
                        : "text-brand-grey hover:bg-white/70 opacity-20"
                    )
                  }
                >
                  <div className="relative flex items-center justify-center">
                    <span className="text-xs">{step.name}</span>

                    <img
                      src={earth}
                      className="absolute -bottom-12 md:-bottom-14 h-20 w-20"
                      draggable="false"
                      style={{ userSelect: "none" }}
                      onMouseDown={() => false}
                    />
                  </div>
                </Tab>
                {idx != 3 && (
                  <div className="h-1 w-3 bg-almostWhite opacity-20" />
                )}
              </>
            ))}
          </div>
        </Tab.List>
        <Tab.Panels className="mt-7 mx-auto text-left max-w-xl">
          {steps.map((s) => (
            <Tab.Panel
              key={s.name}
              className="rounded-xl bg-almostWhite p-4 md:p-10"
            >
              <h4 className="font-black text-lg mb-4 relative text-darkTone">
                {s.title}
              </h4>
              <ul>
                {s.steps.map((text) => (
                  <li>
                    <div className="flex items-center gap-2 my-4">
                      <div className="bg-darkTone h-2 w-2 rounded-full" />
                      <div className="bg-darkTone h-2 w-2 rounded-full" />
                      <div className="bg-darkTone h-2 w-2 rounded-full" />
                    </div>
                    <p className="text-darkTone font-light relative text-base">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default ApplyTabs;
