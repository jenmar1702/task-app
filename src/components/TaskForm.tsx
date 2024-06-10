import {
  FormInputVariation,
  FormInputType,
  FormInputMode,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutContainer,
  DigiFormInput,
  DigiButton,
} from "@digi/arbetsformedlingen-react";
import { useState } from "react";
import { Task } from "../types/todo";

export default function TaskForm({
  tasks,
  setTasks,
}: {
  tasks: Task[];
  setTasks: (task: Task[]) => void;
}) {
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  return (
    <DigiLayoutContainer afVerticalPadding afNoGutter>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <DigiFormInput
          afId="new-task-input"
          afLabel="Vad behöver göras?"
          afVariation={FormInputVariation.MEDIUM}
          afType={FormInputType.TEXT}
          afInputmode={FormInputMode.TEXT}
          afRequired
          afRequiredText="obligatorisk"
          afValue={newTask}
          onAfOnChange={(e) => setNewTask(e.target.value as any)}
        ></DigiFormInput>
        <DigiButton afType="submit">Skapa uppgift</DigiButton>
      </form>
    </DigiLayoutContainer>
  );
}
