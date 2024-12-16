import "./App.css";
import { Dices } from "./Dices";
import { FileExplorer } from "./FileExplorer";
import { Table } from "./Table";

function App() {
  return (
    <div className="App">
      <Table />
      <Dices />
      <FileExplorer />
    </div>
  );
}

export default App;
