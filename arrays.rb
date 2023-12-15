# two sum

def two_sum(nums, target)
    h = {}
    nums.each_with_index do |num, i|
        complement = target - num
        if h[complement]
            return [i, h[complement]]
        else
            h[num] = i
        end
    end
end

# valid parentheses

def is_valid(s)
    stack = []
    closing_brackets = {
        ')' => '(',
        ']' => '[',
        '}' => '{'
    }

    s.each_char do |ele|
        if !closing_brackets.key?(ele)
            stack.push(ele)
        elsif closing_brackets[ele] == stack[-1]
            stack.pop
        else
            return false
        end
    end

    stack.empty?
end