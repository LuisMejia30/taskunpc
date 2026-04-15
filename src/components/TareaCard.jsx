const TareaCard = ({ tarea }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      marginBottom: "10px",
      backgroundColor: tarea.completada ? "#d4edda" : "#f8d7da"
    }}>
      
      <h3>{tarea.titulo}</h3>
      <p><strong>Materia:</strong> {tarea.materia}</p>
      <p><strong>Fecha:</strong> {tarea.fecha}</p>
      <p>
        <strong>Estado:</strong>{" "}
        {tarea.completada ? "Completada" : "Pendiente"}
      </p>

    </div>
  );
};

export default TareaCard;