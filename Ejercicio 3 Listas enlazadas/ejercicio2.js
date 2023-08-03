class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertAtEnd(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    display() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    displayAboveValue(value) {
      let current = this.head;
      while (current) {
        if (current.data > value) {
          console.log(current.data);
        }
        current = current.next;
      }
    }
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  
  for (let i = 0; i < 10; i++) {
    list1.insertAtEnd(getRandomInt(1, 50));
    list2.insertAtEnd(getRandomInt(1, 50));
  }
  
  console.log("Lista 1:");
  list1.display();
  
  console.log("Lista 2:");
  list2.display();
  
  const threshold = 25;
  console.log(`Nodos en Lista 1 que superan ${threshold}:`);
  list1.displayAboveValue(threshold);
  
  console.log(`Nodos en Lista 2 que superan ${threshold}:`);
  list2.displayAboveValue(threshold);