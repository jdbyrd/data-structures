var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var total = 0;
  var front = 0;
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[total] = value;
    total++;
    size = total-front;
  };

  someInstance.dequeue = function() {
    if(size !== 0){
      front ++;
      size = total-front;
    }
    return storage[front-1];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
