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