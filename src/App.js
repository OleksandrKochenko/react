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
import { Stopwatch } from "./Stopwatch";
import { TransferList } from "./TransferList";
import { FifteenPuzzle } from "./FifteenPuzzle";
import { ProgressBar } from "./ProgressBar";

import "./App.css";
import { BracketsValidator } from "./BracketsValidator";
import { PalindromValidator } from "./PalindromValidator";
import { DataMerging } from "./DataMerging";

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
      <Stopwatch />
      <Divider />
      <TransferList />
      <Divider />
      <FifteenPuzzle />
      <Divider />
      <ProgressBar />
      <Divider />
      <BracketsValidator />
      <Divider />
      <PalindromValidator />
      <Divider />
      <DataMerging />
      <Divider />
    </div>
  );
}

export default App;
