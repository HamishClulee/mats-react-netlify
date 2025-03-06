export const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  // calculate mid point
  const mid = Math.floor(arr.length / 2);

  // recurse left and right until 1 member exists
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // merge via split sorting
  return merge(left, right);
};

const merge = (left: number[], right: number[]): number[] => {
  const sorted: number[] = [];
  let indexLeft = 0;
  let indexRight = 0;

  // will loop until both counters are satisfied
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      sorted.push(left[indexLeft]);
      indexLeft++;
    } else {
      sorted.push(right[indexRight]);
      indexRight++;
    }
  }

  console.log({ sorted });

  return [...sorted, ...left.slice(indexLeft), ...right.slice(indexRight)];
};
