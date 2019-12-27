class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert at head position
    insertFirst(data) {
        this.head = new Node(data, this.head);
        ++this.size;
    }

    // Insert at last 
    insertLast(data) {
        let node = new Node(data);
        let current = this.head;

        if(!current) {
            this.head = node;
            ++this.size;
        } else {
            while(current.next) {
                current = current.next;
            }
            current.next = node;
            ++this.size;
        }
    }

    // Insert at index position
    insertAtIndex(data, index) {
        let current = this.head;

        if(this.isValidIndex(index)) {
            if(index == 0) {
               this.insertFirst(data);
            } else if(index == this.size-1) {
                this.insertLast(data);
            } else{
                for(let i = 1; i < index; i++) {
                    current = current.next;
                }
                current.next = new Node(data,current.next);
                ++this.size;
            }
        } else {
            console.log("Invalid Index");
            return false;
        }
    }

    // Get at index position
    getAtIndex(index) {
        let current = this.head;

        if(this.isValidIndex(index)) {
            if(current == null) {
                console.log("Empty List");
            } else {
                for(let i = 0; i < index; i++) {
                    current = current.next;
                }
                console.log(current.data);
            }
        } else {
            return false;
        }
    }

    // Remove at index position
    removeAtIndex(index) {
        let current = this.head;
        let nextNode;

        if(this.isValidIndex(index)) {
            if(current == null) {
                console.log("Empty List");
            } else {
                if(index == 0) {
                    this.head = current.next;
                 } else if(index == this.size-1) {
                    for(let i = 1; i < index; i++) {
                        current = current.next;
                    }
                    current.next = null;
                 } else{
                     for(let i = 1; i < index; i++) {
                         current = current.next;
                     }
                     nextNode = current.next;
                     nextNode = nextNode.next;
                     current.next = nextNode;
                 }
            }
        } else {
            return false;
        }
    }

    // Clear list
    clearList() {
        this.head = null;
    }

    // Print list
    printList() {
        let current = this.head;
        let listString="Linked List: ";

        while(current) {
            listString += `${current.data} -> `;
            current = current.next;
        }
        listString += "null";
        console.log(listString);
    }

    // Check for valid index
    isValidIndex(index) {
        if(index >= 0 && index < this.size) {
            return true;
        } else {
            return false;
        }
    }
}

var ll = new LinkedList();
ll.insertLast(12);
ll.insertLast(12);
ll.insertLast(12);
ll.insertLast(12);
ll.insertAtIndex(13,1);
ll.insertAtIndex(14,0);
ll.insertAtIndex(17,5);
//console.log(ll);
ll.removeAtIndex(2);
ll.printList();
