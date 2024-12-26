import React from "react";
import { IoMdSend } from "react-icons/io";
import AiRobotSvg from "../AiRobotSvg";
import clsx from "clsx";
import { IoIosExit } from "react-icons/io";
import { OpenAI } from "openai";

const ChatBot = () => {
  const [openChat, setOpenChat] = React.useState<boolean>(false);
  //   const [messages, setMessages] = React.useState<
  //     { role: string; content: string }[]
  //   >([]);
  //   const [input, setInput] = React.useState<string>("");

  //   const openAi = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY });

  //   const sendMessage = async () => {
  //     if (!input.trim()) return;

  //     const newMessages = [
  //       ...messages,
  //       { role: "user" as string, content: input },
  //     ];
  //     setMessages(newMessages as any);

  //     try {
  //       const response = await openAi.chat.completions.create({
  //         model: "gpt-3.5-turbo",
  //         messages: [
  //           { role: "system", content: "You are an AI assistant." },
  //           ...(newMessages as any),
  //         ],
  //       });

  //       const botMessage = response.choices[0].message.content || "";
  //       setMessages([...newMessages, { role: "assistant", content: botMessage }]);
  //     } catch (error) {
  //       console.error("Error with OpenAI API:", error);
  //     }

  //     setInput("");
  //   };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <div
        className={clsx(
          "w-[270px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all ease-in-out duration-300 relative",
          openChat ? "h-[350px] p-2" : "h-0 p-0"
        )}
      >
        <h2 className="font-bold text-center">What can I help with?</h2>
        <button
          className="absolute top-2 left-2"
          onClick={() => setOpenChat(false)}
        >
          <IoIosExit size={25} color="#4ade80" />
        </button>

        <div>
          <div className="w-full flex justify-end">
            <div className="w-auto bg-gray-400 px-4 py-2 rounded-full text-white text-sm">
              hi
            </div>
          </div>
          <div className="w-full mt-2">
            <p className="px-4 py-2 rounded-2xl bg-slate-400 text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              molestiae qui dignissimos eius ipsum incidunt delectus nihil minus
              mollitia magni ab ipsam sequi laboriosam, maxime nostrum facilis!
              Non, reiciendis nobis?
            </p>
          </div>
        </div>

        <div className="flex items-center w-full max-w-[260px] absolute bottom-5 left-1 border border-gray-300 rounded-full overflow-hidden">
          <input
            type="text"
            name=""
            id=""
            className="w-full  px-2 py-1 outline-none"
            placeholder="Message"
            // onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="pb-2 pt-1"
            //    onClick={sendMessage}
          >
            <IoMdSend size={25} color="#4ade80" className="-rotate-45" />
          </button>
        </div>
      </div>
      <button
        onClick={() => setOpenChat(!openChat)}
        className={clsx(
          "w-full flex items-end justify-end",
          openChat ? "hidden" : "block"
        )}
      >
        <AiRobotSvg />
      </button>
    </div>
  );
};

export default ChatBot;
