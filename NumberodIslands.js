const NumberOfIslands = (grid = [[]]) => {
  if (grid.length === 0 || grid[0]?.length < 1) {
    return 0;
  }
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === "1") {
        count++;
        helper(grid, row, column);
      }
    }
  }
  return count;
};

function helper(grid = [[]], row, column) {
  if (
    row < 0 ||
    column < 0 ||
    row >= grid.length ||
    column >= grid[0].length ||
    grid[row][column] === "0"
  ) {
    return;
  }
  grid[row][column] = "0";
  helper(grid, row + 1, column);
  helper(grid, row - 1, column);
  helper(grid, row, column + 1);
  helper(grid, row, column - 1);
}

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const grid1 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(NumberOfIslands(grid));
console.log(NumberOfIslands(grid1));
