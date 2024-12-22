const SvgGenerator = () => {
  // SVG Data
  const data = JSON.parse(window.localStorage.getItem("pattern"));

  // SVG Settings
  const squareSize = 3; // Size of each square in the grid
  const width = 41; // Number of squares per row
  const height = data.length; // Number of rows (based on data length)

  return (
    <svg
      width={squareSize * width}
      height={squareSize * height}
      xmlns="http://www.w3.org/2000/svg"
      className="mt-2"
    >
      {data.map((row, y) =>
        row.map((value, x) => {
          const color = value === 1 ? "black" : "transparent"; // Set color based on value
          return (
            <rect
              key={`${x}-${y}`}
              x={x * squareSize}
              y={y * squareSize}
              width={squareSize}
              height={squareSize}
              fill={color}
            />
          );
        })
      )}
    </svg>
  );
};

export default SvgGenerator;
