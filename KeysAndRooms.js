// 1.list of rooms 2D array
// 2. Each Room contains keys of some room or may be empty
// 3. Check if all the rooms are open
// Note Keys contains the number for which room it belongs
const KeysAndRooms = (roomsList = [[]]) => {
  const keysMap = new Map();
  const stack = [0];

  while (stack.length > 0) {
    let cur = stack.pop();

    if (!keysMap.has(cur)) {
      keysMap.set(cur, cur);
      const rooms = roomsList[cur];
      for (let room of rooms) {
        if (!keysMap.has(room)) {
          stack.push(room);
        }
      }
    }
  }

  return roomsList.length <= keysMap.size;
};

console.log(KeysAndRooms([[1, 3], [3, 0, 1], [2], [0]]));
console.log(KeysAndRooms([[1], [2], [3], []]));
