var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.queue = {};
  someInstance.front = 0;
  someInstance.back = 0;
  someInstance.total = 0;
  someInstance.count = 0;

  return someInstance;
};

var queueMethods = {
  size: function() {return this.count;},
  enqueue: function(string) {
    this.queue[this.back] = string;
    this.back++;
    this.total++;
    this.count++;
  },
  dequeue: function() {
    if(this.count !== 0){
      this.front++;
      this.count--;
    }
    return this.queue[this.front - 1];
  }
};

