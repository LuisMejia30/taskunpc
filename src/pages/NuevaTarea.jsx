import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

const NuevaTarea = () => {
  const navigate = useNavigate();
  const { tareas, setTareas } = useTareas();

  const [form, setForm] = useState({
    titulo: "",
    materia: "",
    fecha: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nuevaTarea = {
      id: Date.now(), // id único
      ...form,
      completada: false
    };

    setTareas([...tareas, nuevaTarea]);

    navigate("/");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>➕ Nueva Tarea</h2>

      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={form.titulo}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="materia"
          placeholder="Materia"
          value={form.materia}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Guardar tarea</button>
      </form>
    </div>
  );
};

export default NuevaTarea;