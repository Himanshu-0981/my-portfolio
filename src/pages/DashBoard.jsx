// ! Not a good way to create a dashboard page without authentication
// ! but i'm doing this for now only.

import Button from "../components/Button";
import TopHeading from "../components/TopHeading";

export const DashBoard = () => {
  return (
    <>
      <TopHeading
        title={"PROJECT DASHBOARD"}
        styleClass={
          "p-6 bg-blue-500 text-white underline-none no-underline mt-0"
        }
      />
      <form className="space-y-4 text-black mt-5 pr-6 pl-6">
        <div>
          <label className="block mb-1 text-sm font-medium ">Title*</label>
          <input
            type="text"
            className=" bg-white text-black border text-sm rounded-lg block w-full p-2.5 border-gray-400 "
            placeholder="Project name"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block mb-1 text-sm font-medium">Description*</label>
          <textarea
            id="message"
            rows="6"
            className="block p-2.5 w-full text-sm text-black rounded-lg shadow-sm border border-gray-400"
            placeholder="Project Description"
          ></textarea>
        </div>
        <div className="text-sm">
          <input type="file" name="" id="" />
        </div>
        <Button title={"Add"} bg={"bg-blue-500"} width={"w-24"} />
      </form>
    </>
  );
};
