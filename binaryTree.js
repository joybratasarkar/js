class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor(value) {
        this.root = new Node(value)
        this.count = 0
    }
    size() {
        return this.count
    }

    insert(value) {
        this.count++
        let newNode = new Node(value)

        const searchTree = node => {
            //if value < node.value go left

            if (value < node.value) {
                //if no left child ,append new node
                if (!node.left) {
                    node.left = newNode
                }
                //if left ,look left child
                else {
                    searchTree(node.left)
                }
            }
            //if value > node.value go right
            else if (value > node.value) {
                //if no right child ,append new node

                if (!node.right) {
                    node.right = newNode
                }
                //if right ,look right child
                else {
                    searchTree(node.right)
                }
            }

        }
        searchTree(this.root)
    }
    min() {

        let currentNode = this.root
        while (currentNode.left) {
            currentNode = currentNode.left
        }
        return currentNode.value

    }
    max() {
        let currentNode = this.root
        while (currentNode.right) {
            currentNode = currentNode.right
        }
        return currentNode.value
    }
    contains(value) {
        let currentNode = this.root
        while (currentNode) {
            if (value === currentNode.value) {
                return true
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left
            }
            else {
                currentNode = currentNode.right
            }
        }

        return false
    }

    //depth first search
    //in-order

    // dfs-looking branch by branch

    // 2,3,12,15,28,36,39
    dfsInOrder() {
        let result = []
        const traverse = node => {
            if (node.left) traverse(node.left)

            result.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return result
    }


    // 15,3,2,12,34,28,39 
    dfsPreOrder() {
        let result = []
        const traverse = node => {
            result.push(node.value)

            if (node.left) traverse(node.left)

            if (node.right) traverse(node.right)
        }
        traverse(this.root)

        return result
    }

    // 2,12,3,28,39,15
    dfsPostOrder() {
        let result = []
        const traverse = node => {

            if (node.left) traverse(node.left)

            if (node.right) traverse(node.right)
            result.push(node.value)

        }
        traverse(this.root)

        return result
    }
    // bfs-looking level by level
    //breadth of search
    bfs() {

        let result = []
        let queue = []
        queue.push(this.root)

        while (queue.length) {
            let currentNode = queue.shift()
            result.push(currentNode.value)

            if (currentNode.left) {
                queue.push(currentNode.left)

            }
            if (currentNode.right) {
                queue.push(currentNode.right)

            }
        }
        return result
    }
}

const bst = new BST(15)

bst.insert(3)
bst.insert(2)
bst.insert(12)
bst.insert(15)
bst.insert(36)
bst.insert(25)
bst.insert(39)

// console.log('bst',BST);
// console.log('bst.size()', bst.size());
// 
// console.log('bst.min()', bst.min());
// 
// console.log('bst.max()', bst.max());
// 
// 
// console.log('bst.contains()', bst.contains(2));
// 
// 
// console.log('bst.contains()', bst.contains(9));
// 
// 
// console.log('bst.dfsInOrder()', bst.dfsInOrder());
// 
// 
// console.log('bst.dfsPostOrder()', bst.dfsPostOrder());
// 
// console.log('bst.dfsPreOrder()', bst.dfsPreOrder());
// 
// console.log('bst.dfsPreOrder()', bst.dfsPreOrder());

console.log('bst.bfs()', bst.bfs());


