var doublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if(list.head === null) {
      list.head = node;
    } else {
    }
    if (list.tail !== null) {
      node.previous = list.tail;
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var headNode = list.head;
    list.head = list.head.next;
    return headNode.value;
  };

  list.removeTail = function() {
    var tailNode = list.tail;
    list.tail = list.tail.previous;
    return tailNode.value;
  };

  list.contains = function(target) {
    var testNode = list.head;
    var test = false;
    while (test === false && testNode !== null) {
      test = (testNode.value === target) ? true : false;
      // if(testNode.value === target){
      //   test = true;
      // }
      testNode = testNode.next;
    }
    return test;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
