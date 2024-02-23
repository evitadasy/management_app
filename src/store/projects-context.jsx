import { createContext, useReducer } from "react";

export const ProjectsContext = createContext({
  projects: [],
  add: false,
  index: -1,
  addP: () => {},
  deleteP: () => {},
  addT: () => {},
  deleteT: () => {},
  nothingToSelect: () => {},
  setAdd: () => {},
  setSelect: () => {},
});

const initialState = {
  projects: [],
  add: false,
  index: -1,
};

function projectsReducer(state, action) {
  switch (action.type) {
    case "ADD_PROJECT":
      const newProject = {
        ...action.payload,
        tasks: [],
      };
      return {
        ...state,
        projects: [...state.projects, newProject],
      };

    case "DELETE_PROJECT":
      const updatedProjects = state.projects.filter(
        (_, index) => index !== action.payload
      );

      return {
        ...state,
        projects: updatedProjects,
        add: false,
        index: -1,
      };

    case "ADD_TASK":
      return {
        ...state,
        projects: state.projects.map((project, index) => {
          if (index === action.payload.id) {
            return {
              ...project,
              tasks: [...project.tasks, action.payload.tasksData],
            };
          }
          return project;
        }),
      };

    case "DELETE_TASK":
      return {
        ...state,
        projects: state.projects.map((project, index) => {
          if (index === action.payload.id) {
            return {
              ...project,
              tasks: action.payload.updatedTasks,
            };
          }
          return project;
        }),
      };

    case "NO_SELECTION":
      return {
        ...state,
        add: false,
        index: -1,
      };

    case "SET_ADD":
      return {
        ...state,
        add: true,
        index: -1,
      };

    case "SET_SELECT":
      return {
        ...state,
        add: false,
        index: action.payload,
      };
  }

  return state;
}

export default function ProjectsContextProvider({ children }) {
  const [projectsState, projectsDispatcher] = useReducer(
    projectsReducer,
    initialState
  );

  const ctxValue = {
    projects: projectsState.projects,
    add: projectsState.add,
    index: projectsState.index,
    addProject: (projectData) =>
      projectsDispatcher({ type: "ADD_PROJECT", payload: projectData }),
    deleteProject: (id) =>
      projectsDispatcher({ type: "DELETE_PROJECT", payload: id }),
    addTask: (id, tasksData) =>
      projectsDispatcher({ type: "ADD_TASK", payload: { id, tasksData } }),
    clearTask: (id, updatedTasks) =>
      projectsDispatcher({
        type: "DELETE_TASK",
        payload: { id, updatedTasks },
      }),
    setNoSelection: () => projectsDispatcher({ type: "NO_SELECTION" }),
    setAdd: () => projectsDispatcher({ type: "SET_ADD" }),
    setSelection: (selectedId) =>
      projectsDispatcher({ type: "SET_SELECT", payload: selectedId }),
  };

  return (
    <ProjectsContext.Provider value={ctxValue}>
      {children}
    </ProjectsContext.Provider>
  );
}
