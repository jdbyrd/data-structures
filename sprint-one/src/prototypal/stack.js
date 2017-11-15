var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.stack = {};
  someInstance.count = 0;
  console.log(someInstance);

  return someInstance;
};

var stackMethods = {
  size :  function(){return this.count;},
};


