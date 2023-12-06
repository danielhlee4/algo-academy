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