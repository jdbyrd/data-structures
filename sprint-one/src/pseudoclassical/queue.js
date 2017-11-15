var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queue = {};
  this.count = 0;
  this.front = 0;
  this.back = 0;

};

Queue.prototype.size = function() {
  return this.count;
};

Queue.prototype.enqueue = function(string) {
  this.queue[this.back] = string;
  this.back++;
  this.count++;
}; 

Queue.prototype.dequeue = function() {
  if(this.count!== 0){
    this.count--;
    this.front++;
    return this.queue[this.front - 1];
  }
};





