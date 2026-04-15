import { useParams, useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

const DetalleTarea = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tareas, setTareas } = useTareas();

  
  const tarea = tareas.find((t) => t.id === Number(id));

  
  if (!tarea) {
    return <p>Tarea no encontrada</p>;
  }

  
  const eliminarTarea = () => {
    const nuevasTareas = tareas.filter((t) => t.id !== tarea.id);
    setTareas(nuevasTareas);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Detalle de Tarea</h2>

      <h3>{tarea.titulo}</h3>
      <p><strong>Materia:</strong> {tarea.materia}</p>
      <p><strong>Fecha:</strong> {tarea.fecha}</p>
      <p>
        <strong>Estado:</strong>{" "}
        {tarea.completada ? "Completada" : "Pendiente"}
      </p>

      <br />

      
      <button onClick={eliminarTarea}>
        Eliminar tarea
      </button>
    </div>
  );
};

export default DetalleTarea;