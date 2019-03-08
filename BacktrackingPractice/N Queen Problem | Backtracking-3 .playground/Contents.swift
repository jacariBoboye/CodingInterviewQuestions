//: Playground - noun: a place where people can play



class solution{
    
    func solveNQueens(g: inout [[Int]], col: Int) -> Bool{
        
        //Define base case
        if(col >= g.count){return true}
        //Define loop to iterate over row
            //Check to see if in valid place
                //If so check to see if valid for remaining coloumns by recursively calling
        for i in 0..<g.count{
            if(isValidPlace(g: g, row: i, col: col)){
                //Set valid pos there
                g[i][col] = 1
                //Recurively call function
                
                print("Valid : Frame: i  = \(i) col = \(col) - g: \(g)")
                
                if(solveNQueens(g: &g, col: col + 1) == true){
                    print("solveNQueens TRUE")
                    return true

                }
                //If it bleeds through then set to 0
                g[i][col] = 0
                
                print("After : Frame: i  = \(i) col = \(col) - g: \(g)")
            }
            else{
                print("Not Valid : Frame: i  = \(i) col = \(col) - g: \(g)")
            }
        }
        print("Exit loop")
        return false
    
    }
    func isValidPlace(g: [[Int]], row: Int, col: Int) -> Bool{
        
        var i = row, j = col
        
        //Check row
        for i in 0..<col{
            if(g[row][i] == 1){return false}
        }

        /* Check upper diagonal */
        while(i >= 0 && j >= 0){
            if(g[i][j] == 1){return false}
            i-=1
            j-=1
        }

        i = row
        j = col

        /* Check lower diagonal */
        while(i >= 0 && j >= 0 && i < g.count){
            if(g[i][j] == 1){return false}
            i+=1
            j-=1
        }

        return true
        
    }
    
}

var x =
[
    [ 0,  0,  0,  0],
    [ 0,  0,  0,  0],
    [ 0,  0,  0,  0],
    [ 0,  0,  0,  0]
]

var x2 =
[
    [ 0,  0],
    [ 0,  0]
]

let s = solution()

s.solveNQueens(g: &x, col: 0)

print("X: \(x2)")
//
//s.solveNQueens(g: &x2, col: 0)
//
//print("X2: \(x2)")


