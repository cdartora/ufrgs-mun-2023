import classNames from "classnames";

import { Tab } from "@headlessui/react";

import earth from "../assets/apply/earth.svg";

const steps = [
    {
        name: "Passo 1",
        title: "Organizar uma delegação e escolher um(a) chefe de delegação",
        steps: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
        ]
    },
    {
        name: "Passo 2",
        title: "Organizar uma delegação e escolher um(a) chefe de delegação",
        steps: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
        ]
    },
    {
        name: "Passo 3",
        title: "Organizar uma delegação e escolher um(a) chefe de delegação",
        steps: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
        ]
    },
    {
        name: "Passo 4",
        title: "Organizar uma delegação e escolher um(a) chefe de delegação",
        steps: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien lacus. In vehicula ultricies molestie. Donec placerat cursus turpis et auctor. Morbi bibendum, augue id sollicitudin aliquet, mauris neque aliquam tortor, sed commodo massa neque porttitor magna.",
        ]
    },
];

function ApplyTabs() {
  return (
    <div className="w-full flex space-x-10 items-start justify-center max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex items-center">
            <div className="h-1 w-full bg-almostWhite opacity-20 z-10"/>
            <div className="z-20 flex justify-center items-center gap-4">

          {steps.map((step) => (
            <Tab
              key={step.name}
              className={({ selected }) =>
                classNames(
                  "z-20 w-20 h-20 p-2 overflow-hidden text-base font-bold bg-almostWhite rounded-full",
                  "focus:outline-none focus:ring-2",
                  selected
                    ? "ui-selected:bg-almostWhite ui-selected:text-darkTone"
                    : "text-brand-grey hover:bg-white/70 opacity-30"
                )
              }
            >
              <div className="relative flex items-center justify-center">
                {step.name}

                <img
                  src={earth}
                  className="absolute -bottom-14 h-20 w-20"
                  draggable="false"
                  style={{ userSelect: "none" }}
                  onMouseDown={() => false}
                />
              </div>
            </Tab>
          ))}
            </div>
        </Tab.List>
        {/* <Tab.Panels className="mt-2 h-full">
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
        </Tab.Panels> */}
      </Tab.Group>
    </div>
  )
}

export default ApplyTabs