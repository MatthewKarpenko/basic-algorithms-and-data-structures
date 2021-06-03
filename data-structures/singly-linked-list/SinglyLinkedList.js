const Node = require('./Node.js');

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;
    }

    //push new element to the end of the list
    push(val) {
        const node = this.createNode(val);

        if(!this.head) {
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length ++;

        return this;
    }

    //remove and return last element from list
    pop() {
        if(this.isEmpty()) return undefined;

        const temp = this.tail;

        let listLength = this.length - 2;

        this.length --;
    
        if(listLength === -1) {
            this.head = null;
            this.tail = null;

            return temp;
        }

        let current = this.head;

        while(listLength--) {
            current = current.next;
        }

        current.next = null;

        this.tail = current;

        return temp;
    }

    //remove and return first element from the list
    shift() {
        if(this.isEmpty()) return undefined;

        const temp = this.head;

        this.length --;

        this.head = temp.next;

        if(this.isEmpty()) this.tail = null; 

        return temp;
    }

    //add new node to the beginning of the list
    unshift (val) {
        const node = this.createNode(val);

        if(this.isEmpty()) {
            this.tail = node;
        }else {
            node.next = this.head;
        }

        this.head = node;

        this.length ++;

        return this;
    }

    get(index) {
        if(index >= this.length || index < 0) return undefined;

        let current = this.head;

        while(index--) {
            current = current.next;
        }

        return current;
    }

    set(index, val) {
        const node = this.get(index);

        if(node) {
            node.val = val;

            return true;
        }

        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;

        const node = this.createNode(val);

        if(index === 0) return !!this.unshift(node);
        if(index === this.length) return !!this.push(node);
        
        const nodeAtPrevIndex = this.get(index - 1),
              nodeAtIndex = this.get(index);

        nodeAtPrevIndex.next = node;
        node.next = nodeAtIndex;

        this.length ++;

        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false;

        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        const prevNode = this.get(index - 1),
              currNode = this.get(index);

        prevNode.next = currNode.next;

        this.length --;

        return currNode;
    }

    reverse() {
        if(this.isEmpty() || this.length === 1) return;
        
        let currentNode = this.head,
            nextNode = currentNode.next;

        while(nextNode) {
            const tempNext = nextNode.next;

            nextNode.next = currentNode;

            currentNode = nextNode;
            nextNode = tempNext;
        } 

        const tempHead = this.head;
        
        this.head = this.tail;

        this.tail = tempHead;
        this.tail.next = null;

        // console.log(this.head, this.tail)
   }

    createNode(val) {
        return new Node(val);
    }

    isEmpty() {
        return !this.length;
    }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);

list.reverse();
// list.insert(2, 5);
// list.unshift(4);
list.get(2)
