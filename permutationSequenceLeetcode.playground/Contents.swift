

func getPermutation(_ n: Int, _ k: Int) -> String{
    var populatedArray = Array(1...n), combinations = [String](), resultArray = [[String]]()
    backtracking(arr: populatedArray, resultsArray: &resultArray, k: k, combinations: &combinations)
    return resultArray[k-1].joined()
}

func backtracking(arr: [Int], resultsArray: inout [[String]], k: Int, combinations: inout [String]){
    if(combinations.count == arr.count){resultsArray.append(combinations)}
    else if(resultsArray.count == k){return}
    else{
        for i in 0..<arr.count{
            if(combinations.contains(String(arr[i]))){continue}
            combinations.append(String(arr[i]))
            backtracking(arr: arr, resultsArray: &resultsArray, k: k, combinations: &combinations)
            combinations.removeLast()
        }
    }
}


print(getPermutation(9, 273815))
