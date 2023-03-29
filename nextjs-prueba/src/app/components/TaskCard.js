import { useRouter } from "next/navigation";
import { useTasks } from "../../context/TaskContext";

const TaskCard = (props) => {
  const { _id, title, description } = props.data;
  const router = useRouter();
  const { deleteTask } = useTasks();
  return (
    <div>
      {" "}
      <div
        style={{ background: "#202020", color: "white" }}
        onClick={() => router.push(`/edit/${_id}`)}
      >
        <h1>{title}</h1>

        <p>{description}</p>
      </div>
      <button onClick={() => {const accept = window.confirm('estas seguro?'); if (accept); deleteTask(_id)}}>Delete</button>
    </div>
  );
};

export default TaskCard;
