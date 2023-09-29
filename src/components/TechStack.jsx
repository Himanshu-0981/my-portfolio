const TechStack = ({ title, icon }) => {
  return (
    <main>
      <section className="flex justify-center space-x-14 mt-10 ">
        <section className="flex flex-col items-center text-white text-[0px] md:text-sm ">
          <img
            src={icon}
            alt="JavaScript Icon"
            className=" transition-all w-8 h-8 p-1 xs:w-12 xs:h-12 xs:p-2 sm:w-12 sm:h-12 sm:p-2 md:w-14 md:h-14 md:m-2 md:p-3 bg-[#e0e0e0] rounded-lg hover:border-4 hover:border-blue-500"
          />
          <p className="text-[#142a36]">{title}</p>
        </section>
      </section>
    </main>
  );
};

export default TechStack;
