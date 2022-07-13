// 叶子节点
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
// 二叉树
export default class BinaryTreeHelper {
  constructor(array) {
    this.root = this.arrayToBinaryTree(array);
  }
  // 将数组转化为二叉树
  arrayToBinaryTree(arr) {
    let root = new TreeNode(arr[0], null, null);
    treeAdd(root, 1, 2, 1, "left");
    return root;
    // 把数组添加
    function treeAdd(node, i, j, distance, dirction) {
      if (node === null) return;
      if (arr[i] === undefined) return;
      if (arr[j] === undefined) return;
      let node1 = arr[i] === null ? null : new TreeNode(arr[i], null, null);
      let node2 = arr[j] === null ? null : new TreeNode(arr[j], null, null);
      node.left = node1;
      node.right = node2;
      if (dirction === "left") {
        distance *= 2;
        treeAdd(node1, i + distance, j + distance, distance, "left");
        distance += 2;
        treeAdd(node2, i + distance, j + distance, distance, "right");
      }
      else if (dirction === "right") {
        distance *= 2;
        treeAdd(node2, i + distance, j + distance, distance, "right");
        distance -= 2;
        treeAdd(node1, i + distance, j + distance, distance, "left");
      }
    }
  };
  
  // 中序遍历
  inOrderTraversal() {
    let result = [];
    inOrder(this.root);
    console.log(result.join(" --> "));
    function inOrder(root) {
      if (root === null) return;
      inOrder(root.left);
      result.push(root.val);
      inOrder(root.right);
    }
  };

  // 先序遍历
  preOrderTraversal() {
    let result = [];
    inOrder(this.root);
    console.log(result.join(" --> "));
    function inOrder(root) {
      if (root === null) return;
      result.push(root.val);
      inOrder(root.left);
      inOrder(root.right);
    }
  }

  // 后序遍历
  postOrderTraversal() {
    let result = [];
    inOrder(this.root);
    console.log(result.join(" --> "));
    function inOrder(root) {
      if (root === null) return;
      inOrder(root.left);
      inOrder(root.right);
      result.push(root.val);
    }
  }

  // 打印树结构
  logTree(initDepth = 0) {
    let result = [];
    recursion({ val: "root" }, "", this.root, 0);
    console.groupCollapsed(`Binary Tree Map(Parent Node / subtree)`);
    for (let i = initDepth, len = result.length; i < len; i++) {
      const depth = result[i];
      console.groupCollapsed(`第${i + 1}层`);
      for (let element of depth) {
        console.log(element);
      }
      console.groupEnd();
    }
    console.groupEnd();
    function recursion(parent, position, root, depth) {
      if (root === null) return;
      if (result[depth] === undefined) result[depth] = [];
      result[depth].push(parent.val === "root" ? `(null / root) ${root.val}` : `(${parent.val} / ${position}) ${root.val}`);
      recursion(root, "left", root.left, depth + 1);
      recursion(root, "right", root.right, depth + 1);
    }
  }
}