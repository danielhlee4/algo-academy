// sort colors (bucket sort)

const sortColors = nums => {
    const counts = Array(3).fill(0);
    for (let n of nums) {
        counts[n]++
    }

    let i = 0;
    for (let n = 0; n < counts.length; n++) {
        for (let c = 0; c < counts[n]; c++) {
            nums[i] = n;
            i++;
        }
    }
};

// sort array (merge sort)

const sortArray = nums => {
    if (nums.length < 2) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = sortArray(nums.slice(0, mid));
    const right = sortArray(nums.slice(mid));

    return merge(left, right);
};

const merge = (left, right) => {
    const merged = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift())
        }
    }

    return merged.concat(left).concat(right);
}