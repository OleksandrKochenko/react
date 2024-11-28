import { useState } from "react";
import "./App.css";
import { tableData } from "./data";
import { Table } from "./Table";

function App() {
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const handleChange = (event) => {
    setPerPage(event.target.value);
    setPage(0);
  };
  const pageData =
    perPage === "all"
      ? tableData
      : tableData.slice(page * +perPage, page * +perPage + +perPage);

  return (
    <div className="App">
      <Table data={pageData} />
      <div className="bg-orange-500">
        <button
          disabled={page === 0}
          onClick={() => setPage((page) => page - 1)}
        >
          {"<"}
        </button>
        <span>
          {page + 1} of{" "}
          {perPage === "all" ? 1 : Math.ceil(tableData.length / perPage)}
        </span>
        <button
          disabled={
            perPage === "all" ||
            page === Math.ceil(tableData.length / perPage) - 1
          }
          onClick={() => setPage((page) => page + 1)}
        >
          {">"}
        </button>
        <select
          className="text-black bg-orange-500"
          value={perPage}
          onChange={handleChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={"all"}>All</option>
        </select>
      </div>
    </div>
  );
}

export default App;
