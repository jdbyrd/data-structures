

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var indexValue = this._storage.get(index);
  if(indexValue === undefined){
    indexValue = [];
  }
  indexValue.push([k, v]);
  this._storage.set(index, indexValue);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexValue = this._storage.get(index);
  var returnVal;
  indexValue.forEach(function(value){
    if(value[0] === k){
      returnVal = value[1];
    }
  });
  return returnVal;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexVal = this._storage.get(index);
  indexVal.forEach(function(value){
    if(value[0] === k){
      value[1] = undefined;
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


