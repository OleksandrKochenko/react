import { useState } from "react";
import { headerData, tableData } from "./data";

export const Table = () => {
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
    <>
      <table>
        <thead>
          <tr>
            {headerData.map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageData.map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
    </>
  );
};
