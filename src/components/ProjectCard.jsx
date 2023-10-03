import "../../styles/CustomShadow.css";

const ProjectCards = ({ src, title, icon, description, visit, github }) => {
  return (
    <>
      <div className="h-[26rem] w-[18rem] md:w-[22rem] lg:[30rem] bg-[#171f38]  rounded-lg">
        <div className="  p-4 text-white">
          <div className=" h-40 sm:h-44">
            <img src={src ? src : ""} alt="" className=" rounded-lg" />
          </div>
          <h1 className="mt-2 text-2xl ">{title}</h1>
          <p className="h-16 font-thin opacity-80">{description}</p>

          <button>{visit} </button>
          <button>{github}</button>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
