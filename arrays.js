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
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        if (height[left] >= height[right]) {
            max = Math.max(max, height[right] * (right - left));
            right--;
        } else {
            max = Math.max(max, height[left] * (right - left));
            left++;
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

// two sum ii

const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        if (numbers[left] + numbers[right] < target) {
            left++;
        } else if (numbers[left] + numbers[right] > target) {
            right--;
        } else {
            return [left + 1, right + 1];
        }
    }
};

// roman integer

const romanToInt = (s) => {
    const numerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (numerals[s.charAt(i + 1)] > numerals[s.charAt(i)]) {
            total += numerals[s.charAt(i + 1)] - numerals[s.charAt(i)]
            i++;
        } else {
            total += numerals[s.charAt(i)]
        }
    }

    return total;
};

// Minimum Size Subarray Sum

const minSubArrayLen = (target, nums) => {
    if (nums.length === 0) {
      return 0;
    }
  
    let left = 0;
    let right = 0;
    let minLength = Infinity;
    let sum = 0
  
    while (right < nums.length) {
      sum += nums[right];
  
      while (sum >= target) {
        minLength = Math.min(minLength, right - left + 1);
        sum -= nums[left];
        left++
      }
  
      right++
    }
  
    return minLength === Infinity ? 0 : minLength;
  
};

// minimize cost

function minimizeCost(arr) {
    let totalCost = 0;
  
    while (arr.length > 1) {
      arr.sort((a, b) => a - b);
      const sum = arr[0] + arr[1];
      totalCost += sum;
      arr.splice(0, 2, sum);
    }
  
    return totalCost;
  }
  
  const arr = [25, 10, 20];
  const result = minimizeCost(arr);
  console.log("The minimum possible cost:", result);

  // strong and weak passwords

  function getPasswordStrength(passwords, commonWords) {
    const weakPasswords = [];
    
    const allNumerics = new Set('0123456789');
    const commonWordsSet = new Set(commonWords.map(word => word.toLowerCase()));
  
    function isNumeric(password) {
      return [...password].every(char => allNumerics.has(char));
    }
  
    function isWeak(password) {
      const lowerCasePassword = password.toLowerCase();
      return (
        commonWordsSet.has(lowerCasePassword) ||
        [...commonWordsSet].some(word => lowerCasePassword.includes(word.toLowerCase())) ||
        isNumeric(password) ||
        password.toUpperCase() === password ||
        password.toLowerCase() === password ||
        password.length < 6
      );
    }
  
    for (const password of passwords) {
      if (isWeak(password)) {
        weakPasswords.push('weak');
      } else {
        weakPasswords.push('strong');
      }
    }
  
    return weakPasswords;
  }