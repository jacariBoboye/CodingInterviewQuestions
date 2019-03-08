
public class LL{
    
    var head: Node?
    var size: Int
    
    public init(){
        head = nil
        size = 0
    }
    
    public func getRootNode() -> Node?{
        
        return self.head ?? nil
        
    }
    
    public func addNode(_ val: Int){
        
        let newNode = Node(val)
        
        if(self.head == nil){self.head = newNode}
        else{
            var current = head
            while(current?.next != nil){current = current?.next}
            current?.next = newNode
        }
    
    }
    
    public func printNodes(){
        
        var current = self.head
        
        while(current != nil){
            
            if let c =  current{
                print(c.data)
                current = c.next
            }
            
        }
        
    }
    
}


public class Node{
    
    var next: Node?
    var data: Int
    
    public init(_ data: Int){
        
        self.next = nil
        self.data = data
        
    }
    
}

var ll = LL()

func populateLL(){
    ll.addNode(0)
    ll.addNode(1)
    ll.addNode(2)
}

func swapPairs(_ head: Node?) -> Node? {
    
    if head == nil || head?.next == nil {return head}
    
    var node1 = head, node2 = head?.next
    
    while node1 != nil && node2 != nil {
        
        let tmpVal = (node1?.data)!
        node1?.data = (node2?.data)!
        node2?.data = tmpVal
        node1 = node2?.next
        node2 = node1?.next
        
    }
    
    return head
}

populateLL()

swapPairs(ll.getRootNode())

ll.printNodes()




