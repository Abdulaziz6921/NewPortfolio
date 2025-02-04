import React, { useState, useEffect } from "react";
import { FiLinkedin } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

function Contact() {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const email = "abdulaziztojibayev6@gmail.com";

  const [hide, setHide] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
      setHide(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage("Copied");
    if (hide === true) {
      setHide(false);
    }
  }

  let stl = {
    size: "relative w-[95%] h-fit flex flex-col my-12 mx-auto text-white  rounded-[20px] md:w-[90%] md:flex-row md:my-[8%] border-0",
    chat: "font-bold w-full h-fit flex flex-col justify-around items-center text-dark_like rounded-l-[20px] py-[10%] md:py-[5%] md:w-1/2 md:h-[500px] lg:h-[650px] bg-white",
    header: "text-center text-2xl md:text-4xl lg:text-5xl",
    btn: "w-[120px] h-10 my-6 tracking-[2px] font-medium bg-dark_like text-white text-sm hover:text-secondary hover:duration-500",
    vector_Img: "w-3/5 h-3/5",
    img_self: "w-full h-full object-contain",
    contact:
      "relative w-full h-fit flex flex-col items-end rounded-b-[20px] py-[10%] md:w-1/2 md:h-[500px] lg:h-[650px] md:py-[5%] bg-dark_like md:rounded-b-none md:rounded-r-[20px] border-[5px] border-white pr-10 lg:pr-[60px]",
    h1: "font-extrabold text-4xl relative md:text-[40px] lg:text-[80px] tracking-[2px] md:tracking-[3px] leading-tight",
    line: "w-[50px] h-[2px] bg-white absolute right-14 top-1/2 md:w-[70px] md:right-[70px] lg:right-32 lg:w-36",
    soc_media:
      "flex flex-wrap justify-around items-center w-[90%] h-fit py-[3%] bg-transparent mt-12",
    sm_box:
      "w-fit h-fit flex flex-col justify-center items-center text-xs md:text-sm lg:text-base",
    sm_btn:
      "flex flex-col justify-center items-center w-[65px] h-[65px] mt-[25px] lg:mt-[15px] rounded-[22px] md:w-20 md:h-20 lg:w-24 lg:h-24 text-5xl md:text-6xl hover:animate-bounce",
    yCircle:
      "w-3 h-3 md:h-10 md:w-10 bg-yellow-500 absolute top-[10px] left-[10px] rounded-full",
    oCircle:
      "w-3 h-3 md:hidden lg:block md:h-10 md:w-10 bg-orange-500 absolute bottom-[30px] right-[120px] md:bottom-[50px] md:rounded-[10px] rotate-45 rounded-0",
    gCircle:
      "w-3 h-3 md:h-5 md:w-5 lg:h-10 lg:w-10 bg-gray-400 absolute top-28 right-[10px] md:bottom-12 md:rounded-full",
  };

  return (
    <div className={stl.size} id="contact">
      <div className={stl.chat}>
        <h1 className={stl.header}>Let's have a quick chat</h1>
        <button className={stl.btn}>
          <p>{copySuccessMessage}</p>
          {hide ? <p onClick={copyEmail}>Copy Email</p> : ""}
        </button>
        <div className={stl.vector_Img}>
          <img
            src="./Images/contactimage.png"
            alt="vector_contact"
            className={stl.img_self}
          />
        </div>
      </div>

      <div className={stl.contact}>
        <div className={stl.yCircle}></div>
        <div className={stl.oCircle}></div>
        <div className={stl.gCircle}></div>
        <h1 className={stl.h1}>Contact</h1>

        <h1 className={stl.h1}>
          <div className={stl.line}></div> Me
        </h1>

        <div className={stl.soc_media}>
          <div className={stl.sm_box}>
            <a href="tel:+998913676921">
              <button className={stl.sm_btn} style={{ background: "green" }}>
                <AiFillPhone className="animate-wiggle" />
              </button>
            </a>
            <p>+998913676921</p>
          </div>

          <div className={stl.sm_box}>
            <a href="tg://resolve?domain=Abdulaziz007">
              <button className={stl.sm_btn} style={{ background: "white" }}>
                <BsTelegram className="text-[#239AD5] lg:text-[85px] md:text-[65px] text-[50px]" />
              </button>
            </a>
            <p>@Abdulaziz007</p>
          </div>

          <div className={stl.sm_box}>
            <a href="https://www.linkedin.com/in/abdulaziz-tojibayev-4350b9254">
              <button
                className={stl.sm_btn}
                style={{ background: "transparent", border: "2px solid white" }}
              >
                <FiLinkedin />
              </button>
            </a>
            <p>abdulaziz-tojibayev</p>
          </div>

          <div className={stl.sm_box}>
            <a href="https://discord.com/channels/@me">
              <button className={stl.sm_btn} style={{ background: "#586AEA" }}>
                <FaDiscord className="text-white lg:text-[85px] md:text-[65px] text-[50px]" />
              </button>
            </a>
            <p>Abdulaziz#4906</p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Contact;
