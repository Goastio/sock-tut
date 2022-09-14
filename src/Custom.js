import "./index.css";
import { BsPlusSquare } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import { Combobox } from "@headlessui/react";

import "react-reflex/styles.css";
import { useState } from "react";

const mountOpts = [
  { id: 1, name: "mount [-h|-V]" },
  // More users...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Custom = () => {
  const [query, setQuery] = useState("");
  const [selectedMount, setSelectedMount] = useState();

  const filterMount =
    query === ""
      ? mountOpts
      : mountOpts.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="flex flex-col h-screen bg-[#151819] justify-center">
      <div className="flex rounded-md border border-[#374151] max-w-screen-md mx-auto w-full p-5 flex-col gap-5">
        <div className="flex h-10 bg-gray rounded-md shadow-md overflow-hidden">
          <ReflexContainer orientation="vertical">
            <ReflexElement minSize="60" maxSize="200" className="left-pane">
              <button className="flex bg-blue w-full h-full text-sm justify-center items-center active:border-white">
                <div className="flex flex-col">
                  <span>p1: 30G</span>
                  <span>md0</span>
                </div>
              </button>
            </ReflexElement>

            <ReflexSplitter propagate={true} />
            <ReflexElement minSize="60" maxSize="200" className="left-pane">
              <button className="flex bg-indigo w-full h-full text-sm justify-center items-center active:border-white">
                <div className="flex flex-col">
                  <span>p1: 30G</span>
                  <span>md0</span>
                </div>
              </button>
            </ReflexElement>
            <ReflexSplitter propagate={true} />
            <ReflexElement minSize="60" maxSize="200" className="left-pane">
              <button className="flex bg-purple w-full h-full text-sm justify-center items-center active:border-white">
                <div className="flex flex-col">
                  <span>p1: 30G</span>
                  <span>md0</span>
                </div>
              </button>
            </ReflexElement>
            <ReflexSplitter propagate={true} />
            <ReflexElement minSize="60" maxSize="200" className="left-pane">
              <button className="flex bg-pink w-full h-full text-sm justify-center items-center active:border-white">
                <div className="flex flex-col">
                  <span>p1: 30G</span>
                  <span>md0</span>
                </div>
              </button>
            </ReflexElement>
            <ReflexSplitter propagate={true} />
            <ReflexElement minSize="125" className="left-pane">
              <div className="flex h-full justify-center items-center gap-2.5 overflow-hidden">
                <div className="flex text-xs">free 1.62TB</div>
                <button className="flex">
                  <BsPlusSquare className="text-xl opacity-75" />
                </button>
              </div>
            </ReflexElement>
          </ReflexContainer>
        </div>

        <div className="gap-5 flex flex-col w-full max-w-screen-md mx-auto">
          <div className="flex gap-5">
            <label className="w-full flex flex-col text-white gap-1.6">
              Name
              <input
                type="text"
                className="w-full py-2 px-3 bg-white bg-opacity-5 rounded-md"
              />
            </label>
            <label className="w-full flex flex-col text-white gap-1.6">
              Type
              <input
                type="text"
                className="w-full py-2 px-3 bg-white bg-opacity-5 rounded-md"
              />
            </label>
          </div>
          <div className="flex gap-5">
            <label className="w-full flex flex-col text-white gap-1.6">
              Size
              <input
                type="text"
                className="w-full py-2 px-3 bg-white bg-opacity-5 rounded-md"
              />
            </label>
            <label className="w-full flex flex-col text-white gap-1.6">
              Filesystem
              <input
                type="text"
                className="w-full py-2 px-3 bg-white bg-opacity-5 rounded-md"
              />
            </label>
          </div>
          <div className="flex gap-5">
            <label className="w-full flex flex-col text-white gap-1.6">
              Mount point
              <input
                type="text"
                className="w-full py-2 px-3 bg-white bg-opacity-5 rounded-md"
              />
            </label>
            <label className="w-full flex flex-col text-white gap-1.6">
              <Combobox
                as="div"
                value={selectedMount}
                onChange={setSelectedMount}
              >
                <Combobox.Label className="block text-white">
                  Mount options
                </Combobox.Label>
                <div className="relative">
                  <Combobox.Input
                    className="w-full rounded-md border-gray-300 bg-white bg-opacity-5 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(mount) => mount?.name}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <FiChevronDown
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>

                  {filterMount.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filterMount.map((person) => (
                        <Combobox.Option
                          key={person.id}
                          value={person}
                          className={({ active }) =>
                            classNames(
                              "relative cursor-default select-none py-2 pl-3 pr-9",
                              active
                                ? "bg-indigo-600 text-white"
                                : "text-gray-900"
                            )
                          }
                        >
                          {({ active, selected }) => (
                            <>
                              <span
                                className={classNames(
                                  "block truncate",
                                  selected && "font-semibold"
                                )}
                              >
                                {person.name}
                              </span>

                              {selected && (
                                <span
                                  className={classNames(
                                    "absolute inset-y-0 right-0 flex items-center pr-4",
                                    active ? "text-black" : "text-indigo-600"
                                  )}
                                >
                                  <FiChevronDown
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              )}
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}
                </div>
              </Combobox>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Custom;

// import { BsPlusSquare } from "react-icons/bs";

// let firstValue = 0;
// let secondValue = 0;
// let thirdValue = 0;
// let fourthValue = 0;

// const widthController = (partition) => {
//     if (partition === first) {
//         firstValue += 10
//     }
//     console.log(firstValue)
// };

// let first = `${firstValue}%`;
// let second = `${secondValue}%`;
// let third = `${thirdValue}%`;
// let fourth = `${fourthValue}%`;

// const Custom = () => {

//   return (
//     <>
//       <div className="flex flex-col h-screen bg-[#151819] items-center p-52">
//         <button
//           onClick={widthController(first)}
//           className="flex border bg-white self-center"
//         >
//           test
//         </button>

//         <div className="flex rounded-md border border-[#374151] w-1/2 p-5 flex-col">
//           <div className="flex w-full bg-gray border border-[#374151] rounded-md overflow-hidden shadow-md">
//             <div style={{ width: first }} className="flex h-16 bg-blue"></div>
//             <div
//               style={{ width: second }}
//               className="flex h-16 bg-indigo"
//             ></div>
//             <div style={{ width: third }} className="flex h-16 bg-purple"></div>
//             <div style={{ width: fourth }} className="flex h-16 bg-pink"></div>
//             <div
//               style={{ width: 100 }}
//               className="flex h-16 justify-center items-center gap-2.5"
//             >
//               <div className="flex text-xs">free 1.62TB</div>

//               <button className="flex">
//                 <BsPlusSquare className="text-xl opacity-75" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Custom;
