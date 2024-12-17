import "./App.css";
import { Devider } from "./Devider_";
import { Dices } from "./Dices";
import { FileExplorer } from "./FileExplorer";
import { LikeBtn } from "./LikeBtn";
import { Stars } from "./Stars";
import { Table } from "./Table";

function App() {
  return (
    <div className="App">
      <Table />
      <Devider />
      <Dices />
      <Devider />
      <FileExplorer />
      <Devider />
      <LikeBtn />
      <Devider />
      <Stars />
      <Devider />
    </div>
  );
}

export default App;
