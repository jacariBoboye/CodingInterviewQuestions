/*
 
 Given a binary tree, determine if it is a valid binary search tree (BST).
 
 Assume a BST is defined as follows:
 
 The left subtree of a node contains only nodes with keys less than the node's key.
 The right subtree of a node contains only nodes with keys greater than the node's key.
 Both the left and right subtrees must also be binary search trees.
 
 
 */

public class TreeNode {
    
     public var val: Int
     public var left: TreeNode?
     public var right: TreeNode?
     public init(_ val: Int) {
        self.val = val
        self.left = nil
        self.right = nil
    }
    
}

public class Tree{
    
    public var root: TreeNode?
    
    func insert(value: Int){
        
        let newNode = TreeNode(value)
        if let root = root{insertValue(currentNode: root, newNode: newNode)}
        else{root = newNode}
        
    }
    
    func insertValue(currentNode: TreeNode, newNode: TreeNode){
        
        if(newNode.val < currentNode.val){
            if let leftNode = currentNode.left{insertValue(currentNode: leftNode, newNode: newNode)}
            else{currentNode.left = newNode}
        }
        else if(newNode.val > currentNode.val){
            if let rightNode = currentNode.right{insertValue(currentNode: rightNode, newNode: newNode)}
            else{
                currentNode.right = newNode
            }
        }
        
    }
    
    func inOrderTraversal(currentNode: TreeNode?){
        
        if let currentNode = currentNode{
            
            inOrderTraversal(currentNode: currentNode.left)
            print("CurrentNode: \(currentNode.val)")
            inOrderTraversal(currentNode: currentNode.right)
            
        }
        
    }
    
    func preOrderTraversal(currentNode: TreeNode?){
        
        if let currentNode = currentNode{
            
            print("CurrentNode: \(currentNode.val)")
            preOrderTraversal(currentNode: currentNode.left)
            preOrderTraversal(currentNode: currentNode.right)
            
        }
        
    }

    func postOrderTraversal(currentNode: TreeNode?){
        
        if let currentNode = currentNode{
            
            postOrderTraversal(currentNode: currentNode.left)
            postOrderTraversal(currentNode: currentNode.right)
            print("CurrentNode: \(currentNode.val)")

        }
        
    }
    
    func getRootNode() -> TreeNode?{
        return self.root
    }

    func leftSubTreeHeight(currentNode: TreeNode?, count: Int) -> Int{
        
        if let currentNode = currentNode{
            return leftSubTreeHeight(currentNode: currentNode.left, count: count + 1)
        }

        return count

    }
    
    func rightSubTreeHeight(currentNode: TreeNode?, count: Int) -> Int{
        
        if let currentNode = currentNode{
            return rightSubTreeHeight(currentNode: currentNode.right, count: count + 1)
        }

        return count
        
    }
 
    func isBalancedTree(currentNode: TreeNode?) -> Bool{
        
        if let left = currentNode?.left, let right = currentNode?.right{
            
            return leftSubTreeHeight(currentNode: left, count: 0) == rightSubTreeHeight(currentNode: right, count: 0)

        }
        
        return false
        
    }
    
    func checkIfBST(root: TreeNode?) -> Bool{ //NOT WORKING
        
        if let root = root{
            
            checkIfBST(root: root.left)
            
            if let left = root.left{
                if(root.val <= left.val){return false}
            }
            if let right = root.right{
                if(root.val >= right.val){return false}
            }
            
            checkIfBST(root: root.right)
            
        }
     
        return true
        
    }
    
    func isValidBST(_ root: TreeNode?) -> Bool {
        return isValidBST(root: root, minVal: Int.min, maxVal: Int.max)
    }
    
    func isValidBST(root: TreeNode?, minVal: Int, maxVal: Int) -> Bool{
        
        guard let root = root else{return true}
        if(root.val >= maxVal || root.val <= minVal){return false} //Checks to see if this node is properly positioned
        return isValidBST(root: root.left, minVal: minVal, maxVal: root.val) && isValidBST(root: root.right, minVal: root.val, maxVal: maxVal)//Recurcively call the function. Left and right side

    }
    
}

var arrayOfInts = [2,1,3]

print("arrayOfInts:    \(arrayOfInts)")

var tree = Tree()

arrayOfInts.forEach{tree.insert(value: $0)}

print(tree.leftSubTreeHeight(currentNode: tree.getRootNode(), count: -1))

print(tree.rightSubTreeHeight(currentNode: tree.getRootNode(), count: -1))

print(tree.isBalancedTree(currentNode: tree.getRootNode()))

print(tree.isValidBST(root: tree.getRootNode()))


