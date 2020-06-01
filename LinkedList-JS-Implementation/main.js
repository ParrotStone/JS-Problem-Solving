"use strict";

// Basic LinkedList Implementation in JS

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  insertLast(value) {
    this.size++;
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = new Node(value);
  }

  insertAtIndex(index, value) {
    if (index >= this.size || index < 0) {
      throw new Error(
        "Index exceeded the LinkedList length, enter a proper value!"
      );
    }

    if (!this.head && index === 0) {
      this.head = new Node(value);
      return;
    }

    // It is the first index(the head)
    if (index === 0) {
      // insertedNode.next = current;
      // this.head = insertedNode;
      // OR, Using the already implemented methods
      this.insertFirst(value);
      return;
    }

    // It is the last index(the tail)
    if (index === this.size - 1) {
      // current.next = insertedNode;
      this.insertLast(value);
      return;
    }

    let i = 0;
    let current = this.head;
    let prev = null;

    while (i < index) {
      prev = current;
      current = current.next;
      i++;
    }

    // It is somewhere in the middle
    this.size++;
    const insertedNode = new Node(value);
    insertedNode.next = current;
    prev.next = insertedNode;
  }

  getAtIndex(index) {
    if (index >= this.size || index < 0) {
      throw new Error(
        "Index exceeded the LinkedList length, enter a proper value!"
      );
    }

    let i = 0;
    let current = this.head;
    while (i < index) {
      i++;
      current = current.next;
    }

    return current;
  }

  getSize() {
    return this.size;
  }

  removeAtIndex(index) {
    if (index >= this.size || index < 0)
      throw new Error(
        "Index exceeded the range of the linkedlist, try to enter a proper value"
      );

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;
    let i = 0;

    while (i < index) {
      i++;
      prev = current;
      current = current.next;
    }

    this.size--;
    prev.next = current.next;
    current = null;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.insertLast(1);
linkedList.insertLast(2);
linkedList.insertLast(3);
linkedList.insertAtIndex(0, "I'm first :)");
linkedList.insertAtIndex(linkedList.getSize() - 1, "I'm last :)");
linkedList.insertAtIndex(2, "I'm at the middle of the list!");
// linkedList.removeAtIndex(2);
linkedList.printListData();
linkedList.clearList();
console.log("-----------------------------");
console.log("After clearing the linkedlist");
console.log("-----------------------------");
console.log(linkedList.getSize());
linkedList.printListData();
