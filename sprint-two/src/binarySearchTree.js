var BinarySearchTree = function(value) {
  var bTree = Object.create(bTreeMethods);

  bTree.tree = {value: value, left: null, right: null};

  bTree.value = value;
  bTree.left = null;
  bTree.right = null;

  return bTree;
};

var bTreeMethods = {};

bTreeMethods.insert = function(value, parent){
  parent = parent || this;

  var insertTree = BinarySearchTree(value);

  // var insertTree = {value: value, right: null, left: null};
  // if(value < parent.value){
  //   if(parent.left === null){
  //     parent.left = insertTree;
  //   }else{
  //     parent.left = this.insert(value, parent.left);
  //   }
  // }else if(value > parent.value){
  //   if(parent.right === null){
  //     parent.right === insertTree;
  //   }else{
  //     parent.right = this.insert(value, parent.right); 
  //   }
  // }
  if(value > parent.value){
    if(parent.right === null){
      parent.right = insertTree;
    }else{
      this.insert(value, parent.right);
    }
  }
  if(value < parent.value){
    if(parent.left === null){
      parent.left = insertTree;
    }else{
      this.insert(value, parent.left);
    }
  }
};

bTreeMethods.contains = function(value, parent){
  parent = parent || this;

  if(parent.value === value){
    return true;
  }else if(parent.value > value && parent.left !== null){
    return this.contains(value, parent.left);
  }else if(parent.value < value && parent.right !== null){
    return this.contains(value, parent.right);
  }else{
    return false;
  }
};

bTreeMethods.depthFirstLog = function(cd, parent){
  parent = parent || this;

  cd(parent.value);
  if(parent.left !== null){
    this.depthFirstLog(cd, parent.left);
  }
  if(parent.right !== null){
    this.depthFirstLog(cd, parent.right);
  }
};


 
/*
 * Complexity: What is the time complexity of the above functions?
 */
