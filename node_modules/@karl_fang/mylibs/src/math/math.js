/**
 * @class 数学工具库
 */
export default class MathTools {
  /**
   * 数组元素之和
   * @param {number[]} nums 全数字数组
   * @returns {number} 数组中所有数字之和
   * @example console.log(MathTools.add([3, 4])); // 7
   */
  static add(nums) {
    return nums.reduce((pre, curr) => pre += curr, 0);
  }
  /**
   * 数组最大值
   * @param {number[]} array 全数字数组
   * @returns {number} 数组中最大值
   * @example console.log(MathTools.max([3, 4])); // 4
   */
  static max(array) {
    return Math.max(...array);
  }
  /**
   * 数组最小值
   * @param {number[]} array 全数字数组
   * @returns {number} 数组中最小值
   * @example console.log(MathTools.min([3, 4])); // 3
   */
  static min(array) {
    return Math.min(...array);
  }
  /**
   * 数组平均值
   * @param {number[]} array 全数字数组
   * @param {number} precision 【可选】保留的小数位数，默认保留3位小数
   * @returns {string} 数组中平均值
   * @example console.log(MathTools.mean([3, 4])); // 3.500[注意返回的是字符串]
   */
  static mean(array, precision = 3) {
    return (this.add(array) / array.length).toFixed(precision);
  }
  /**
   * 按属性排序
   * @param {array} array 
   * @param {string} param 指定的键值
   * @param {'desc' | 'asc'} method 
   * @returns 排序后的数组
   */
  static sortBy(array, param, method = 'desc') {
    // method: desc/asc
    if (method === 'desc') return array.sort(function (x, y) {
      if(x[param] < y[param]) return 1;
      else if(x[param] > y[param]) return -1;
      else return 0;
    });
    else if (method === 'asc') return array.sort(function (x, y) {
      if(x[param] > y[param]) return 1;
      else if(x[param] < y[param]) return -1;
      else return 0;
    });
  }
  /**
   * 计算乘法
   * @param {number} multiplier1 乘数1
   * @param {number} multiplier2 乘数2
   * @returns {number} 两数相乘结果
   */
  static multiple(multiplier1, multiplier2) {
    // 快速乘
    let result = 0;
    while (multiplier2) {
      if (multiplier2 & 1) result += multiplier1;
      multiplier1 += multiplier1;
      multiplier2 = multiplier2 >> 1
    }
    return result;
  }
  /**
   * 计算幂乘
   * @param {number} base 底数
   * @param {number} index 指数
   * @returns {number} base^index
   */
  static pow(base, index) {
    // 快速幂
    let result = 1;
    while (index) {
      if (index & 1) result *= base;
      base *= base;
      index = index >> 1;
    }
    return result;
  }
  /**
   * 生成指定范围内的随机数
   * @param {number} lower 下界
   * @param {number} upper 上界
   * @param {number} precision 【可选】精度，默认小数位数为0
   * @returns {string} 
   */
  static random(lower, upper, precision = 0) {
    return (Math.random() * (upper - lower) + lower).toFixed(precision);
  }
  /**
   * 生成指定范围内步长固定的数组
   * @param {number} start 下界
   * @param {number} end 上界
   * @param {number} step 【可选】步长，默认为1
   * @returns {number[]}
   * @example console.log(MathTools.range(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]
   * console.log(MathTools.range(3, 10, 2)); // [ 3, 5, 7, 9 ]
   */
  static range(start, end, step = 1) {
    let arr = [], cnt = 0;
    for (let i = start; i <= end; i += step) {
      arr[cnt++] = i;
    }
    return arr;
  }
  /**
   * 产生数据集合
   * @param {number} lower 下界
   * @param {number} upper 上界
   * @param {number} num 【可选】产生数字的个数，默认为1
   * @param {boolean} ifUnique 【可选】数组中是否含有相同元素，默认为false
   * @returns {number[]} 
   * @example console.log(MathTools.generateSets(3, 10, 10)); // [6, 5, 9, 3, 4, 8, 4, 8, 9, 7]
   * console.log(MathTools.generateSets(3, 10, 8, true)); // [9, 5, 6, 8, 7, 10, 3, 4]
   * console.log(MathTools.generateSets(3, 10, 9, true)); // [9, 5, 6, 8, 7, 10, 3, 4]
   */
  static generateSets(lower, upper, num = 1, ifUnique = false) {
    let set = null, arr = [];
    if (ifUnique === true) set = new Set();
    while ((!ifUnique && arr.length < num) || (ifUnique && (set.size !== (upper - lower + 1)) && (set.size < num) ) ) {
      !ifUnique && arr.push(MathTools.random(lower, upper) - 0);
      ifUnique && set.add(MathTools.random(lower, upper) - 0);
    }
    return (ifUnique === true ? Array.from(set) : arr);
  }
}