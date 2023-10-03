import Button from "../components/Button";
import message from "../assets/message.svg";

const ContactForm = () => {
  return (
    <>
      <div>
        <form className="space-y-4 text-black mt-5 pr-6 pl-6">
          <div>
            <label className="block mb-1 ml-1 text-sm font-medium text-color_white">
              Your Name *
            </label>
            <input
              type="text"
              className="bg-color_blue_transparent text-color_white  text-sm rounded-lg block w-full p-2.5  "
              placeholder="Marvin Allen"
              required
            />
          </div>
          <div>
            <label className="block mb-1  ml-1 text-sm font-medium text-color_white  ">
              Your Email *
            </label>
            <input
              type="email"
              className=" bg-color_blue_transparent text-color_white text-sm rounded-lg block w-full p-2.5 border-gray-400"
              placeholder="marvinallen@gmail.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1  ml-1 text-sm font-medium text-color_white  ">
              Subject *
            </label>
            <input
              type="text"
              className=" bg-color_blue_transparent text-color_white text-sm rounded-lg  block w-full p-2.5 border-gray-400"
              placeholder="subject"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1  ml-1 text-sm font-medium text-color_white">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm bg-color_blue_transparent text-color_white rounded-lg shadow-sm  border-gray-400"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <Button
            svg={message}
            title="SUBMIT"
            bg="bg-color_green"
            size={"font-bold"}
            others={"text-color_dark_blue hover:scale-110 duration-200 "}
          />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
