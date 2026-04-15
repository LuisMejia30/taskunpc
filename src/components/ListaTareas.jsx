import { tareasIniciales } from "../data/tareas";
import TareaCard from "./TareaCard";

const ListaTareas = () => {
  return (
    <div>
      <h2>Lista de Tareas</h2>

      {tareasIniciales.map((tarea) => (
        <TareaCard key={tarea.id} tarea={tarea} />
      ))}

    </div>
  );
};

export default ListaTareas;