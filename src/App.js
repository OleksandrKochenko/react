import { Divider } from "./Divider";
import { Dices } from "./Dices";
import { FileExplorer } from "./FileExplorer";
import { LikeBtn } from "./LikeBtn";
import { Stars } from "./Stars";
import { Table } from "./Table";
import { Header } from "./Header";
import { TrafficLite } from "./TrafficLite";
import { DigitalClock } from "./DigitalClock";
import { TicTacToe } from "./TicTacToe";
import { Pattern } from "./Pattern";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Divider />
      <Dices />
      <Divider />
      <FileExplorer />
      <Divider />
      <LikeBtn />
      <Divider />
      <Stars />
      <Divider />
      <TrafficLite />
      <Divider />
      <DigitalClock />
      <Divider />
      <TicTacToe />
      <Divider />
      <Pattern />
      <Divider />
    </div>
  );
}

export default App;
