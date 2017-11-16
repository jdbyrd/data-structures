var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if(list.head === null) {
      list.head = node;
    }
    if(list.tail !== null) {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    returnVal = list.head.value;
    list.head = list.head.next;
    return returnVal;
  };

  list.contains = function(target, node) {
    node = node || list.head;
    if(node.value === target) {
      return true;
    } else if(node.next === null) {
      return false;
    } else {
      return list.contains(target, node.next);
    }
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
