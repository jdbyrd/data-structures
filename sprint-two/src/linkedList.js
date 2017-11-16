var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if(list.head === null){
      list.head = node;
    }
    if(list.tail !== null){
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    returnVal = list.head.value;
    list.head = list.head.next;
    return returnVal;
  };

  list.contains = function(target) {
    var testVal = list.head.value;
    // while(target !== testVal){
    //   if(testVal === null){
    //     return;
    //   }else{
    //     testVal = testVal.next;  
    //   }
    // }
    return true;
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
