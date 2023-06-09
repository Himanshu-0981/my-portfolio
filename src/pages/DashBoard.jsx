// ! Not a good way to create a dashboard page without authentication
// ! but i'm doing this for now only.

import React, { useState, useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import Button from "../components/Button";
import TopHeading from "../components/TopHeading";

export const DashBoard = () => {
  const [toggle, setToggle] = useState(false);
  const [projectData, setProjectData] = useState({
    title: new String(""),
    tags: new String(""),
    description: new String(""),
  });
  const handleToggle = () => setToggle(!toggle);
  const URL = "http://localhost:5000/projects";

  const sendDataToBackend = async () => {
    const data = { ...projectData };
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const savedProject = await response.json();
      console.log("Project added", savedProject);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch("http://localhost:5000/projects");
      const res = await req.json();
      console.log(res);
    };
    fetchData();
  }, []);

  const handleSubmit = (event) => event.preventDefault();
  const handleAdd = () => sendDataToBackend();

  return (
    <>
      <TopHeading
        title={"PROJECT DASHBOARD"}
        styleClass={
          "p-4 bg-blue-500 text-white underline-none no-underline mt-0"
        }
      />

      <section className="flex justify-center items-center text-lg text-white bg-slate-700 p-2 ">
        <div className="mr-3 ">ADD PROJECT</div>
        <div className="cursor-pointer" onClick={handleToggle}>
          {<AiOutlineInfoCircle />}
        </div>
      </section>

      <div className={` text-sm p-2  ${toggle ? "block" : "hidden"}`}>
        <p className=""> 🔴 Not an ideal way to create a dashboard </p>
      </div>

      <form
        className="space-y-4 text-black mt-5 pr-6 pl-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block mb-1 text-sm font-medium ">Title*</label>
          <input
            onChange={(e) =>
              setProjectData({ ...projectData, title: e.target.value })
            }
            value={projectData.title}
            type="text"
            className=" bg-white text-black border text-sm rounded-lg block w-full p-2.5 border-gray-400 "
            placeholder="Project name"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium ">Tags*</label>
          <input
            onChange={(e) =>
              setProjectData({ ...projectData, tags: e.target.value })
            }
            value={projectData.tags}
            type="text"
            className=" bg-white text-black border text-sm rounded-lg block w-full p-2.5 border-gray-400 "
            placeholder="javascript, react js, node js, etc "
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block mb-1 text-sm font-medium">Description*</label>
          <textarea
            onChange={(e) =>
              setProjectData({ ...projectData, description: e.target.value })
            }
            value={projectData.description}
            id="message"
            rows="6"
            className="block p-2.5 w-full text-sm text-black rounded-lg shadow-sm border border-gray-400"
            placeholder="Project Description"
          ></textarea>
        </div>
        <div className="text-sm">
          <input type="file" name="" id="" />
        </div>
        <Button
          title={"Add"}
          bg={"bg-blue-500"}
          width={"w-24"}
          handleClick={handleAdd}
        />
      </form>
    </>
  );
};
