// two sum

const twoSum = (nums, target) => {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (hash[complement] !== undefined) {
            return [i, hash[complement]];
        } else {
            hash[nums[i]] = i;
        }
    }
};

// set matrix zeroes

const setZeroes = matrix => {
    const rowSet = new Set();
    const colSet = new Set();

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++)
        if (matrix[row][col] === 0) {
            rowSet.add(row);
            colSet.add(col);
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++)
        if (rowSet.has(row) || colSet.has(col)) {
            matrix[row][col] = 0;
        }
    }
};