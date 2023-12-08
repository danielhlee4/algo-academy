// valid parentheses

var isValid = function(s) {
    const stack = [];
    const closeToOpen = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (!(char in closeToOpen)) {
            stack.push(char)
        } else if (stack.length === 0 || stack[stack.length - 1] != closeToOpen[char]) {
            return false
        } else {
            stack.pop()
        }
    }

    return stack.length === 0
};

// merge intervals

const merge = (intervals) => {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    const merged = [sortedIntervals[0]];

    for (let i = 1; i < sortedIntervals.length; i++) {
        const nextInterval = sortedIntervals[i];
        let lastInterval = merged[merged.length - 1];
        let merge = false;

        if (nextInterval[0] <= lastInterval[1]) {
            if (nextInterval[1] >= lastInterval[1]) {
                lastInterval[1] = nextInterval[1];
            }
            merge = true;
        }

        if (!merge) {
            merged.push(nextInterval);
        }
    }

    return merged;
};

// merge intervals, hash organization

const mergeWithHash = (intervals) => {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    const stack = [intervals[0]];
  
    for (let i = 1; i < sortedIntervals.length; i++) {
      const currInt = {
        'start': sortedIntervals[i][0],
        'end': sortedIntervals[i][1]
      }
  
      const lastIntIdx = stack.length - 1
  
      const lastInt = {
        'start': stack[lastIntIdx][0],
        'end': stack[lastIntIdx][1]
      }
  
      if (currInt['start'] <= lastInt['end'] && currInt['end'] > lastInt['end']) {
        stack[lastIntIdx][1] = currInt['end']
      } else if (currInt['start'] > lastInt['end']) {
        stack.push(sortedIntervals[i])
      }
    }
  
    return stack;
};

// container with most water

const maxArea = (height) => {
    let rightIndex = height.length - 1;
    let leftIndex = 0;
    let rightHeight = height[rightIndex];
    let leftHeight = height[leftIndex];
    let max = 0;

    while (leftIndex < rightIndex) {
        if (leftHeight < rightHeight && leftHeight * (rightIndex - leftIndex) > max) {
            max = leftHeight * (rightIndex - leftIndex)
        } else if (leftHeight >= rightHeight && rightHeight * (rightIndex - leftIndex) > max) {
            max = rightHeight * (rightIndex - leftIndex)
        }

        // console.log(max, leftIndex, rightIndex, rightIndex-leftIndex)
        if (leftHeight < rightHeight) {
            leftIndex++
            leftHeight = height[leftIndex]
        } else {
            rightIndex--
            rightHeight = height[rightIndex]
        }
    }

    return max;

};

// contains duplicate II

const containsNearbyDuplicate = (nums, k) => {
    const window = new Set();
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (right - left > k) {
            window.delete(nums[left]);
            left++;
        }

        if (window.has(nums[right])) {
            return true;
        }

        window.add(nums[right]);
    }

    return false;
}

// longest substring without repeating characters

const lengthOfLongestSubstring = (s) => {
    const window = new Set();
    let left = 0;
    let right = 0;
    let maxLength = 0;

    while (right < s.length) {
        while (window.has(s.charAt(right))) {
            // run until window is valid again
            window.delete(s.charAt(left));
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
        window.add(s.charAt(right));
        right++;
    }

    return maxLength;
};