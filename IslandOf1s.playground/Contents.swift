/*
 
 ISLAND OF 1s problem:
 
 The idea for this is to count every interconnected grouping of 1's. Within the grid there are 1s and 0s.
 1s represent a land mass while 0s represent water.
 
 Solution: Iterate through the grid with two for loops. When you come across a 1 increment the count+=1, recrusively call DFS which hits nearby neighbors and changes their values from 1 to 0. This is done so that you can keep track of visited land masses.
 
 */

public func numOfIslands(grid: [[String]]) -> Int{
    
    /*Vertical length*/
    let length = grid.count
    
    /*Returns 0 if nothing is found*/
    if length == 0{return length}
    
    
    /*This simpply places grid into a variable becuase you can't manipulate a parameter without an inout declaration*/
    var g = grid
    
    
    /*This keeps track of how many islands are found*/
    var numberOfIslands = 0
    
    
    /*Keeps a count of the horizontal x-axis*/
    let horizonatalLength = grid[0].count

    
    /*Iterates over the 2dArray the other loop messes with the y and the inner iterates over the x.*/
    for i in 0..<length{
        for j in 0..<horizonatalLength{
            /*If 1 is found then you can parse over that position */
            if(g[i][j] == "1"){
                numberOfIslands += 1
                dfs(i: i, j: j, g: &g, horizontalLength: horizonatalLength, length: length)
            }
        }
    }
    
    print("G: \(g)")

    return numberOfIslands
    
}


func dfs(i : Int, j : Int, g : inout [[String]], horizontalLength : Int, length : Int ) -> Void {
    
    
      /*In essence this line validates that the provided parameters are not out of bounds and that the proivde element is not anything else but 1. The main reason we do this is becuase of the recurisve call at the bottom. i + 1, j + 1, etc.*/
    if (i < 0 || i >= length || j<0 || j >= horizontalLength || g[i][j] != "1")
    {
        return
    }
    
    g[i][j] = "0"
    
    dfs(i: i - 1, j: j, g: &g, horizontalLength: horizontalLength, length: length) //i-1
    dfs(i: i + 1, j: j, g: &g, horizontalLength: horizontalLength, length: length) //i+1
    dfs(i:
        i, j: j - 1, g: &g, horizontalLength: horizontalLength, length: length) //j-1
    dfs(i: i, j: j + 1, g: &g, horizontalLength: horizontalLength, length: length) //j+1
    
}


var twoDArray = [["1","1"], ["1","1"],["1","1"], ["1","1"],["1","1"], ["1","1"]]

print("Number of islands: \(numOfIslands(grid: twoDArray))")






