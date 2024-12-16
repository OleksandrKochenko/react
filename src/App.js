import "./App.css";
import { Dices } from "./Dices";
import { FileExplorer } from "./FileExplorer";
import { LikeBtn } from "./LikeBtn";
import { Table } from "./Table";

function App() {
  return (
    <div className="App">
      <Table />
      <Dices />
      <FileExplorer />
      <LikeBtn />
    </div>
  );
}

export default App;
