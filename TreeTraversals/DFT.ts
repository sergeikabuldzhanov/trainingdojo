interface Tree<T> {
    value: T
    left: Tree<T> | null
    right: Tree<T> | null
  }

const preorderTraverse = (node:Tree<number>, array:number[]):number[] => {
    // process the node
    // process left subtree
    // proces right subtree
    array.push(node.value);
    if(node.left) preorderTraverse(node.left, array);
    if(node.right) preorderTraverse(node.right, array);
    return array
};

const inorderTraverse = (node:Tree<number>, array:number[]):number[] => {
    // process left subtree
    // process the node
    // proces right subtree
    if(node.left) inorderTraverse(node.left, array);
    array.push(node.value);
    if(node.right) inorderTraverse(node.right, array);
    return array
};

const postorderTraverse = (node:Tree<number>, array:number[]):number[] => {
    // process left subtree
    // proces right subtree
    // process the node
    if(node.left) postorderTraverse(node.left, array);
    if(node.right) postorderTraverse(node.right, array);
    array.push(node.value);
    return array
  };
  

  const tree:Tree<number> = {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null
          },
          right:null
        }
      }
    },
    right: {
      value: 12,
      left: {
        value: 10,
        left: {
          value: 9,
          left: null,
          right: null
        },
        right: {
          value: 11,
          left: null,
          right: null
        }
      }, right:null
    }
  };


  if(JSON.stringify(preorderTraverse(tree, []))=== JSON.stringify([8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11])){
      console.log("Preorder: OK",preorderTraverse(tree, []))
  }
  if(JSON.stringify(inorderTraverse(tree, []))=== JSON.stringify([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])){
      console.log("Inorder: OK",inorderTraverse(tree, []))
  }
  if(JSON.stringify(postorderTraverse(tree, []))=== JSON.stringify([2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8])){
      console.log("Postorder: OK",postorderTraverse(tree, []))
  }