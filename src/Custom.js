import { BsPlusSquare } from "react-icons/bs";

let firstValue = 0;
let secondValue = 0;
let thirdValue = 0;
let fourthValue = 0;

const widthController = (partition) => {
  if (partition === first) {
    firstValue += 10;
  }
  console.log(firstValue);
};

let first = `${firstValue}%`;
let second = `${secondValue}%`;
let third = `${thirdValue}%`;
let fourth = `${fourthValue}%`;

const Custom = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center bg-[#151819] p-52">
        <button
          onClick={widthController(first)}
          className="flex self-center border bg-white"
        >
          test
        </button>

        <div className="flex w-1/2 flex-col rounded-md border border-[#374151] p-5">
          <div className="flex w-full overflow-hidden rounded-md border border-[#374151] bg-gray shadow-md">
            <div style={{ width: first }} className="flex h-16 bg-blue"></div>
            <div
              style={{ width: second }}
              className="flex h-16 bg-indigo"
            ></div>
            <div style={{ width: third }} className="flex h-16 bg-purple"></div>
            <div style={{ width: fourth }} className="flex h-16 bg-pink"></div>
            <div
              style={{ width: 100 }}
              className="flex h-16 items-center justify-center gap-2.5"
            >
              <div className="flex text-xs">free 1.62TB</div>

              <button className="flex">
                <BsPlusSquare className="text-xl opacity-75" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Custom;
