class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedListQueue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    enqueue(data) {
      if (this.contains(data)) {
        return; // Evitar la inserción de datos repetidos
      }
  
      const newNode = new Node(data);
      if (!this.front) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
  
    contains(data) {
      let current = this.front;
      while (current) {
        if (current.data === data) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  
    display() {
      let current = this.front;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  const queue = new LinkedListQueue();
  queue.enqueue(5);
  queue.enqueue(10);
  queue.enqueue(15);
  queue.enqueue(10); // No se inserta porque 10 ya existe
  queue.enqueue(20);
  
  queue.display(); // Mostrará 5, 10, 15, 20
  