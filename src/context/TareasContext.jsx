import { createContext, useContext, useState, useEffect } from "react";
import { tareasIniciales } from "../data/tareas";

const TareasContext = createContext();

export const TareasProvider = ({ children }) => {

  
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas
      ? JSON.parse(tareasGuardadas)
      : tareasIniciales;
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  
  const toggleTarea = (id) => {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    );

    setTareas(nuevasTareas);
  };

 
  const agregarTarea = (tarea) => {
    const nueva = {
      id: Date.now(),
      ...tarea,
      completada: false
    };

    setTareas([...tareas, nueva]);
  };

  return (
    <TareasContext.Provider
      value={{ tareas, setTareas, toggleTarea, agregarTarea }}
    >
      {children}
    </TareasContext.Provider>
  );
};


export const useTareas = () => {
  const context = useContext(TareasContext);

  if (!context) {
    throw new Error("useTareas debe usarse dentro de TareasProvider");
  }

  return context;
};