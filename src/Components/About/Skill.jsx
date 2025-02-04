function Skill({ imgSrc, altText, proficiency, delay }) {
  return (
    <div
      className="mx-1 w-1/4 h-fit flex flex-col justify-between items-center lg:w-1/3"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay={delay}
    >
      <img
        src={imgSrc}
        alt={altText}
        className="w-[70px] h-[90px] object-contain md:w-[100px] md:h-[120px] lg:w-40 lg:h-40"
        loading="lazy"
      />
      <div className="mt-5 w-full h-[12px] md:mt-7 md:w-[120px] lg:w-40 shadow-lg">
        <div className="relative w-full h-[10px] bg-white rounded-2xl">
          <div
            className="absolute top-0 left-0 rounded-2xl h-full bg-secondary"
            style={{ width: `${proficiency}%` }}
          >
            <span className="absolute mb-2 -right-4 bottom-full bg-black text-white rounded-sm font-semibold text-[10.5px] py-[1px] px-[6px] md:text-[13px] md:px-2 md:rounded-[3px]">
              {proficiency}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skill;
