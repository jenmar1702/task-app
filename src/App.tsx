import "./App.scss";
import "@digi/arbetsformedlingen/dist/digi-arbetsformedlingen/digi-arbetsformedlingen.css";
import { useEffect, useState } from "react";
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
  DigiTypographyPreamble,
} from "@digi/arbetsformedlingen-react";
import {
  LayoutBlockVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import Layout from "./components/Layout";

interface Task {
  text: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    ) as Task[];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Layout>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afMarginTop>
        <DigiTypography afVariation={TypographyVariation.SMALL}>
          <h1>Checklista</h1>
          <DigiTypographyPreamble>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </DigiTypographyPreamble>
        </DigiTypography>

        <DigiLayoutContainer afVerticalPadding afNoGutter>
          <TaskForm tasks={tasks} setTasks={setTasks} />
          <TasksList tasks={tasks} setTasks={setTasks} />
        </DigiLayoutContainer>
      </DigiLayoutBlock>
    </Layout>
  );
}
