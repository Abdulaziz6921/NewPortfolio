import React from "react";
import Skill from "./Skill";

function About() {
  let stl = {
    size: "relative w-full h-fit flex flex-col items-center justify-center pt-[70px] px-[3%] md:mt-0 xl:w-full xxl-[1540px] text-white bg-black/95 md:py-[8%] ",

    about:
      "relative w-full h-fit flex flex-col justify-center items-center md:w-[95%] lg:w-3/4 py-[25%] md:py-[4%]",

    title: "text-5xl font-bold mb-16 md:text-6xl lg:text-7xl",

    text: "text-[5cqi] font-normal leading-10 tracking-[0px] text-justify px-1 md:px-3 md:text-justify md:text-2xl md:font-semibold md:leading-[45px] md:tracking-[0.1px] lg:px-[14%]",

    span: "text-secondary",

    skill:
      "bg-transparent relative w-full h-fit flex flex-col justify-between items-center md:w-[70%] py-[15%] md:py-[5%] rounded-[20px]",

    wrapper:
      "w-full h-fit flex justify-center items-center mt-6 md:mt-10 lg:mt-[60px]",

    tag_left: "hidden lg:block font-[200] text-[500px] absolute left-0",

    tag_right: "hidden lg:block font-[200] text-[500px] absolute right-0",
  };
  return (
    <>
      <div className={stl.size} id="about">
        <a
          href="#home"
          className={stl.tag_left}
          data-aos="fade-down-right"
          data-aos-duration="300000"
          data-aos-delay="1500"
        >
          &#123;
        </a>
        <a
          href="#skill"
          className={stl.tag_right}
          data-aos="fade-up-left"
          data-aos-duration="300000"
          data-aos-delay="1500"
        >
          &#125;
        </a>

        <div className={stl.about}>
          <h1
            className={stl.title}
            data-aos="zoom-in"
            data-aos-duration="100000"
            data-aos-delay="200"
          >
            About me
          </h1>
          <p
            className={stl.text}
            data-aos="zoom-in"
            data-aos-duration="100000"
            data-aos-delay="400"
          >
            My full name is <span className={stl.span}>Abdulaziz Tojiboev</span>
            . I am a junior <span className={stl.span}>web developer</span> with
            a specialization in
            <span className={stl.span}> front-end development</span>. I have{" "}
            <span className={stl.span}>completed a web development course</span>{" "}
            at the "Algorithm" IT center, where I got all the theoretical
            knowledge and some practice. Besides, I have{" "}
            <span className={stl.span}>done self-study</span> and{" "}
            <span className={stl.span}>completed some online courses</span> on
            platforms like SoloLearn, W3Schools, and JavaScript.info to get
            better acquainted with all necessary web technologies and techniques
            for front-end development. So far, I have acquired{" "}
            <span className={stl.span}>skills</span> in{" "}
            <span className={stl.span}>
              Javascript, ReactJs, CSS3, SASS, Tailwind, Bootstrap
            </span>{" "}
            and <span className={stl.span}>HTML5</span>. I speak{" "}
            <span className={stl.span}>English, Uzbek, Russian</span> and{" "}
            <span className={stl.span}>some Korean</span> languages.
          </p>
        </div>
      </div>

      <div
        className={stl.size}
        id="skill"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(2, 6, 23, 0.2))",
          padding: "0",
        }}
      >
        <a
          href="#about"
          className={stl.tag_left}
          data-aos="fade-down-right"
          data-aos-duration="300000"
          data-aos-delay="1500"
        >
          &#123;
        </a>
        <a
          href="#project"
          className={stl.tag_right}
          data-aos="fade-up-left"
          data-aos-duration="300000"
          data-aos-delay="1500"
        >
          &#125;
        </a>

        <div className={stl.skill}>
          <h1
            className={stl.title}
            data-aos="zoom-in"
            data-aos-duration="100000"
            data-aos-delay="300"
          >
            Skills:
          </h1>

          <div className={stl.wrapper}>
            <Skill
              imgSrc="./Images/html.png"
              altText="HTML"
              proficiency={100}
              delay="300"
            />
          </div>

          <div className={stl.wrapper}>
            <Skill
              imgSrc="./Images/CSS3.png"
              altText="CSS"
              proficiency={90}
              delay="100"
            />
            <Skill
              imgSrc="./Images/Sass.png"
              altText="SASS"
              proficiency={80}
              delay="400"
            />
          </div>

          <div className={stl.wrapper}>
            <Skill
              imgSrc="./Images/bootstrap.png"
              altText="bootstrap"
              proficiency={80}
              delay="200"
            />
            <Skill
              imgSrc="./Images/tailwind.png"
              altText="tailwind"
              proficiency={85}
              delay="400"
            />

            <Skill
              imgSrc="./Images/react.png"
              altText="react"
              proficiency={70}
              delay="600"
            />

            <Skill
              imgSrc="./Images/js.png"
              altText="javascript"
              proficiency={80}
              delay="800"
            />
          </div>

          <div className={stl.wrapper}>
            <Skill
              imgSrc="./Images/uzbek.png"
              altText="uzbek"
              proficiency={100}
              delay="400"
            />
            <Skill
              imgSrc="./Images/us.png"
              altText="english"
              proficiency={80}
              delay="600"
            />
            <Skill
              imgSrc="./Images/russian.png"
              altText="russian"
              proficiency={70}
              delay="800"
            />
            <Skill
              imgSrc="./Images/korean.png"
              altText="korean"
              proficiency={40}
              delay="1000"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
