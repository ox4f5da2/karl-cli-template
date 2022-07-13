/**
 * @class URL操作函数
 */
export default class MyURL {
  constructor(url) {
    this.url = url;
    this.myQuery = new URLSearchParams(new URL(this.url).search.slice(1));
  }
  /**
     * 获取URL参数
     * @param {string[]} params 含有URL合法属性的数组
     * @returns {object} 以params中的元素为键值的对象
     * @example let url = new MyURL('http://127.0.0.1:5500/test.html?b=aaa&c=123&a=1234');
     * console.log(url.getURLParams(['host', 'href'])); // {host: '127.0.0.1:5500', href: 'http://127.0.0.1:5500/test.html?b=aaa&c=123&a=1234'}
     * // 有效值包含hash, host, hostname, href, origin, password, pathname, port, protocol, search, searchParams, username
     */
  getURLParams(params) {
    let [obj, myURL] = [{}, new URL(this.url)];
    for (let key of params) {
      obj[key] = myURL[key];
    }
    return obj;
  }
  /**
   * 获取URL中query的参数
   * @param {string[]} params URL中query含有参数的数组，可选，如果不传则返回所有参数
   * @param {'object' | 'string'} returnType URL中query含有参数的数组，可选，如果不传则返回所有参数
   * @returns {object | string} 以params中的元素为键值的对象
   * @example let url = new MyURL('http://127.0.0.1:5500/test.html?b=aaa&c=123&a=1234');
   * console.log(url.getURLQueryParams(['a'])); // {a: '1234'}
   * url.getURLQueryParams();
   * // {b: 'aaa', c: '123', a: '1234'}
   */
  getURLQueryParams(params = [], returnType = 'object') {
    if (returnType === 'object') {
      let obj = {}, myQuery = this.myQuery;
      if (params.length !== 0) {
        for (let query of params) {
          obj[query] = myQuery.get(query);
        }
      }
      else {
        for (let query of myQuery.entries()) {
          obj[query[0]] = query[1];
        }
      }
      return obj;
    }
    else if (returnType === 'string') {
      return this.myQuery.toString();
    }
  }
  /**
   * 插入URL搜索参数:支持链式编程
   * @param {object} paramObj 以键值对的形式输入想要插入的新搜索参数
   * @returns {MyURL} 返回实例对象
   */
  appendURLQueryParams(paramObj) {
    let myQuery = this.myQuery;
    for (let key in paramObj) {
      myQuery.append(key, paramObj[key]);
    }
    return this;
  }
  /**
   * 删除URL搜索参数:支持链式编程
   * @param {string[]} params 想要删除的搜索参数
   * @returns {MyURL} 返回实例对象
   * @example let url = new MyURL('http://127.0.0.1:5500/test.html?b=aaa&c=123&a=1234');
   * let res = url.appendURLQueryParams({user: 'karl'}).deleteURLQueryParams(['a']).getURLQueryParams(undefined, 'string');
   * console.log(res); // b=aaa&c=123&user=karl
   */
  deleteURLQueryParams(params) {
    let myQuery = this.myQuery;
    for (let name of params) {
      myQuery.delete(name);
    }
    return this;
  }
  /**
   * 判断指定的键名对应的值是否存在
   * @param {string[]} params 要判断的键值所组成的数组
   * @returns {boolean[]} params[i]的查询结果
   * @example let url = new MyURL('http://127.0.0.1:5500/test.html?b=aaa&c=123&a=1234');
   * console.log(url.hasURLQueryParams(['a', 'b', 'd'])); // [true, true, false]
   */
  hasURLQueryParams(params) {
    return [...params].map(val => this.myQuery.has(val));
  }
}