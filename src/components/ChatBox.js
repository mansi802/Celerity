import React from "react";
import chatImg from "../assets/images/Chat button.png";

const ChatBox = () => {
  return (
    <React.Fragment>
      <button className=" fixed bottom-[8%] right-[5%] z-30  bg-transparent hover:bg-transparent">
        <img
          className=" max-w-[50px] rounded-full md:max-w-[75px]"
          src={chatImg}
          alt="Chat Box"
        />
      </button>
    </React.Fragment>
  );
};

export default ChatBox;
