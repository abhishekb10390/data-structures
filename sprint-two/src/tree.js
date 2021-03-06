var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};
treeMethods.contains = function(target) {
  
  if (this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;   
      }    
    }
  }
  return false;
};

treeMethods.remove = function(tree) {
  var parent = tree.parent;
  tree.parent = null;
  parent.children.forEach(function(child, i, arr) {
    if (child === tree) {
      arr.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
