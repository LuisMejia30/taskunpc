import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";

function App() {
  return (
    <div>
      <Header pendientes={3} />
      <ListaTareas />
    </div>
  );
}

export default App;