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

// sort characters by frequency

// const frequencySort = s => {
//     const count = {};

//     s.split("").forEach(char => {
//         if (count[char] === undefined) count[char] = 0;
//         count[char]++
//     })

//     let sorted = "";

//     let i = s.length;
//     const keys = Object.keys(count);

//     while (sorted.length < s.length) {
//         keys.forEach(key => {
//             let j = count[key];
//             if (count[key] === i) {
//                 while (j > 0) {
//                     sorted += key;
//                     j--;
//                 }
//             }
//         })
//         i--;
//     }

//     return sorted;
// };

const frequencySort = s => {
    const c = {};
    const chars = s.split('');
    const n = chars.length;

    chars.forEach(char => {
        if (c[char] === undefined) c[char] = 0;
        c[char]++;
    })

    const bucket = Array.from({length: n + 1}, () => [])

    Object.entries(c).forEach(([char, freq]) => {
        bucket[freq].push(char);
    })

    let res = '';

    for (let freq = n; freq > 0; freq--) {
        bucket[freq].forEach(char => {
            res += char.repeat(freq);
        })
    }

    return res;
};

// iterative b search

const search = (nums, target) => {
    let [left, right] = [0, nums.length - 1];

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
};