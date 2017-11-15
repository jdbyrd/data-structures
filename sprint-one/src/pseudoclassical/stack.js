var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stack = {};
  this.count = 0;

};

Stack.prototype.size = function(){
  return this.count;
};

Stack.prototype.push = function(string){
  this.stack[this.count] = string;
  this.count++;
};

Stack.prototype.pop = function(){
  if(this.count !== 0){
    this.count--;
    return this.stack[this.count];
  }
};


