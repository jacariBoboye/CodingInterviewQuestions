
/*
Find the minimum depth of a binary tree
1.
 
 
*/

public class TreeNode{
    
    var left : TreeNode?
    var right : TreeNode?
    var data = Int()
    
    public init(_ val: Int){
        left = nil
        right = nil
        self.data = val
    }

}

class Solution {
    
    func minDepth(_ root: TreeNode?) -> Int {
        guard let root = root else {
            return 0
        }
        
        let left = minDepth(root.left)
        let right = minDepth(root.right)
        
        if left == 0 {
            return right + 1
        } else if right == 0 {
            return left + 1
        } else {
            return min(left, right) + 1
        }
    }
    
}
