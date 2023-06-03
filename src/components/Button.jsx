const Button = ({
  title,
  bg,
  handleClick,
  icon,
  width,
  flex,
  hover,
  others,
}) => {
  return (
    <>
      <button
        className={`text-white ${bg} ${width} ${flex} ${`hover:${hover}`} pt-1 pb-1 pr-5 pl-5  rounded-full font-normal text-base  ${others}  `}
        onClick={handleClick}
      >
        <section>{title}</section>
        <section className="ml-2">{icon}</section>
      </button>
    </>
  );
};

export default Button;
