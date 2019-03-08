

//999

func plusOne(_ digits: [Int]) -> [Int] {
    var copy = [Int](), carry = 0, add = 1
    for i in stride(from: digits.count-1, through: 0, by: -1){
        if(((digits[i] + add + carry)) == 10){
            carry = 1
            copy.append(0)
        }
        else{
            copy.append(digits[i] + carry + add)
            carry = 0
        }
        add = 0
    }
    if(carry != 0){copy.append(carry)}
    return copy.reversed()
}


print(plusOne([1,2,3]))
