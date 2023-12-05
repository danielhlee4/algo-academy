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