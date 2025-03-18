const ContainerWithMostWater = (heights = []) => {
  let water = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    //set left and right means width in which water will be collected
    let leftMax = heights[left];
    let rightMax = heights[right];

    //we want the max area in which water will be colllected, so area will be width*height i.e (right-left)*min(leftPillarHeight, rightPillarHeight)
    water = Math.max(water, (right - left) * Math.min(leftMax, rightMax));

    //if left pillar is smaller than rightpillar then move to the next larger leftPillar
    if (leftMax <= rightMax) {
      while (left < right && leftMax >= heights[left]) {
        left++;
      }
      //if right pillar is smaller then move to next larger left pillar
    } else {
      while (left < right && rightMax >= heights[right]) {
        right--;
      }
    }
  }

  return water;
};

console.log(ContainerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
