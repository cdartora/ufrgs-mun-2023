import { Tab } from "@headlessui/react";
import team from "../data/team";

import TeamCard from "./TeamCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TeamSection() {
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex md:space-x-2 space-x-1 rounded-xl p-1">
          {["Secretariado", "Administrativo", "Acadêmico"].map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-bold text-darkGreen leading-5 px-2 md:px-4",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-green focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow text-green-text font-bold"
                    : "text-white hover:bg-white/[0.12]"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(team).map((category, idx) => (
            <Tab.Panel key={idx} className="rounded-xl p-3">
              <ul className="grid grid-cols-3 grid-flow-row">
                {category.map((teamMember, idx) => (
                  <TeamCard teamMember={teamMember} key={idx} />
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
