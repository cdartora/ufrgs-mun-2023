import { Tab } from "@headlessui/react";
import team from "../data/team";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TeamSection() {
  console.log(team);
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex md:space-x-2 space-x-1 rounded-xl p-1">
          {["Acadêmico", "Administrativo", "Secretariado"].map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white px-2 md:px-4",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-green focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow text-darkGreen"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
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
                  <li
                    key={idx}
                    className="relative rounded-md p-3 flex flex-col justify-center items-center gap-2"
                  >
                    <div className="h-16 w-16 rounded-full overflow-hidden flex justify-center items-center">
                      <img
                        src={teamMember.image}
                        alt={`${teamMember.name} foto`}
                      />
                    </div>
                    <h3 className="text-sm font-medium leading-5 text-white text-center">
                      {teamMember.name}
                    </h3>
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
