import { ProjectsContext } from "../store/projects-context";
import { formatDate } from "../utils";
import { useContext } from "react";
import Tasks from "./Tasks";

export default function ProjectSelected() {
  const { projects, index, deleteProject } = useContext(ProjectsContext);
  const project = projects[index];

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project?.title}
          </h1>
          <button
            onClick={() => deleteProject(index)}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formatDate(project?.date)}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project?.description}
        </p>
      </header>
      <Tasks />
    </div>
  );
}
