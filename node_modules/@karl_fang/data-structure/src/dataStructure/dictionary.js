/**
 * @class 字典
 */
export default class Dictionary {
  /**
   * 字典
   * @param {array} array 以key+value形式的对象数组
   * @example array = [{key: 1, val: 1}, {key: 'hahaha', val: 'xixixi'}];
   */
  constructor(array = []) {
    this.size = 0;
    this.dataStore = {};
    this.init(array);
  }

  init(array) {
    array.forEach(item => {
      let { key, val } = item;
      this.set(key, val);
    })
  }

  /**
   * 判断是否存在键值
   * @param {any} key 键
   * @returns {boolean} 
   */
  has(key) {
    return this.dataStore.hasOwnProperty(key);
  }

  /**
   * 增加(相同键名则会后者被覆盖)
   * @param {any} key 键
   * @param {any} val 值
   * @returns {void} 无返回值
   */
  set(key, val) {
    !this.has(key) && ++this.size;
    this.dataStore[key] = val;
  }

  /**
   * 查找指定键的值
   * @param {any} key 键
   * @returns {any} 返回对应键的值
   */
  find(key) {
    return this.dataStore[key];
  }

  /**
   * 删除指定键的值
   * @param {any} key 键
   * @returns {void} 无返回值
   */
  remove(key) {
    delete this.dataStore[key];
    --this.size;
  }

  /**
   * 获取字典中键值对的个数
   * @param {void} 无需传入参数
   * @returns {number} 返回字典中键值对的个数
   */
  length() {
    return this.size;
  }

   /**
   * 展示字典的键值对
   * @param {void} 无需传入参数
   * @returns {void} 无返回值
   */
  toString() {
    console.groupCollapsed(`Dictionary:(共${this.size}个)`);
    Object.entries(this.dataStore).forEach(item => console.log(`["${item[0]}"]: ${item[1]}`));
    console.groupEnd();
  }

  /**
   * 清空字典
   * @param {void} 无需传入参数
   * @returns {void} 无返回值
   */
  clear() {
    for (let key in this.dataStore) {
      delete this.dataStore[key];
    }
    this.size = 0;
  }

  /**
   * 按键值排序
   * @param {void} 无需传入参数
   * @returns {void} 无返回值
   */
  sort() {
    console.groupCollapsed(`按键值排序后的字典为:`);
    Object.keys(this.dataStore).sort().forEach(item => console.log(`["${item}"]: ${this.dataStore[item]}`));
    console.groupEnd();
  }
}