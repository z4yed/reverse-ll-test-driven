const LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
  test("insert node at index 0", () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    ll.insertAtHead(20);
    expect(ll.length).toBe(2);
    expect(ll.head.value).toBe(20);
  });
});

describe("#reverse", () => {
  test("Reverse current list", () => {
    const ll = LinkedList.createSampleNodes(10, 20, 30);
    ll.reverse();
    expect(ll.head.value).toBe(30);
  });
});
