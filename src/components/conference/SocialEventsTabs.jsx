import { Tab } from "@headlessui/react";
import classNames from "classnames";
import polygon from "../../assets/polygon.svg";

export default function SocialEventsTabs() {
  const schedule = [
    {
      id: 1,
      day: "1",
      month: "Nov",
      schedule: [
        {
          hour: "14:00h - 15:00h",
          description: "Credenciamento",
        },
        {
          hour: "15:00h - 18:00h",
          description: "Início do Mock",
        },
        {
          hour: "18:00h - 20:00h",
          description: "Cerimônia de Abertura no Plaza São Rafael",
        },
        {
          hour: "20:00h",
          description: "Confraternização Social",
        },
      ],
    },
    {
      id: 2,
      day: "2",
      month: "Nov",
      schedule: [
        {
          hour: "19:00h - 21:00h",
          description: "Jantar dos Comitês",
        },
        {
          hour: "21:00h",
          description: "Show de Talentos",
        },
      ],
    },
    {
      id: 3,
      day: "3",
      month: "Nov",
      schedule: [
        {
          hour: "20:00h",
          description: "Festa Open Bar à Fantasia",
        },
      ],
    },
    {
      id: 4,
      day: "4",
      month: "Nov",
      schedule: [
        {
          hour: "18:00h - 19:00h",
          description: "Cerimônia de Encerramento",
        },
        {
          hour: "19:00h",
          description: "Happy Hour",
        },
      ],
    },
  ];

  return (
    <div className="w-full flex space-x-10 items-start justify-center max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex flex-col space-y-5 rounded-xl p-1">
          {schedule.map((eventDay) => (
            <Tab
              key={eventDay.id}
              className={({ selected }) =>
                classNames(
                  "w-16 h-16 rounded-2xl shadow-lg p-2 text-md font-bold leading-5 bg-almostWhite",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-darkGreen focus:outline-none focus:ring-2",
                  selected
                    ? "ui-selected:bg-almostWhite ui-selected:text-darkTone"
                    : "text-brand-grey hover:bg-white/70 opacity-30"
                )
              }
            >
              <div className="relative flex flex-col items-center justify-center leading-5">
                <span>{eventDay.day}</span>
                <span>{eventDay.month}</span>

                <img
                  src={polygon}
                  className="ui-selected:block hidden absolute -right-7"
                  draggable="false"
                  style={{ userSelect: "none" }}
                  onMouseDown={() => false}
                />
              </div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 h-full">
          {schedule.map((eventDay, idx) => (
            <Tab.Panel
              key={eventDay.id}
              className="rounded-xl bg-almostWhite p-3"
            >
              <ul>
                {eventDay.schedule.map(({ hour, description }, idx) => (
                  <li key={idx} className="relative rounded-md p-3">
                    <h3 className="font-bold leading-5 text-darkTone">
                      {hour}
                    </h3>
                    <span className="text-sm text-darkTone leading-4">
                      {description}
                    </span>
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
