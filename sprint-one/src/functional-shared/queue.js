var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.queue = {};
  someInstance.count = 0;
  someInstance.front = 0;
  someInstance.back = 0;

  extend(someInstance, queueMethods);

  return someInstance;

};

var extend = function(to, from) {
  for (key in from) {
    to[key] = from[key]; 
  }
};

var queueMethods = {
  enqueue : function(string) {
    this.queue[this.back] = string;
    this.back++;
    this.count++;
  },
  dequeue : function() {
    if(this.count !== 0){
      this.front++;
      this.count = this.back-this.front;
      return this.queue[this.front - 1];
    }
  },
  size : function() {return this.count;}
};


