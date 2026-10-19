import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/head/Task-Form";
import Section from "./components/Section/Section";
import { tickMarkImg } from "./assets/images";

function App() {
  const [taskArray, setTaskArray] = useState(() => {
    const savedState = localStorage.getItem("tasks");
    return savedState ? JSON.parse(savedState) : [];
  });

  const [activeCard, setActiveCard] = useState();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  }, [taskArray]);

  const handleDelete = (taskIndex) => {
    setTaskArray(taskArray.filter((obj, index) => index !== taskIndex));
  };

  const onDrop = (status, position) => {
    console.log(
      `${activeCard} is going to place at ${status} in ${position} postion`,
    );
    if (activeCard == null || activeCard == undefined) return;
    const taskToMove = taskArray[activeCard];
    const updatedTasks = taskArray.filter(
      (task, index) => index !== activeCard,
    );
    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setTaskArray(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Jira Board</h1>

      <TaskForm setTaskArray={setTaskArray} />
      <main className="app_main">
        <Section
          title="Ready for Development"
          taskArray={taskArray}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
          status="Ready for Development"
        />

        <Section
          title="In Progress"
          taskArray={taskArray}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
          status="In Progress"
        />

        <Section
          title="Ready for test"
          taskArray={taskArray}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
          status="Ready for test"
        />

        <Section
          title="Closed"
          taskArray={taskArray}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
          img={tickMarkImg}
          status="Closed"
        />
      </main>
    </div>
  );
}

export default App;
