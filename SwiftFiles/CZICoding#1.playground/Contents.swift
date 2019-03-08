

/*
 
 DataArray = ["A", "D", "B", "C", "E"]
 
 DataOrder = [0, 3, 1, 2, 4]
 
 */

func swap(dataOrder: inout [Int], i1: Int, i2: Int){
    let temp = dataOrder[i1]
    dataOrder[i1] = dataOrder[i2]
    dataOrder[i2] = temp
}

func swap(dataArray: inout [String], i1: Int, i2: Int){
    let temp = dataArray[i1]
    dataArray[i1] = dataArray[i2]
    dataArray[i2] = temp
}

func orderArray(dataArray: [String], dataOrder: [Int]){
    
    var d1 = dataArray, d2 = dataOrder
    var i = 0
    
    while(i<d1.count-1){
        if(d2[i] != i){
            swap(dataArray: &d1, i1: d2[i], i2: i)
            swap(dataOrder: &d2, i1: d2[i], i2: i)
        }
        else{
            i+=1
        }
    }
    print("d1: \(d1)")
    print("d2: \(d2)")
}

var dataArray = ["D", "E", "A", "C", "B"]
var dataOrder = [3, 4, 0, 2, 1]

print("Original Array: \(dataArray)")
print(orderArray(dataArray: dataArray, dataOrder: dataOrder))
