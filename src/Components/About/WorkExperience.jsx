function WorkExperience() {
  const stl = {
    section:
      "relative w-full h-fit flex flex-col items-center justify-center text-white bg-[#020617]/20  py-[15%] md:py-[8%] px-[4%]",
    title: "text-5xl font-bold mb-16 md:text-6xl lg:text-7xl text-center",
    wrapper:
      "w-full flex flex-col justify-center items-center md:w-[85%] lg:w-3/4",
    card: "relative w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-[0_0_25px_#1a3048] transition duration-500",
    line: "absolute top-0 left-0 w-[6px] h-full bg-primary rounded-l-2xl",
    header:
      "flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8",
    role: "text-3xl md:text-4xl font-extrabold text-primary tracking-tight",
    company: "text-lg md:text-2xl text-gray-300 font-semibold mt-1",
    date: "text-sm md:text-base text-primary mt-2 md:mt-0",
    desc: "text-base md:text-xl leading-8 md:leading-[42px] tracking-[0.3px] text-gray-200 text-justify mt-4 md:mt-6",
  };

  return (
    <section className={stl.section} id="experience">
      <h1 className={stl.title}>Work Experience</h1>

      <div className={stl.wrapper}>
        <div
          className={stl.card}
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <span className={stl.line}></span>

          <div className={stl.header}>
            <div>
              <h2 className={stl.role}>Front End Developer</h2>
              <p className={stl.company}>Zenchi Softwares | India</p>
            </div>
            <p className={stl.date}>Apr 2023 – Jun 2023</p>
          </div>

          <p className={stl.desc}>
            I worked on real-world web projects during my internship at{" "}
            <span className="text-primary font-semibold">Zenchi Softwares</span>
            , where I strengthened my front-end development foundation by
            enhancing existing codebases and building new features. The
            experience challenged me to dive deep into{" "}
            <span className="text-primary">React, Webpack, and jQuery</span>,
            helping me understand how scalable front-end architectures come
            together in production.
            <br />
            <br />
            Beyond coding, I learned how to analyze and improve existing
            solutions, collaborate with senior developers, and translate design
            concepts into dynamic, responsive interfaces that deliver real user
            impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
