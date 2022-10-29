class LinkedList {
  constructor() {
    this.head;
    this.length = 0;
  }

  insertAtHead(value) {
    this.head = new LinkedListNode(value, this.head);
    this.length++;
  }

  print() {
    let output = "";
    let current = this.head;

    while (current) {
      output += `${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    //two pointer approach
    while (current != null) {
      // 5 -> 6 ->7 -> null
      // null <- 5 <- 6 <- 7
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
    this.prev = null;
  }
}

LinkedList.createSampleNodes = (...values) => {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
