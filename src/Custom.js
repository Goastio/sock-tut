import "./index.css";
import { BsPlusSquare } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import { Combobox } from "@headlessui/react";
import "react-reflex/styles.css";
import { useState } from "react";

const mountOpts = [
  { id: 1, name: "mount [-h|-V]" },
  { id: 2, name: "mount test" },
  { id: 3, name: "mount lorem" },
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
      : mountOpts.filter((mount) => {
          return mount.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="flex h-screen flex-col justify-center bg-white text-black">
      <div className="mx-auto flex w-full max-w-screen-md flex-col gap-5 rounded-md border border-gray p-5">
        <div className="flex h-10 overflow-hidden rounded-md bg-gray text-xs">
          <ReflexContainer orientation="vertical">
            <ReflexElement minSize="25" maxSize="150" className="left-pane">
              <div className="flex h-full w-full flex-col">
                <button className="flex h-full w-full flex-col items-center justify-center bg-blue text-xs font-medium text-white focus:border-2 focus:border-black sm:text-sm">
                  <span className="text-md">p1: 30G</span>
                  <span>md0</span>
                </button>
              </div>
            </ReflexElement>

            {
              /* (secondPartition &&) by default it won't display the splitter on first partition */
              <ReflexSplitter propagate={true}>
                <div className="m-[-4px] mt-[1px] flex h-full w-full">
                  <div className="flex self-center rounded-full bg-neutral-700 py-4 px-1 transition duration-200 hover:bg-neutral-900"></div>
                </div>
              </ReflexSplitter>
            }
            <ReflexElement minSize="25" maxSize="150" className="left-pane">
              <div className="flex h-full w-full flex-col">
                <button className="flex h-full w-full flex-col items-center justify-center bg-indigo text-xs font-medium text-white focus:border-2 focus:border-black sm:text-sm">
                  <span className="text-md">p2: 25G</span>
                  <span>md1</span>
                </button>
              </div>
            </ReflexElement>

            <ReflexSplitter propagate={true}>
              <div className="m-[-4px] mt-[1px] flex h-full w-full">
                <div className="flex self-center rounded-full bg-neutral-700 py-4 px-1 transition duration-200 hover:bg-neutral-900"></div>
              </div>
            </ReflexSplitter>

            <ReflexElement minSize="25" maxSize="150" className="left-pane">
              <div className="flex h-full w-full flex-col">
                <button className="flex h-full w-full flex-col items-center justify-center bg-purple text-xs font-medium text-white focus:border-2 focus:border-black sm:text-sm">
                  <span className="text-md">p3: 10G</span>
                  <span>md2</span>
                </button>
              </div>
            </ReflexElement>

            <ReflexSplitter propagate={true}>
              <div className="m-[-4px] mt-[1px] flex h-full w-full">
                <div className="flex self-center rounded-full  bg-neutral-700 py-4 px-1 transition duration-200 hover:bg-neutral-900"></div>
              </div>
            </ReflexSplitter>

            <ReflexElement minSize="25" maxSize="150" className="left-pane">
              <div className="flex h-full w-full flex-col">
                <button className="flex h-full w-full flex-col items-center justify-center bg-pink text-xs font-medium text-white hover:bg-opacity-90 focus:border-2 focus:border-black sm:text-sm">
                  <span className="text-md">p4: 15G</span>
                  <span>md3</span>
                </button>
              </div>
            </ReflexElement>

            <ReflexSplitter propagate={true}>
              <div className="m-[-4px] mt-[1px] flex h-full w-full">
                <div className="flex self-center rounded-full bg-neutral-700 py-4 px-1 transition duration-200 hover:bg-neutral-900"></div>
              </div>
            </ReflexSplitter>

            <ReflexElement minSize="125" className="left-pane">
              <div className="flex h-full items-center justify-center gap-2.5 overflow-hidden">
                <div className="flex text-xs text-white sm:text-sm">
                  free: 1.62TB
                </div>
                <button className="flex rounded-md transition duration-200 hover:bg-white hover:bg-opacity-[15%]">
                  <BsPlusSquare className="text-xl opacity-75" />
                </button>
              </div>
            </ReflexElement>
          </ReflexContainer>
        </div>
        <div className="flex h-10 overflow-hidden rounded-md bg-gray text-xs">
          <ReflexContainer orientation="vertical">
            <ReflexElement minSize="25" maxSize="150" className="left-pane">
              <div className="flex h-full w-full flex-col">
                <button className="flex h-full w-full flex-col items-center justify-center bg-blue text-xs font-medium text-white focus:border-2 focus:border-black sm:text-sm">
                  <span className="text-md">p1: 30G</span>
                  <span>md0</span>
                </button>
              </div>
            </ReflexElement>

            {
              /* (secondPartition &&) by default it won't display the splitter on first partition */
              <ReflexSplitter propagate={true}>
                <div className="m-[-4px] mt-[1px] flex h-full w-full">
                  <div className="flex self-center rounded-full bg-neutral-700 py-4 px-1 transition duration-200 hover:bg-neutral-900"></div>
                </div>
              </ReflexSplitter>
            }
            <ReflexElement minSize="25" maxSize="150" className="left-pane">
              <div className="flex h-full w-full flex-col">
                <button className="flex h-full w-full flex-col items-center justify-center bg-indigo text-xs font-medium text-white focus:border-2 focus:border-black sm:text-sm">
                  <span className="text-md">p2: 25G</span>
                  <span>md1</span>
                </button>
              </div>
            </ReflexElement>

            <ReflexSplitter propagate={true}>
              <div className="m-[-4px] mt-[1px] flex h-full w-full">
                <div className="flex self-center rounded-full bg-neutral-700 py-4 px-1 transition duration-200 hover:bg-neutral-900"></div>
              </div>
            </ReflexSplitter>

            <ReflexElement minSize="25" maxSize="150" className="left-pane">
              <div className="flex h-full w-full flex-col">
                <button className="flex h-full w-full flex-col items-center justify-center bg-purple text-xs font-medium text-white focus:border-2 focus:border-black sm:text-sm">
                  <span className="text-md">p3: 10G</span>
                  <span>md2</span>
                </button>
              </div>
            </ReflexElement>

            <ReflexSplitter propagate={true}>
              <div className="m-[-4px] mt-[1px] flex h-full w-full">
                <div className="flex self-center rounded-full  bg-neutral-700 py-4 px-1 transition duration-200 hover:bg-neutral-900"></div>
              </div>
            </ReflexSplitter>

            <ReflexElement minSize="25" maxSize="150" className="left-pane">
              <div className="flex h-full w-full flex-col">
                <button className="flex h-full w-full flex-col items-center justify-center bg-pink text-xs font-medium text-white hover:bg-opacity-90 focus:border-2 focus:border-black sm:text-sm">
                  <span className="text-md">p4: 15G</span>
                  <span>md3</span>
                </button>
              </div>
            </ReflexElement>

            <ReflexSplitter propagate={true}>
              <div className="m-[-4px] mt-[1px] flex h-full w-full">
                <div className="flex self-center rounded-full bg-neutral-700 py-4 px-1 transition duration-200 hover:bg-neutral-900"></div>
              </div>
            </ReflexSplitter>

            <ReflexElement minSize="125" className="left-pane">
              <div className="flex  h-full items-center justify-center gap-2.5 overflow-hidden">
                <div className="flex text-xs text-white sm:text-sm">
                  free: 1.62TB
                </div>
                <button className="flex rounded-md transition duration-200 hover:bg-white hover:bg-opacity-[15%]">
                  <BsPlusSquare className="text-xl opacity-75" />
                </button>
              </div>
            </ReflexElement>
          </ReflexContainer>
        </div>

        <div className="mx-auto flex w-full max-w-screen-md flex-col gap-5">
          <div className="flex gap-5">
            <label className="gap-1.6 flex w-full flex-col">
              Name
              <input
                type="text"
                className="border-gray-200 w-full rounded-md border py-2 px-3 text-xs sm:text-sm"
              />
            </label>
            <label className="gap-1.6 flex w-full flex-col">
              Filesystem
              <input
                type="text"
                className="border-gray-200 w-full rounded-md border py-2 px-3 text-xs sm:text-sm"
              />
            </label>
          </div>
          <div className="flex gap-5">
            <label className="gap-1.6 flex w-full flex-col">
              Type
              <input
                type="text"
                className="border-gray-200 w-full rounded-md border py-2 px-3 text-xs sm:text-sm"
              />
            </label>
            <label className="gap-1.6 flex w-full flex-col">
              Mount point
              <input
                type="text"
                className="border-gray-200 w-full rounded-md border py-2 px-3 text-xs sm:text-sm"
              />
            </label>
          </div>
          <div className="flex gap-5">
            <label className="gap-1.6 pointer-events-none flex w-full flex-col">
              Size
              <input
                type="text"
                className="border-gray-200 w-full rounded-md border py-2 px-3 text-xs sm:text-sm"
              />
            </label>
            <label className="gap-1.6 flex w-full flex-col">
              <Combobox
                as="div"
                value={selectedMount}
                onChange={setSelectedMount}
              >
                <Combobox.Label className="text-gray-700 block">
                  Mount options
                </Combobox.Label>
                <div className="relative">
                  <Combobox.Input
                    className="border-gray-200 w-full rounded-md border bg-white bg-opacity-5 py-2 px-3 shadow-sm focus:border-indigo focus:outline-none focus:ring-1 focus:ring-indigo sm:text-xs sm:text-sm"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(mount) => mount?.name}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <FiChevronDown
                      className="text-gray-400 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Combobox.Button>

                  {filterMount.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 px-[4px] text-base text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-xs sm:text-sm">
                      {filterMount.map((mount) => (
                        <Combobox.Option
                          key={mount.id}
                          value={mount}
                          className={({ active }) =>
                            classNames(
                              "relative cursor-default select-none p-2.5",
                              active
                                ? "rounded-md transition hover:bg-indigo hover:text-white"
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
                                {mount.name}
                              </span>

                              {selected && (
                                <span
                                  className={classNames(
                                    "absolute inset-y-0 right-0 flex items-center pr-4",
                                    active ? "text-black" : "text-indigo-600"
                                  )}
                                ></span>
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
