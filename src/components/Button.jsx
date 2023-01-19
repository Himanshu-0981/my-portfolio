const Button = (props) => {
    const {title, bg ,handleClick }  = props;
    return (
        <>
            <button className={`text-white ${bg} pt-1 pb-1 pr-5 pl-5 mt-6 rounded font-normal text-base hover:bg-blue-500 transition-all`} onClick={handleClick}>{title}</button>
        </>
    )
}

export default Button;