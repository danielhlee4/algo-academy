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

# container with most water

def max_area(height)
    max_area = 0
    left = 0
    right = height.length - 1

    while left < right
        current_area = [height[left], height[right]].min * (right - left)
        max_area = [max_area, current_area].max

        if height[left] < height[right]
            left += 1
        else
            right -= 1
        end
    end

    max_area
end

# mean and mode

def mean_mode(n, numbers)
    mean = numbers.sum / numbers.length.to_f
  
    frequency = Hash.new(0)
    numbers.each { |num| frequency[num] += 1 }
    mode = frequency.max_by { |_, freq| freq }[0]
  
    "#{mean.floor} #{mode}"
end

# count digits sum

def count_digits_sum(x, y)
    count = 0
  
    (1..x).each do |num|
      sum = num.digits.sum
      count += 1 if sum == y
    end
  
    count == 0 ? -1 : count
end
  