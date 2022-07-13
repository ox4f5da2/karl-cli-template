/**
 * @param {array} array
 * @class 数组工具库
 */
export default class ArrayTools {
  constructor(array) {
    this.array = array;
  }
  /**
   * 数组去重
   * @returns {array} 去重后的数组
   */
  getUnique() {
    return Array.from(new Set(this.array));
  }
  /**
   * 产生全为0元素的指定行列数数组
   * @param {number} row 【可选】行数，默认值为1
   * @param {number} column 【可选】列数，默认值为1
   * @returns {number[]} 返回row*column个元素的全0数组
   */
  static zero(row = 1, column = 1) {
    let arr = [];
    for (let i = 1; i <= row; i++){
      arr.push(new Array(column).fill(0));
    }
    return arr;
  }
  /**
   * 产生单位矩阵
   * @param {number} order 【可选】单位矩阵阶数，默认值为1
   * @returns {number[]} 返回order阶的单位矩阵
   */
  static unit(order = 1) {
    let arr = [];
    for (let i = 1; i <= order; i++){
      arr.push(new Array(order).fill(0));
      arr[i - 1][i - 1] = 1;
    }
    return arr;
  }
  /**
   * 填充矩阵
   * @param {number} row 【可选】行数，默认为1
   * @param {number} column 【可选】列数，默认为1
   * @param {number | string | boolean} fill 【可选】填充字符，默认为0
   * @returns {array} 返回填充后的矩阵
   */
  static matrix(row = 1, column = 1, fill = 0) {
    let arr = [];
    for (let i = 1; i <= row; i++){
      arr.push(new Array(column).fill(fill));
    }
    return arr;
  }
}