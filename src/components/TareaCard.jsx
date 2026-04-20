import { useTareas } from "../context/TareasContext";

const TareaCard = ({ tarea }) => {
  const { toggleTarea } = useTareas();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "10px",
        opacity: tarea.completada ? 0.6 : 1,
        textDecoration: tarea.completada ? "line-through" : "none",
        transition: "0.3s"
      }}
    >
      <h3>{tarea.titulo}</h3>
      <p><strong>Materia:</strong> {tarea.materia}</p>
      <p><strong>Fecha:</strong> {tarea.fecha}</p>

      <p>
        <strong>Estado:</strong>{" "}
        {tarea.completada ? "✅ Completada" : "⏳ Pendiente"}
      </p>

     
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => toggleTarea(tarea.id)}
      />
      <label style={{ marginLeft: "8px" }}>
        Marcar como completada
      </label>
    </div>
  );
};

export default TareaCard;