"use client";
import { useTasks } from "../context/TaskContext";
import TaskCard from '../app/components/TaskCard'
function Page() {
  const { tasks } = useTasks();
  return (
    <div>
      {tasks.map((item) => (
       <TaskCard key={item._id} data={item}/>
      ))}
    </div>
  );
}

export default Page;
