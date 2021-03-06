var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  extend(newTree, treeMethods);

  newTree.children = {};  // fix me
  newTree.childCount = 0;
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children[this.childCount] = Tree(value);
  this.children[this.childCount].parent = this;
  this.childCount++;
};

treeMethods.contains = function(target, tree) {
  tree = tree || this;
  if(tree.value === target){
    return true;
  }
  for(var key in tree.children){
    if(treeMethods.contains(target, tree.children[key])) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function(tree, childLoc) {
  tree.children[childLoc].parent = undefined;
  tree.children[childLoc] = undefined;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
