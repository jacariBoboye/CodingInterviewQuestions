
/*
 
 ThreeSum
 
 */


func threeSum(nums: [Int], target: Int, noOfCombinations: Int) -> [[Int]]{
    var resultArray = [[Int]]()
    if(nums.count < 4){return resultArray}
    if(nums.count == 4){return (nums.reduce(0,+) == target) ? [nums] : resultArray}
    var combinations = [Int]()
    let n = nums.sorted()
    print("N: \(n)")
    backTracking(resultArray: &resultArray, combinations: &combinations, nums: n, start: 0, noOfCombinations: 4, target: target)
    return resultArray
}

private func backTracking(resultArray: inout [[Int]],
                          combinations: inout [Int],
                          nums: [Int],
                          start: Int,
                          noOfCombinations: Int,
                          target: Int){
    
    if(target == combinations.reduce(0,+) && combinations.count == noOfCombinations && !resultArray.contains(combinations.sorted())){resultArray.append(combinations.sorted())}
    else if(start > nums.count || combinations.count == noOfCombinations){return}
    else{
        for i in start..<nums.count{
            if(combinations.count == 0 && nums[i] > target){return}
            else if(combinations.contains(nums[i])){
                if(nums[i-1] == nums[i]){
                    print("Same")
                    
//                  continue
                }
                if(nums[i-1] != nums[i]){
                    print("Different")
                    continue
                }
                print("Current: \(nums[i])")
                print("combinations: \(combinations)")
            }
            combinations.append(nums[i])
            backTracking(resultArray: &resultArray, combinations: &combinations, nums: nums, start: start + 1, noOfCombinations: noOfCombinations, target: target)
            combinations.removeLast()
        }
    }
    
}
    


var inputFive = [-2,0,1,1,2]
var arr = [-1,0,1,-100,100,-50,50]
var x = [-2,-1,0,0,1,2]
var b = [-3,-2,-1,0,0,1,2,3]
var t = [-4,-3,-2,-1,0,0,1,2,3,4]
//print(threeSum(nums: inputFive, target: 0, noOfCombinations: 4))
//print(threeSum(nums: arr, target: 0, noOfCombinations: 4))
print(threeSum(nums: x, target: 0, noOfCombinations: 4))
//print(threeSum(nums: b, target: 0, noOfCombinations: 4))

//print(threeSum(nums: t, target: 0, noOfCombinations: 3))

///////////

func iterativeThreeSum(_ nums: [Int]) -> [[Int]]{
    let nums = nums.sorted()
    var resultArray = [[Int]]()
    print("nums: \(nums)")
    for a in 0..<nums.count{
        for b in (a+1)..<nums.count{
            for c in (b+1)..<nums.count{
                if((nums[a] + nums[b] + nums[c]) == 0){
                    var temp = [Int]()
                    temp.append(nums[a])
                    temp.append(nums[b])
                    temp.append(nums[c])
                    if(!resultArray.contains(temp)){resultArray.append(temp)}
                }
            }
        }
    }
    return resultArray
}

func hashSolutionThreeSum(_ nums: [Int]) -> [[Int]]{
    if(nums.isEmpty){return []}
    var resultsArray = [[Int]](), map = [String: Int](), nums = nums.sorted()
    for i in 0 ..< nums.count - 1{
        for j in (i+1) ..< nums.count{
            let remainder = 0 - (nums[i] + nums[j])
            var temp = [Int]()
            if let _ = map[String(remainder)]{
                temp.append(nums[i])
                temp.append(nums[j])
                temp.append(remainder)
                temp.sort()
                if(!resultsArray.contains(temp)){
                    map[String(remainder)] = map[String(remainder)]! - 1
                    if((map[String(remainder)]!) > 0){resultsArray.append(temp)}
                }
            }
            map[String(nums[j])] = (map[String(nums[j])] ?? 0) + 1
        }
    }
    return resultsArray
    
}

func hSolThreeSum(_ nums: [Int]) -> [[Int]]{
    if(nums.isEmpty){return []}
    var nums = nums.sorted(), resultArray = [[Int]](), map = [String: Int]()
    for x in 0..<nums.count{map[String(nums[x])] = (map[String(nums[x])] ?? 0) + 1}
    print("MAP: \(map)")
    for i in 0 ..< nums.count - 1{
        for j in (i+1) ..< nums.count{
            let remainder = 0 - (nums[i] + nums[j])
            if let _ = map[String(remainder)]{
                map[String(remainder)] = map[String(remainder)]! - 1
                if(nums[i] == remainder){map[String(remainder)] = map[String(remainder)]! - 1}
                if(nums[j] == remainder){map[String(remainder)] = map[String(remainder)]! - 1}
                if(map[String(remainder)]! > -1){
                    var temp = [Int]()
                    temp.append(nums[i])
                    temp.append(nums[j])
                    temp.append(remainder)
                    temp.sort()
                    if(!resultArray.contains(temp)){resultArray.append(temp)}
                }
            }
            map[String(nums[j])] = (map[String(remainder)] ?? 0) + 1
        }
    }
    print("MAP: \(map)")
    return resultArray
}

func fasterIterativeSolution(_ nums: [Int]) -> [[Int]]{
    var result = [[Int]]()
    
    let nums = nums.sorted()
    var index = 0
    
    while index < (nums.count - 2) {
        
        var start = index + 1
        var end = nums.count - 1
        
        while start < end {
            let sum = nums[index] + nums[start] + nums[end]
            
            if sum == 0 {
                result.append([nums[index], nums[start], nums[end]])
            }
            
            if sum < 0 {
                let currentStart = start
                //Removes duplicates
                while start < end && nums[start] == nums[currentStart] {
                    start += 1
                }
            } else {
                let currentEnd = end
                //Removes duplicates
                while start < end && nums[end] == nums[currentEnd] {
                    end -= 1
                }
            }
        }
        
        let currentIndex = index
        while index < (nums.count - 2) && nums[index] == nums[currentIndex] {
            index += 1
        }
    }
    
    return result
}

var input = [-1,0,1,2,-1,-4]
var inputTwo = [-2,-1,1,2]
var inputThree = [-1,0,1]
var inputFour = [0,0,0]
//print(iterativeThreeSum(input))
//print(hashSolutionThreeSum(inputFour))
//print(hSolThreeSum(input))
//print(fasterIterativeSolution(inputFive))





