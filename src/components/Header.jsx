const Header = ({ pendientes }) => {
  return (
    <header style={{
      backgroundColor: "#282c34",
      color: "white",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "20px",
      textAlign: "center"
    }}>
      <h1>Gestor de Tareas</h1>
      <p>Tareas pendientes: {pendientes}</p>
    </header>
  );
};

export default Header;