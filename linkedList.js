// Linked List
// Linear data structure
// have nodes (data,next-pointer)
//  not sorted in sequential memmory locations

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const test = new Node(100);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  //insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //if list is empty , we have to make it as head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //insert at index position
  insertAt(data, index) {
    //if index is greater than the actual size
    if (index < 0 && index > this.size) {
      return;
    }

    //if the item wanted to first element
    if (index === 0) {
      this.head = new Node(data, index); // or we can use "insertFirst" here
    }

    const node = new Node(data);
    let current, previous;

    //setting current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //the previous node
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //Remove at index
  removeAt(index) {
    if (index < 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    //to remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }


  //clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current?.data);
      current = current.next;
    }
  }
}


const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(500);
ll.insertAt(400, 2);
ll.removeAt(2);

// ll.clearList();

ll.printListData();
// ll.getAt(3);
