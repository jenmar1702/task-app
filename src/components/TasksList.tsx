import {
  DigiButton,
  DigiFormCheckbox,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { Task } from "../types/todo";
import {
  ButtonVariation,
  FormCheckboxVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";

export default function TasksList({
  tasks,
  setTasks,
}: {
  tasks: Task[];
  setTasks: (task: Task[]) => void;
}) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h2 id="list-heading">Mina uppgifter:</h2>
        <p>Du har slutfört {completedTasks} uppgifter</p>
      </DigiTypography>
      <ul role="list" aria-labelledby="list-heading" className="task-ul">
        {tasks.map((task, index) => {
          return (
            <li key={index} className="checklist-task">
              <DigiFormCheckbox
                afId={`task-${index}`}
                afLabel={task.text}
                afVariation={FormCheckboxVariation.PRIMARY}
                afChecked={task.completed}
                onAfOnChange={() => toggleTaskCompletion(index)}
              />
              <DigiButton
                onAfOnClick={() => removeTask(index)}
                afVariation={ButtonVariation.FUNCTION}
              >
                Ta bort
              </DigiButton>
            </li>
          );
        })}
      </ul>
    </>
  );
}
