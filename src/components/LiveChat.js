import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [chatText, setChatText] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          text: generateRandomMessage(),
        })
      );
    }, 700);
    return () => clearInterval(i);
  }, []);

  function sendMessage() {
    dispatch(
      addMessage({
        name: generateRandomName(),
        text: chatText,
      })
    );
    setChatText("");
  }

  return (
    <>
      <div>
        <div className="ml-2 p-2 h-[500px] border border-black rounded-sm bg-gray-50 overflow-y-auto flex flex-col-reverse">
          {chatMessages.map((val, i) => (
            <ChatMessages key={i} name={val.name} text={val.text} />
          ))}
        </div>
        <div className="">
          <input
            value={chatText}
            onChange={(e) => setChatText(e.target.value)}
            className="ml-2 my-1 rounded p-2 border border-black"
            type="text"
          ></input>
          <button
            onClick={() => sendMessage()}
            className="ml-2 px-4 py-1 bg-green-400 rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
