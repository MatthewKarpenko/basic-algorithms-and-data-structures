const Node = require('./Node.js');

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const node = new Node(val);

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

    pop() {
        сonst temp 
    }
}

const list = new SinglyLinkedList();
list.push(1);
console.log(list);
list.push(2);
console.log(list);
