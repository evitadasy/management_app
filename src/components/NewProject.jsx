import Input from "./Input";
import { useRef, useContext } from "react";
import Modal from "./Modal";
import { ProjectsContext } from "../store/projects-context";
export default function NewProject() {
  const { addProject, setNoSelection } = useContext(ProjectsContext);

  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modal = useRef(null);

  function onAddProject() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    addProject({
      title: enteredTitle,
      description: enteredDescription !== "" ? enteredDescription : undefined,
      date: enteredDate !== "" ? enteredDate : undefined,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value
        </p>

        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={setNoSelection}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={onAddProject}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="title" type="text" id="title" />
          <Input ref={description} label="description" id="description" />
          <Input ref={date} label="date" type="date" id="date" />
        </div>
      </div>
    </>
  );
}
