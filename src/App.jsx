import { useState } from "react";
import { useTareas } from "./context/TareasContext";
import TareaCard from "./components/TareaCard";

const App = () => {
  const { tareas } = useTareas();

  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "pendientes") return !tarea.completada;
    if (filtro === "completadas") return tarea.completada;
    return true;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mis Tareas</h2>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
        <button onClick={() => setFiltro("completadas")}>Completadas</button>
      </div>

      {tareasFiltradas.map((tarea) => (
        <TareaCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
};

export default App;