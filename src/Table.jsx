import { headerData } from "./data";

export const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          {headerData.map(({ label, key }) => (
            <th key={key}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, age, occupation }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{occupation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
