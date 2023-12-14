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