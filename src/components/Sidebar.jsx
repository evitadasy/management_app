import { ProjectsContext } from "../store/projects-context";
import React, { useContext } from "react";
import Button from "./Button";

export default function Sidebar() {
  const { projects, setSelection } = useContext(ProjectsContext);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <Button>+ Add Project</Button>
      <ul className="mt-8">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <li key={index}>
              <button
                onClick={() => setSelection(index)}
                className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
              >
                {project.title}
              </button>
            </li>
          ))}
      </ul>
    </aside>
  );
}
