const RobotReturnToOrigin = (moves = "") => {
  let xAxis = 0;
  let yAxis = 0;
  for (char of moves) {
    if (char === "U") yAxis++;
    if (char === "D") yAxis--;
    if (char === "L") xAxis--;
    if (char === "R") xAxis++;
  }
  return xAxis + yAxis === 0;
};

console.log(RobotReturnToOrigin("UD"));
console.log(RobotReturnToOrigin("LL"));
console.log(RobotReturnToOrigin("LLRRUDLRDDLRUU"));
