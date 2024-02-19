class LinkedList {
    constructor(head = null) {
        this.head = head
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        const node = new Node(value);

        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            let prev = this.head;
            for(let i = 0; i < index-1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node
        }
        this.size++;
    }

    remove(index) {
        if (index < 0 || index > this.size) {
            return;
        }

        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index -1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next
        }
        this.size--;
        return removedNode;
    }

    removeValue(value) {
        let prev = this.head;
        if (this.head.data === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            for(let i = 0; i < this.size; i++) {
                prev = prev.next;
                if (prev.next.data === value) {
                    break;
                }
            }
            if (prev.next) {
                let removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return removedNode;
            }
        }
        
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }

        let i = 0;
        let curr = this.head;
        while(curr) {
            if (curr.data === value) {
                return i;
            }
            i++
            curr = curr.next
        }
        return -1
    }

    reverse() {
        let prev = null;
        let curr = this.head;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            let list = "";
            while (curr) {
                list += `${curr.data}->`;
                curr = curr.next;
            }
            console.log(list);
        }
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

function removeGreaterThan(list, value) {
    // console.log(list)
    let prev = list.head;
    while(prev.next) {
        if (prev.next.data > value) {
            //remove
            let deleted = prev.next;
            prev.next = deleted.next
        }
        prev = prev.next;
    }
    if (list.head.data > value) {
        list.head = list.head.next;
    }

}

const list = new LinkedList();

// list.print()

// list.append(10);
// list.append(15);

// list.print()

// list.prepend(5);

// list.print();

// list.insert(3, 2);
// list.insert(4, 1);

// list.print();

// list.remove(3);

// list.print();

// list.removeValue(10);

// list.print();

// list.reverse();

// list.print();

// console.log(list.search(4));

list.append(10)
list.append(15)
list.append(3)
list.append(5)
list.print();

removeGreaterThan(list, 7);

list.print();



