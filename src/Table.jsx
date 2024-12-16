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
      <h2 className="text-3xl text-orange-200 my-8">Table Pagination</h2>
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
      <div className="bg-transparent rounded-xl border pr-1">
        <button
          disabled={page === 0}
          onClick={() => setPage((page) => page - 1)}
          className="hover:text-amber-400"
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
          className="hover:text-amber-400"
        >
          {">"}
        </button>
        <select
          className=" bg-[darkslategrey] hover:text-amber-400"
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
