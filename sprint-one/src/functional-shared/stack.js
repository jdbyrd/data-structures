var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.stack = {};
  someInstance.count = 0;

  extend(someInstance, stackMethods);

  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {

  size: function() {return this.count;},
  push: function(value) {
    this.stack[this.count] = value;
    this.count++;
  },
  pop: function() {
    (this.count !== 0) ? this.count-- : this.count;
    return this.stack[this.count];
  }
};
