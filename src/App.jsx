import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSelected from "./components/ProjectSelected";
import { ProjectsContext } from "./store/projects-context";
import { useContext } from "react";

function App() {
  const { add, index } = useContext(ProjectsContext);

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      {index < 0 && !add && <NoProjectSelected />}
      {index > -1 && !add && <ProjectSelected />}
      {add && <NewProject />}
    </main>
  );
}

export default App;
