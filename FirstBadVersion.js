const VersionControl = (n) => {
  let start = 1;
  let end = n;

  while (start < end) {
    let mid = math.floor(start + end) / 2;
    if (isBadVersion(mid)) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  if (isBadVersion(start)) {
    return true;
  } else {
    return -1;
  }
};
