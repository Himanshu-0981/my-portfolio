const ProjectCards = ({ src, title, icon, description, visit, github }) => {
  return (
    <>
      <div className="h-[26rem]  sm:w-[18rem]  md:w-[22rem] bg-color_blue_transparent  rounded-lg">
        <div className="  p-4 text-color_white">
          <div className=" sm:h-40 md:h-44">
            <img src={src} alt="project" className=" rounded-lg" />
          </div>
          <h1 className=" mt-0 md:mt-2 text-lg ">{title}</h1>
          <p className="h-16  w-440:w-96 sm:w-full font-thin opacity-80">
            {description}
          </p>

          <button>{visit} </button>
          <button>{github}</button>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
