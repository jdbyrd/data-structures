var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.stack = {};
  someInstance.count = 0;
  return someInstance;
};

var stackMethods = {
  size : function(){return this.count;},
  push : function(string){
    this.count++;
    this.stack[this.count] = string;
  },
  pop : function(){
    if(this.count !== 0){
      this.count--;
      return this.stack[this.count + 1];
    }
  }
};


