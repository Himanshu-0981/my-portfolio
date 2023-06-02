const Button = ({ title, bg, handleClick, icon, width, flex, hover }) => {
  return (
    <>
      <button
        className={`text-white ${bg} ${width} ${flex} ${
          "hover:" + hover
        } pt-1 pb-1 pr-5 pl-5 mt-6 mr-1 ml-1 rounded font-normal text-base  transition-all`}
        onClick={handleClick}
      >
        {title}
        {icon}
      </button>
    </>
  );
};

export default Button;
