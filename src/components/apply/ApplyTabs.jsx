import classNames from "classnames";

import { Tab } from "@headlessui/react";

import earth from "../../assets/earth.svg";

const steps = [
  {
    name: "Passo 1",
    title: "Organizar uma delegação",
    steps: [
      "Checar os seus comitês preferidos e ver as delegações disponíveis na Matriz de Delegações encontrada nessa mesma página.",
    ],
  },
  {
    name: "Passo 2",
    title: "Preenchendo Formulário de Inscrição",
    steps: [
      "Uma vez escolhido suas delegações para se tornar um delegado basta se inscrever preenchendo o Formulário de Inscrição com seus dados pessoais.",
    ],
  },
  {
    name: "Passo 3",
    title: "Pagamento",
    steps: [
      "O valor por pessoa é de R$155,00 em uma parcela ou R$175,00 dividido em duas vezes.",
      "O comprovante do pagamento ou documento de estudante beneficiário socioeconômico deve ser enviado pelo(a) delegado(a) para o e-mail do UFRGSMUN.",
    ],
  },
];

function ApplyTabs() {
  return (
    <div className="w-full flex flex-col items-center justify-center max-w-md md:px-2 py-6 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex items-center">
          <div className="z-20 flex justify-center items-center">
            {steps.map((step, idx) => (
              <>
                <Tab
                  key={step.name}
                  className={({ selected }) =>
                    classNames(
                      "z-20 w-16 h-16 md:w-20 md:h-20 p-2 overflow-hidden text-base md:text-xl font-bold bg-almostWhite rounded-full",
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
                {idx != 2 && (
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
