var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  extend(newTree, treeMethods);

  newTree.children = {};  // fix me
  childCount = 0;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children[childCount] = Tree(value);
  childCount++;
};

treeMethods.contains = function(target) {
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
