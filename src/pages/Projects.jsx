import { FaEye, FaCode } from "react-icons/fa";

import TopHeading from "../components/TopHeading";
import ProjectCards from "../components/ProjectCard";
import Button from "../components/Button";

function Projects() {
  return (
    <div className="bg-[#0e1630]">
      <TopHeading
        title="CHECKOUT MY PROJECTS"
        textColor="text-white"
        styleClass="pt-5"
      />

      <div className="flex justify-center flex-wrap gap-4 mt-10 pb-20">
        <section className="hover:scale-105 duration-300">
          <ProjectCards
            title="Full Stack Twitter Clone"
            src="https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Ftwitter-clone.jpg&w=384&q=75"
            description="Build Full Stack Twitter clone using latest tech stack"
            visit={
              <Button
                title="Preview"
                bg="bg-[#808dad68] text-white mr-1 "
                others="hover:bg-white hover:text-black mt-10"
                icon={<FaEye />}
              />
            }
            github={
              <Button
                title="Github"
                bg="bg-[#808dad68] text-white ml-1 "
                others="hover:bg-white hover:text-black mt-10"
                icon={<FaCode />}
              />
            }
          />
        </section>
        <section className="hover:scale-105 duration-300">
          <ProjectCards
            title="Java mastery course"
            src="https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Fjava-master.webp&w=384&q=75"
            description="Full java course beigner to mastery in just two months"
            visit={
              <Button
                title="Preview"
                bg="bg-[#808dad68] text-white mr-1 "
                others="hover:bg-white hover:text-black mt-10"
                icon={<FaEye />}
              />
            }
            github={
              <Button
                title="Github"
                bg="bg-[#808dad68] text-white ml-1 "
                others="hover:bg-white hover:text-black mt-10"
                icon={<FaCode />}
              />
            }
          />
        </section>
        <section className="hover:scale-105 duration-300">
          <ProjectCards
            title="Java DSA course"
            src="https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Fdsa.webp&w=384&q=75"
            description="Complete Java DSA with practice set just for rs 1000/month link in description"
            visit={
              <Button
                title="Preview"
                bg="bg-[#808dad68] text-white mr-1 "
                others="hover:bg-white hover:text-black mt-10"
                icon={<FaEye />}
              />
            }
            github={
              <Button
                title="Github"
                bg="bg-[#808dad68] text-white ml-1 "
                others="hover:bg-white hover:text-black mt-10"
                icon={<FaCode />}
              />
            }
          />
        </section>
        <section className="hover:scale-105 duration-300">
          <ProjectCards
            title="Full Stack Twitter Clone"
            src="https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Ftwitter-clone.jpg&w=384&q=75"
            description="Build Full Stack Twitter clone using latest tech stack"
            visit={
              <Button
                title="Preview"
                bg="bg-[#808dad68] text-white mr-1 "
                others="hover:bg-white hover:text-black mt-10"
                icon={<FaEye />}
              />
            }
            github={
              <Button
                title="Github"
                bg="bg-[#808dad68] text-white ml-1 "
                others="hover:bg-white hover:text-black mt-10"
                icon={<FaCode />}
              />
            }
          />
        </section>
        <section className="hover:scale-105 duration-300">
          <ProjectCards
            title="Java mastery course"
            src="https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Fjava-master.webp&w=384&q=75"
            description="Full java course beigner to mastery in just two months"
            visit={
              <Button
                title="Preview"
                bg="bg-[#808dad68] text-white mr-1 "
                others="hover:bg-white hover:text-black mt-10"
                icon={<FaEye />}
              />
            }
            github={
              <Button
                title="Github"
                bg="bg-[#808dad68] text-white ml-1 "
                others="hover:bg-white hover:text-black mt-10"
                icon={<FaCode />}
              />
            }
          />
        </section>
        <section className="hover:scale-105 duration-300">
          <ProjectCards
            title="Java DSA course"
            src="https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Fdsa.webp&w=384&q=75"
            description="Complete Java DSA with practice set just for rs 1000/month link in description"
            visit={
              <Button
                title="Preview"
                bg="bg-[#808dad68] text-white mr-1 "
                others="hover:bg-white hover:text-black mt-10"
                icon={<FaEye />}
              />
            }
            github={
              <Button
                title="Github"
                bg="bg-[#808dad68] text-white ml-1 "
                others="hover:bg-white hover:text-black mt-10"
                icon={<FaCode />}
              />
            }
          />
        </section>
      </div>
    </div>
  );
}

export default Projects;
