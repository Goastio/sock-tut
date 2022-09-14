import "./index.css";
import { BsPlusSquare } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";

import "react-reflex/styles.css";

const Custom = () => {
  return (
    <div className="flex flex-col h-screen bg-[#151819] justify-center">
      <div className="flex rounded-md border border-[#374151] max-w-screen-md mx-auto w-full p-5 flex-col gap-5">
        <div className="flex h-10 bg-gray rounded-md shadow-md overflow-hidden">
          <ReflexContainer orientation="vertical">
            <ReflexElement minSize="60" className="left-pane">
              <button className="flex bg-blue w-full h-full text-sm justify-center items-center">
                <div className="flex flex-col hover:cursor-default">
                  <span>p1: 30G</span>
                  <span>md0</span>
                </div>
              </button>
            </ReflexElement>

            <ReflexSplitter propagate={true} />
            <ReflexElement minSize="50" className="left-pane">
              <div className="flex bg-indigo h-full" />
            </ReflexElement>
            <ReflexSplitter propagate={true} />
            <ReflexElement minSize="50" className="left-pane">
              <div className="flex bg-purple h-full" />
            </ReflexElement>
            <ReflexSplitter propagate={true} />
            <ReflexElement minSize="50" className="left-pane">
              <div className="flex bg-pink h-full" />
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
              Mount options
              <button className="flex w-full relative items-center">
                <input className="w-full py-2 px-3 bg-white bg-opacity-5 rounded-md" />
                <div className="flex absolute justify-end w-full pr-2.5">
                  <FiChevronDown />
                </div>
              </button>
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
