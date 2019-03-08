//: Playground - noun: a place where people can play



class solution{
    func solveNQueens(_ n: Int) -> [[String]] {
        var results = [[String]]()
        var g = [String]()
        for _ in 0..<n{
            var temp = ""
            for _ in 0..<n{temp += "."}
            g.append(temp)
        }
        solveNQueens(g: &g, col: 0, results: &results)
        return results
    }
    func solveNQueens(g: inout [String], col: Int, results: inout [[String]]) -> Bool{
        
        
        //Define base case
        if(col >= g.count){
            results.append(g)
        }
        //Define loop to iterate over row
            //Check to see if in valid place
                //If so check to see if valid for remaining coloumns by recursively calling
        for i in 0..<g.count{
            if(isValidPlace(g: g, row: i, col: col)){
                g[i].prefix(col) + "Q" + g[i].dropFirst(col)
                //Recurively call function
                if(solveNQueens(g: &g, col: col + 1, results: &results) == true){return true}
                //If it bleeds through then set to 0
                g[i].prefix(col) + "." + g[i].dropFirst(col)
            }
        }
        
        return false
    
    }
    func isValidPlace(g: [String], row: Int, col: Int) -> Bool{
        
        var i = row, j = col
        
        //Check row
        for i in 0..<col{
            if(Array(g[row])[i] == "Q"){return false}
        }

        /* Check upper diagonal */
        while(i >= 0 && j >= 0){
            if(Array(g[i])[j] == "Q"){return false}
            i-=1
            j-=1
        }

        i = row
        j = col

        /* Check lower diagonal */
        while(i >= 0 && j >= 0 && i < g.count){
            if(Array(g[i])[j] == "Q"){return false}
            i+=1
            j-=1
        }

        return true
        
    }
}

let s = solution()
print(s.solveNQueens(4))
