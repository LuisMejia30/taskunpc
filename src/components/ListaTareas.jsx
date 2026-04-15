import { useTareas } from "../context/TareasContext";
import TareaCard from "./TareaCard";

const ListaTareas = () => {
  const { tareas } = useTareas();

  return (
    <div>
      {tareas.map((tarea) => (
        <TareaCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
};

export default ListaTareas;