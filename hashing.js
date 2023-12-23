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

// group anagrams

const groupAnagrams = (strs) => {
    const hash = {};

    for (let s of strs) {
        let key = s.split("").sort().join("");
        if (!hash[key]) {
            hash[key] = [];
        }
        hash[key].push(s);
    }

    return Object.values(hash)
};

// valid sudoku

const isValidSudoku = (board) => {
    const row = {};
    const col = {};
    const box = {};

    for (let r = 0; r < board.length; r++) {
        if (row[r] === undefined) {
            row[r] = new Set();
        }

        for (let c = 0; c < board[0].length; c++) {
            if (col[c] === undefined) {
                col[c] = new Set();
            }

            let currVal = board[r][c];

            if (currVal != ".") {
                let boxCoord = `${Math.floor(r/3)},${Math.floor(c/3)}`

                if (box[boxCoord] === undefined) {
                    box[boxCoord] = new Set();
                }

                if (row[r].has(currVal) || col[c].has(currVal) || box[boxCoord].has(currVal)) {
                    return false
                }

                row[r].add(currVal);
                col[c].add(currVal);
                box[boxCoord].add(currVal);
            }

        }
    }

    return true;
};

// longest consecutive sequence

const longestConsecutive = (nums) => {
    if (nums.length === 0) return 0;
    const set = new Set(nums);
    let max = 1;

    for (let num of set) {
        if (!set.has(num - 1)) {
            for (let i = 1; set.has(num + i); i++) {
                max = Math.max(i + 1, max);
            }
        }
    }

    return max;
};