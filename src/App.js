import { Devider } from "./Devider_";
import { Dices } from "./Dices";
import { FileExplorer } from "./FileExplorer";
import { LikeBtn } from "./LikeBtn";
import { Stars } from "./Stars";
import { Table } from "./Table";
import { Header } from "./Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
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
