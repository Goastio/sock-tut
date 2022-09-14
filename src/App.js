// import "./index.css";
// import io from "socket.io-client";
// import { useEffect, useState } from "react";
import Custom from "./Custom"
// const socket = io.connect("http://localhost:3001");

function App() {
  // const [message, setMessage] = useState("");
  // const [messageReceived, setMessageReceived] = useState("");

  // const sendMessage = () => {
  //   socket.emit("send_message", { message });
  // };

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setMessageReceived(data.message);
  //   });
  // }, [socket]);

  return (
    // <div className="flex h-screen bg-neutral-800 w-full text-white">
    //   <div className="flex w-1/2 mx-auto justify-center flex-col">
    //     <input
    //       placeholder="Message..."
    //       onChange={(event) => {
    //         setMessage(event.target.value);
    //       }}
    //       type="text"
    //       className="bg-neutral-500 p-5 rounded-md outline-none focus:border focus:border-indigo-500"
    //     />
    //     <button onClick={sendMessage} className="text-2xl p-2.5">
    //       Send Message
    //     </button>
    //   </div>

    //   <h1>Message:</h1>
    //   <div className="">{messageReceived}</div>
    // </div>

    <Custom/>
  );
}

export default App;
