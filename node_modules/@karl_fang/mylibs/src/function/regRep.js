export default class MyRegExp {
  /**
   * 匹配用户名
   * @param {string} string 要匹配的字符串
   * @param {number} start 【可选】最小长度，默认值为4
   * @param {number} end 【可选】最大长度，默认值为16
   * @returns {boolean} 
   * @description 匹配数字大小写字母_-
   */
  static ifValidUserName(string, start = 4, end = 16) {
    let reg = new RegExp(`^[a-zA-Z0-9_-]{${start},${end}}$`, 'g');
    return reg.test(string);
  }
  /**
   * 匹配整数
   * @param {string} string 要匹配的数字字符串
   * @param {"all" | "positive" | "negative"} range 【可选】匹配范围，默认值为"all"
   * @returns {boolean}
   * @description "positive": 正整数，"negative": 负整数，"all": 整数
   * @example console.log(MyRegExp.ifInteger('-123')); // true
   * console.log(MyRegExp.ifInteger('-123', 'positive')); //false
   * console.log(MyRegExp.ifInteger('+123', 'positive')); // true
   * console.log(MyRegExp.ifInteger('123', 'positive')); // true
   * console.log(MyRegExp.ifInteger('-123', 'negative')); // true
   */
  static ifInteger(string, range = "all") {
    let reg = null;
    switch (range) {
      case 'positive': reg = new RegExp(/^[+]?\d+$/); break;
      case 'negative': reg = new RegExp(/^-\d+$/); break;
      case 'all': reg = new RegExp(/^[-,+]?\d+$/); break;
      default: break;
    }
    return reg.test(string);
  }
  /**
   * 匹配浮点数
   * @param {string} string 要匹配的数字字符串
   * @param {"all" | "positive" | "negative"} range 匹配范围
   * @returns {boolean}
   * @description "positive": 正数，"negative": 负数，"all": 实数
   * @example console.log(MyRegExp.ifFloat('-123.05')); // true
   * console.log(MyRegExp.ifFloat('-123', 'positive')); //false
   * console.log(MyRegExp.ifFloat('+123', 'positive')); // true
   * console.log(MyRegExp.ifFloat('123.80', 'positive')); // true
   * console.log(MyRegExp.ifFloat('-123.00', 'negative')); // true
   */
  static ifFloat(string, range = "all") {
    let reg = null;
    switch (range) {
      case 'positive': reg = new RegExp(/^[+]?\d*\.?\d+$/); break;
      case 'negative': reg = new RegExp(/^-\d*\.?\d+$/); break;
      case 'all': reg = new RegExp(/^[-,+]?\d*\.?\d+$/); break;
      default: break;
    }
    return reg.test(string);
  }
  /**
   * 匹配邮箱
   * @param {string} string 要匹配的邮箱
   * @returns {boolean} 
   */
  static ifValidEmail(string) {
    let reg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, 'g');
    return reg.test(string);
  }
  /**
   * 匹配手机号
   * @param {string} string 要匹配的手机号
   * @returns {boolean} 
   */
  static ifValidPhone(string) {
    let reg = new RegExp(/^1[34578]\d{9}$/, 'g');
    return reg.test(string);
  }
  /**
   * 匹配身份证
   * @param {string} string 要匹配的身份证
   * @returns {boolean} 
   */
  static ifValidIDCard(string) {
    let reg = new RegExp(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, 'g');
    return reg.test(string);
  }
  /**
   * 匹配十六进制颜色
   * @param {string} string 要匹配的十六进制颜色
   * @returns {boolean} 
   */
  static ifValidRGBHex(string) {
    let reg = new RegExp(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, 'g');
    return reg.test(string);
  }
  /**
   * 匹配只有汉字
   * @param {string} string 要匹配的字符串
   * @returns {boolean} 
   */
  static ifOnlyChinese(string) {
    let reg = new RegExp("^[\u4e00-\u9fa5]{0,}$", 'g');
    return reg.test(string);
  }
  /**
   * 匹配只有数字
   * @param {string} string 要匹配的字符串
   * @returns {boolean} 
   */
  static ifOnlyNumber(string) {
    let reg = new RegExp("^[0-9]*$", 'g');
    return reg.test(string);
  }
  /**
   * 匹配只有英文字母
   * @param {string} string 要匹配的字符串
   * @returns {boolean} 
   */
  static ifOnlyLetter(string) {
    let reg = new RegExp("^[A-Za-z]+$", 'g');
    return reg.test(string);
  }
  /**
   * 匹配只有小写字母
   * @param {string} string 要匹配的字符串
   * @returns {boolean} 
   */
  static ifOnlyLowercase(string) {
    let reg = new RegExp("^[a-z]+$", 'g');
    return reg.test(string);
  }
  /**
   * 匹配只有大写字母
   * @param {string} string 要匹配的字符串
   * @returns {boolean} 
   */
  static ifOnlyUppercase(string) {
    let reg = new RegExp("^[A-Z]+$", 'g');
    return reg.test(string);
  }
}