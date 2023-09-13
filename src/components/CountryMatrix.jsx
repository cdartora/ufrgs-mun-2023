import { useState, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Title, Subtitle, Paragraph } from "./Formatting";

function CountryMatrix() {
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
        className="rounded-full border-2 border-darkGreen bg-almostWhite text-darkGreen py-2 px-6 inline whitespace-nowrap"
      >
        Matriz de Países
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
                <Dialog.Panel className="w-full max-w-screen-md overflow-y-auto overflow-x-scroll max-h-[70vh] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3">
                    <Title className="text-center text-darkGreen">
                      Matriz de Países
                    </Title>
                  </Dialog.Title>
                  <Subtitle>Legenda:</Subtitle>
                  <Paragraph>
                    <strong>CIJ</strong> não possui representações por países;
                  </Paragraph>
                  <Paragraph>
                    <strong>SPECPOL</strong> e <strong>UNSC</strong> serão
                    simulados em língua inglesa;
                  </Paragraph>
                  <Paragraph>
                    <strong>**</strong> Comitês simulados em dupla.
                  </Paragraph>
                  <table className="mt-4">
                    <thead>
                      <tr class="bg-darkGreen text-almostWhite text-center">
                        <th className="border border-gray-300 ">CDHNU</th>
                        <th className="border border-gray-300 ">CELAC</th>
                        <th className="border border-gray-300 ">DPS-UA</th>
                        <th className="border border-gray-300 ">CES-LA**</th>
                        <th className="border border-gray-300 ">PRESS</th>
                        <th className="border border-gray-300 ">SPECPOL</th>
                        <th className="border border-gray-300 ">UNSC**</th>
                        <th className="border border-gray-300 ">CIJ*</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alemanha</td>
                        <td>Argentina</td>
                        <td>África do Sul</td>
                        <td>Arábia Saudita</td>
                        <td>Al Jazeera</td>
                        <td>Algeria</td>
                        <td>Albania</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Angola</td>
                        <td>Bolívia</td>
                        <td>Angola</td>
                        <td>Argélia</td>
                        <td>Andalou Agency</td>
                        <td>Bangladesh</td>
                        <td>Australia</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Armênia</td>
                        <td>Brasil</td>
                        <td>Argélia</td>
                        <td>Armênia</td>
                        <td>BBC</td>
                        <td>Belgium</td>
                        <td>Brazil</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Austrália</td>
                        <td>Chile</td>
                        <td>Burkina Faso</td>
                        <td>Bahrein</td>
                        <td>Clarín</td>
                        <td>Bolivia</td>
                        <td>China</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Bahrein</td>
                        <td>Colômbia</td>
                        <td>Burundi</td>
                        <td>Brasil</td>
                        <td>El País</td>
                        <td>Brazil</td>
                        <td>France</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Bangladesh</td>
                        <td>Costa Rica</td>
                        <td>Camarões</td>
                        <td>Catar</td>
                        <td>Estado de S. Paulo</td>
                        <td>China</td>
                        <td>Ghana</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Brasil</td>
                        <td>Cuba</td>
                        <td>Chade</td>
                        <td>Comores</td>
                        <td>Global Times</td>
                        <td>Cuba</td>
                        <td>Iran</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Camarões</td>
                        <td>Rep. Dominicana</td>
                        <td>Costa do Marfim</td>
                        <td>Djibuti</td>
                        <td>Haaretz</td>
                        <td>Dem. Rep. of Congo</td>
                        <td>Japan</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Chile</td>
                        <td>El Salvador</td>
                        <td>Djibuti</td>
                        <td>Egito</td>
                        <td>Le Monde</td>
                        <td>Egypt</td>
                        <td>Mozambique</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>China</td>
                        <td>Equador</td>
                        <td>Egito</td>
                        <td>Emirados Árabes</td>
                        <td>Reuter</td>
                        <td>France</td>
                        <td>Russia</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Coreia do Sul</td>
                        <td>Guatemala</td>
                        <td>Eritreia</td>
                        <td>Eritreia</td>
                        <td>The New York Times</td>
                        <td>Ghana</td>
                        <td>Syria</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Dinamarca</td>
                        <td>Guiana</td>
                        <td>Etiópia</td>
                        <td>Iêmen</td>
                        <td>The Times of India</td>
                        <td>Honduras</td>
                        <td>Turkey</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Egito</td>
                        <td>Haiti</td>
                        <td>Gana</td>
                        <td>Índia</td>
                        <td>Xinhua</td>
                        <td>India</td>
                        <td>United Arab Emirates</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Eritreia</td>
                        <td>Honduras</td>
                        <td>Líbia</td>
                        <td>Iraque</td>
                        <td></td>
                        <td>Indonesia</td>
                        <td>United Kingdom</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Índia</td>
                        <td>México</td>
                        <td>Mali</td>
                        <td>Jordânia</td>
                        <td></td>
                        <td>Israel</td>
                        <td>United States</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Itália</td>
                        <td>Nicarágua</td>
                        <td>Marrocos</td>
                        <td>Kuwait</td>
                        <td></td>
                        <td>Japan</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Japão</td>
                        <td>Paraguai</td>
                        <td>Mauritânia</td>
                        <td>Líbano</td>
                        <td></td>
                        <td>Malaysia</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Líbia</td>
                        <td>Peru</td>
                        <td>Moçambique</td>
                        <td>Líbia</td>
                        <td></td>
                        <td>Marocco</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>México</td>
                        <td>Suriname</td>
                        <td>Níger</td>
                        <td>Marrocos</td>
                        <td></td>
                        <td>Nigeria</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Nepal</td>
                        <td>Trinidade e Tobago</td>
                        <td>Nigéria</td>
                        <td>Mauritânia</td>
                        <td></td>
                        <td>Norway</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Nigéria</td>
                        <td>Uruguai</td>
                        <td>Quênia</td>
                        <td>Omã</td>
                        <td></td>
                        <td>Pakistan</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Países Baixos</td>
                        <td>Venezuela</td>
                        <td>Rep. Centro Africana</td>
                        <td>Palestina</td>
                        <td></td>
                        <td>Philippines</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Paquistão</td>
                        <td></td>
                        <td>Rep. Dem. do Congo</td>
                        <td>Síria</td>
                        <td></td>
                        <td>Portugal</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Peru</td>
                        <td></td>
                        <td>Ruanda</td>
                        <td>Somália</td>
                        <td></td>
                        <td>Russia</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Polônia</td>
                        <td></td>
                        <td>Somália</td>
                        <td>Sudão</td>
                        <td></td>
                        <td>Saudi Arabia</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Reino Unido</td>
                        <td></td>
                        <td>Sudão</td>
                        <td>Tunísia</td>
                        <td></td>
                        <td>Somalia</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Sudão</td>
                        <td></td>
                        <td>Sudão do Sul</td>
                        <td>Venezuela</td>
                        <td></td>
                        <td>South Africa</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>República Tcheca</td>
                        <td></td>
                        <td>Tanzânia</td>
                        <td></td>
                        <td></td>
                        <td>Spain</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Ucrânia</td>
                        <td></td>
                        <td>Tunísia</td>
                        <td></td>
                        <td></td>
                        <td>Tunisia</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Venezuela</td>
                        <td></td>
                        <td>Uganda</td>
                        <td></td>
                        <td></td>
                        <td>Turkey</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Tuvalu</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>United Kingdom</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>United States</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Venezuela</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CountryMatrix;
