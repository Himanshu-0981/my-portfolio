import { NavHashLink } from "react-router-hash-link";

const Button = ({
  title,
  bg,
  handleClick,
  icon,
  width,
  flex,
  svg,
  others,
  size,
  navigate,
}) => {
  return (
    <>
      <NavHashLink to={navigate || "#"} smooth>
        <button
          className={` flex  items-center text-white ${bg} ${width} ${flex} pt-2 pb-2 pr-5 pl-5  rounded-[4px] text-base  ${others}  `}
          onClick={handleClick}
        >
          <section className={`${size}`}>{title}</section>
          <section className="ml-2">{icon}</section>
          <img src={svg} className="text-color_white" alt="" />
        </button>
      </NavHashLink>
    </>
  );
};

export default Button;
