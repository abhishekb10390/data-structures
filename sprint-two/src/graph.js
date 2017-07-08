

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push({val: node, edge: []});
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].val === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { 
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].val === node) {
      this.nodes.splice(i, 1);
    }
  }
  for (var i = 0; i < this.nodes.length; i++) {
    this.nodes[i].edge.forEach(function(ele, k, arr) {
      if (ele === node) {
        arr.splice(k, 1);
      }
    });
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for ( var i = 0; this.nodes.length; i++) {
    if (this.nodes[i].val === fromNode) {
      return this.nodes[i].edge.includes(toNode);
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].val === fromNode) {
      this.nodes[i].edge.push(toNode); 
    }
    if (this.nodes[i].val === toNode) {
      this.nodes[i].edge.push(fromNode);
    }
  } 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].val === fromNode) {
      this.nodes[i].edge.forEach(function(ele, g,arr) {
        if (ele === toNode) {
          arr.splice(g, 1);
        }
      });
    }
  }
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].val === toNode) {
      this.nodes[i].edge.forEach(function(ele, k,arr) {
        if (ele === fromNode) {
          arr.splice(k, 1);
        }
      });
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(ele,i,arr) {
    cb(ele.val);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


