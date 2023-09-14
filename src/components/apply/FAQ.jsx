import { useState, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Subtitle, Title, Paragraph } from "../Formatting";

function FAQmodal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="py-2 px-10 bg-almostWhite text-darkGreen rounded-full"
      >
        Dúvidas Frequentes
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md overflow-y-auto max-h-[70vh] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3">
                    <Title className="text-center text-darkGreen">FAQ</Title>
                  </Dialog.Title>

                  <Subtitle className="mt-4">
                    QUE É UM MODELO DAS NAÇÕES UNIDAS?
                  </Subtitle>

                  <Paragraph>
                    Um Modelo das Nações Unidas é uma simulação das reuniões e
                    conferências realizadas na ONU e em organizações e fóruns
                    regionais. As(os) participantes atuam como delegada(o)s de
                    diversos países, possuindo a responsabilidade de defender a
                    posição e política externa destes.
                  </Paragraph>

                  <Subtitle className="mt-4">O QUE É UFRGSMUN?</Subtitle>

                  <Paragraph>
                    Criado em 2003, O UFRGS Model United Nations é um modelo das
                    Nações Unidas organizado pelos alunos e alunas da
                    Universidade Federal do Rio Grande do Sul.
                  </Paragraph>

                  <Subtitle className="mt-4">QUEM PODE SE CANDIDATAR?</Subtitle>

                  <Paragraph>
                    UFRGSMUN é um evento para estudantes de graduação e
                    graduados de qualquer curso e Universidade do Brasil e do
                    mundo.
                  </Paragraph>

                  <Subtitle className="mt-4">COMO POSSO ME INSCREVER?</Subtitle>

                  <Paragraph>
                    O primeiro passo para se inscrever no UFRGSMUN é montar uma
                    delegação, a qual consiste em um grupo de 1 a 20 pessoas que
                    gostariam de participar do evento. No entanto, se você não
                    possuir uma delegação, você pode se inscrever
                    individualmente: escolhendo um país com apenas uma vaga ou
                    pedindo para ser alocado em alguma delegação que possuir seu
                    país de preferência.
                  </Paragraph>

                  <Subtitle className="mt-4">
                    COMO A MINHA DELEGAÇÃO ESCOLHE O COMITÊ? E A REPRESENTAÇÃO?
                  </Subtitle>

                  <Paragraph>
                    Na hora da inscrição, o chefe da delegação deve enviar
                    vários “blocos” de países que compreendem os comitês e
                    representações desejados. O secretariado, então, escolherá
                    as representações e enviará à delegação.
                  </Paragraph>

                  <Subtitle className="mt-4">
                    PARA QUEM A ISENÇÃO DA INSCRIÇÃO É VÁLIDA?
                  </Subtitle>

                  <Paragraph>
                    O UFRGSMUN garante a isenção de dez (10) inscrições
                    destinadas para participantes em situação de vulnerabilidade
                    socioeconômica conforme o Edital de Benefícios, a ser
                    lançado em 02 de Agosto. Além disso, aquelas e aqueles que
                    preencherem os requisitos do edital têm preferência no
                    Programa de Hospedagem Solidária e desconto de 50% no Pacote
                    Social.
                  </Paragraph>

                  <Subtitle className="mt-4">O QUE EU DEVO VESTIR?</Subtitle>

                  <Paragraph>
                    Os/as participantes devem vestir um traje executivo
                    ocidental, ou equivalente nacional. No entanto, as
                    vestimentas não precisam seguir um padrão masculino e
                    feminino, visto que queremos que você expresse sua
                    identidade sem ser contido pelos estereótipos da sociedade.
                  </Paragraph>

                  <Subtitle className="mt-4">
                    QUANDO O UFRGSMUN ACONTECE?
                  </Subtitle>

                  <Paragraph>
                    O UFRGSMUN acontecerá entre os dias 31 de outubro e 4 de
                    novembro de 2018.
                  </Paragraph>

                  <Subtitle className="mt-4">
                    ONDE UFRGSMUN VAI ACONTECER?
                  </Subtitle>

                  <Paragraph>
                    O local do evento é o Hotel Plaza São Rafael, localizado em
                    Porto Alegre, Rio Grande do Sul.
                  </Paragraph>

                  <Subtitle className="mt-4">QUANTO CUSTA O EVENTO?</Subtitle>

                  <Paragraph>
                    A inscrição tem um custo de R$155,00 ou, se pago em duas
                    vezes, R$175,00.
                  </Paragraph>

                  <Subtitle className="mt-4">EXISTE ALGUM REEMBOLSO?</Subtitle>

                  <Paragraph>
                    As taxas de inscrição e as entradas dos eventos sociais não
                    são reembolsáveis.
                  </Paragraph>

                  <Subtitle className="mt-4">EU GANHO UM CERTIFICADO?</Subtitle>

                  <Paragraph>
                    O UFRGSMUN garante um certificado de 40 horas complementares
                    para participantes com 75% de presença ou mais nas sessões.
                  </Paragraph>

                  <Subtitle className="mt-4">
                    EXISTE ALGUMA ACOMODAÇÃO OFICIAL?
                  </Subtitle>

                  <Paragraph>
                    Localizado próximo ao local do evento, o Hotel Master
                    Express Alberto Bins estará concedendo tarifas especiais aos
                    participantes do UFRGSMUN. Além da acomodação oficial, você
                    pode se hospedar gratuitamente na casa de algum membro da
                    equipe organizadora. Para saber como garantir acomodação
                    solidária ou para conferir a tabela de valores da hospedagem
                    no hotel acesse a ppágina Acomodação.
                  </Paragraph>

                  <Subtitle className="mt-4">
                    EU AINDA TENHO DÚVIDAS. COMO POSSO OBTER MAIS INFORMAÇÕES?
                  </Subtitle>

                  <Paragraph>
                    Você pode entrar em contato direto com a organização do
                    UFRGSMUN através dos e-mail{" "}
                    <strong>ufrgsmun@ufrgs.br</strong> e{" "}
                    <strong>ufrgsmun@gmail.com</strong>, ou pela nossa página no{" "}
                    <a
                      href="https://www.facebook.com/ufrgsmun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline"
                    >
                      Facebook
                    </a>
                    .
                  </Paragraph>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default FAQmodal;
