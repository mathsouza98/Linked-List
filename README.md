# Linked-List
Linked List data structure application using JavaScript and OOP concepts.

## Classes

### Node
This class is the abstraction of the Node element. It has the following attributes:

#### Attributes:
- data: the content of a Node. Can be a String, Number or Object.
- next: pointer to the next Node element

### LinkedList
This class is the abstraction of the Linked List. It hasthe following attributes & methods:

#### Attributes:
- head: pointer to the head of the Linked List.
- size: the size of the Linked List.

#### Methods
- **insertFirst**: insert a Node on the head of the Linked List. When created, it passes the old head to the next Node element.
  prepend.bmp

![insertFirst representation](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/pix/prepend.bmp)

- **insertLast**: insert a Node on the last position. If the Linked List is empty, the Node element is inserted on the head.

![insertLast representation](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/pix/append.bmp)

- **insertAtIndex**:
  - Case first position: Calls insertFirst.
  - Case middle position: Insert on the middle of Nodes
  ![removeAtIndex case middle](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/pix/after.bmp)
  - Case last position: calls insertLast. 

- **getAtIndex**: return the element of a passed position

- **removeAtIndex**: Remove the Node element, on a passed position. It has 3 cases:
  - Case first position: remove the Node, passing the head to the next element of the removed Node.
  - Case middle position: remove the Node, conecting the before and after Node elements
  ![removeAtIndex case middle](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/pix/delete.bmp)
  - Case last position: remove the Node, passing null to the previous Node next pointer. 

- **isValidIndex**: Validate the index used on **insertAtIndex**, **getAtIndex** and **removeAtIndex** methods.

- **clearList**: Clear the Linked List, assigning null to the head.

- **printList**: Print all the elements of the Linked List.

## References

https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html
