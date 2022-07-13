/**
 * @class 叶子节点
 */
class TreeNode {
  /**
   * @param {string | number} val 节点的值
   * @param {TreeNode} left 左子树
   * @param {TreeNode} right 右子树
   */
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

/**
 * @class 二叉搜索树
 */
export default class BinaryTree {
  /**
   * 二叉搜索树
   * @param {void} 无需传入参数
   */
  constructor() {
    this.root = null;
    this.size = 0;
  }

  /**
   * 插入树的节点
   * @param {number} val 节点的值
   * @returns {void} 无返回值
   */
  insert(val) {
    let newNode = new TreeNode(val), that = this;
    if (this.size === 0) {
      this.root = newNode;
      this.size++;
    }
    else {
      insertNode(this.root);
    }
    /**
     * 插入节点的递归函数
     * @param {ListNode} node 父节点
     * @returns {void} 无返回值
     */
    function insertNode(node) {
      if (val > node.val) {
        if (node.right === null) {
          console.log('hahaha');
          node.right = newNode;
          that.size++;
        }
        else insertNode(node.right);
      }
      else if (val < node.val) {
        if (node.left === null) {
          node.left = newNode;
          that.size++;
        }
        else insertNode(node.left);
      }
      else {
        console.log(`节点值为${val}的节点已经存在`);
      }
    }
  }

  /**
   * 获取BST中的最小值
   * @param {void} 无需传入参数
   * @returns {number} 最小值
   */
  getMin() {
    if (!this.root) return null;
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.val;
  }

  /**
   * 获取BST中的最大值
   * @param {void} 无需传入参数
   * @returns {number} 最大值
   */
  getMax() {
    if (!this.root) return null;
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.val;
  }

  /**
   * 判断指定的val值是否存在
   * @param {number} val 需要判断的数字
   * @returns {boolean} 存在返回true，否则返回false
   */
  has(val) {
    return judge(this.root);
    function judge(node) {
      if (node === null) return false;
      if (val > node.val) return judge(node.right);
      else if (val < node.val) return judge(node.left);
      else return true;
    }
  }

  /**
   * 删除指定值的节点
   * @param {number} val 值
   * @returns {void} 无返回值
   * @example 
   * 1 删除的是叶子节点的情况
   * 2 删除的是只有一个子节点的节点
   *  2.1、currentNode 只存在<左节点>的情况
   *   2.1.1 currentNode 等于 root
   *   2.1.2 parentNode.left 等于 currentNode
   *   2.1.3 parentNode.right 等于 currentNode
   *  2.2 currentNode 只存在<右节点>的情况
   *   2.2.1 currentNode 等于 root
   *   2.2.2 parentNode.left 等于 currentNode
   *   2.2.3 parentNode.right 等于 currentNode
   * 3 删除的是有两个子节点的节点
   */
  remove(val) {
    let currentNode = this.root;
    let parentNode = null;
    let isLeftChild = true;
    while (currentNode.val !== val) {
      parentNode = currentNode;
      if (val < currentNode.val) {
        isLeftChild = true;
        currentNode = currentNode.left;
      }
      else {
        isLeftChild = false;
        currentNode = currentNode.right;
      }
      if (currentNode === null) {
        return false;
      }
    }
    if (currentNode.left === null && currentNode.right === null) {
      if (currentNode === this.root) this.root = null;
      else if (isLeftChild) parentNode.left = null;
      else parentNode.right = null;
    }
    else if (currentNode.right === null) {
      if (currentNode === this.root) this.root = currentNode.left;
      else if (isLeftChild) parentNode.left = currentNode.left;
      else parentNode.right = currentNode.left;
    }
    else if (currentNode.left === null) {
      

      if (currentNode === this.root) this.root = currentNode.right;
      else if (isLeftChild) parentNode.left = currentNode.right;
      else parentNode.right = currentNode.right;
    }
    else {
      let successor = getSuccessor(currentNode);
      if (currentNode === this.root) this.root = successor;
      else if (isLeftChild) parentNode.left = successor;
      else parentNode.right = successor;
      successor.left = currentNode.left;
    }
    this.size--;
    
    /**
     * 获取后续节点
     * @param {TreeNode} delNode 
     * @returns 要删除的节点的右边开始查找最小的值
     */
    function getSuccessor(delNode) {
      let successor = delNode;
      let current = delNode.right;
      let successorParent = delNode;
      while (current !== null) {
        successorParent = successor;
        successor = current;
        current = current.left;
      }
      if (successor !== delNode.right) {
        successorParent.left = successor.right;
        successor.right = delNode.right;
      }
      return successor;
    }
  }

  /**
   * 中序遍历
   * @param {void} 无需传入参数
   * @returns {void} 无返回值
   */
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

  /**
   * 先序遍历
   * @param {void} 无需传入参数
   * @returns {void} 无返回值
   */
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

  /**
   * 后序遍历
   * @param {void} 无需传入参数
   * @returns {void} 无返回值
   */
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

  /**
   * 打印树结构
   * @param {number} initDepth 【可选】初始树的深度，默认为0，即从root开始
   * @returns {void} 无返回值
   */
  toString(initDepth = 0) {
    let result = [];
    recursion({ val: "root" }, "", this.root, initDepth);
    console.groupCollapsed(`Binary Tree Map(Parent Node / Subtree)`);
    for (let i = 0, len = result.length; i < len; i++) {
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