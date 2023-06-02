import Button from "../components/Button";

const ContactForm = () => {
  return (
    <>
      <div>
        <form className="space-y-4 text-black mt-5 pr-6 pl-6">
          <div>
            <label className="block mb-1 text-sm font-medium ">
              Your Name*
            </label>
            <input
              type="text"
              className=" bg-white text-black border text-sm rounded-lg block w-full p-2.5 border-gray-400 "
              placeholder="Marvin Allen"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium  ">
              Your Email*
            </label>
            <input
              type="email"
              className=" bg-white text-black border text-sm rounded-lg block w-full p-2.5 border-gray-400"
              placeholder="marvinallen@gmail.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium  ">Subject*</label>
            <input
              type="text"
              className=" bg-white text-black border text-sm rounded-lg  block w-full p-2.5 border-gray-400"
              placeholder="subject"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1 text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-black rounded-lg shadow-sm border border-gray-400"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <Button title="submit" bg="bg-blue-600" hover={"bg-blue-500"} />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
