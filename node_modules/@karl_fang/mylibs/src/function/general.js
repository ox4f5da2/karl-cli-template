/**
 * @class 各种常用函数
 */
export default class MyFunctions {
  /**
   * 函数柯里化
   * @param {function} fn 要柯里化的原函数
   * @param  {...any} initArgs 初始化fn的参数
   * @returns {function} 柯里化后的函数
   */
  static currying(fn, ...initArgs) {
    let [that, len, args] = [this, fn.length, initArgs];
    return function () {
      let _args = [...args, ...arguments];
      if (_args.length < len) return MyFunctions.currying.call(that, fn, ..._args);
      return fn.apply(that, _args);
    }
  }
  /**
   * 浅拷贝
   * @param {object} newObj 拷贝后的对象
   * @param {object} oldObj 要拷贝的对象
   * @returns {void} 将oldObj拷贝给newObj
   */
  static clone(newObj, oldObj) {
    return Object.assign(newObj, oldObj);
  }
  /**
   * 深拷贝
   * @param {object} newObj 拷贝后的对象
   * @param {object} oldObj 要拷贝的对象
   * @returns {void} 将oldObj拷贝给newObj
   */
  static deepClone(newObj, oldObj) {
    for (let key in oldObj) {
      if (oldObj[key] instanceof Array) {
        newObj[key] = [];
        this.deepClone(newObj[key], oldObj[key]);
      }
      else if (oldObj[key] instanceof Object) {
        newObj[key] = {};
        this.deepClone(newObj[key], oldObj[key]);
      }
      else {
        newObj[key] = oldObj[key];
      }
    }
  }
  /**
   * arguments是返回的函数传入的参数
   * 另一个版本写法，这样就不用设置this和arguments了
   * clearTimeout(timer);
   * timer = setTimeout( () => {
   *   console.log(this);
   *   fn.apply(this, arguments);
   * }, delay);
   */
  /**
   * 防抖
   * @param {function} fn 绑定防抖的函数
   * @param {number} delay 延迟时间
   * @returns {function} 返回防抖函数
   * @example let buttons = document.querySelector('button');
   * function click(name){console.log('click' + name);}
   * buttons.addEventListener('click', MyFunctions.debounce(click, 1000).bind(buttons, 'hahaha'));
   */
  static debounce(fn, delay) {
    let timer = null;
    return function () {
      const [that, args] = [this, arguments];
      clearTimeout(timer);
      timer = setTimeout(function () {
        console.log(that);
        fn.apply(that, args);
      }, delay);
    }
  }
  /**
   * 节流
   * @param {function} fn 绑定节流的函数
   * @param {number} delay 延迟时间
   * @returns {function} 返回节流函数
   * @example let buttons = document.querySelector('button');
   * function click(name){console.log('click' + name);}
   * buttons.addEventListener('click', MyFunctions.throttle(click, 1000).bind(buttons, 'hahaha'));
   */
  static throttle(fn, delay) {
    let pre = 0;
    return function () {
      let [now, that, args] = [+new Date(), this, arguments];
      if (now - pre >= delay) {
        fn.apply(that, args);
        pre = now;
      }
    }
  }
  /**
   * 时间格式化
   * @param {string} time 【可选】想要格式化的时间，默认为""
   * @param {string} format 【可选】想要转换成的时间格式，默认为""
   * @returns {string | number[]} 格式化后的时间 ｜ 返回年月日时分秒的具体时间
   * @example // YY：年，MM：月，DD：日，hh：小时，mm：分钟，ss：秒数
   * MyFunctions.timeFormat(new Date(), 'YY-MM-DD hh:mm:ss') // 2022-04-05 22:57:01
   * MyFunctions.timeFormat(new Date()) // [2022, 4, 5, 22, 56, 27]
   */
  static timeFormat(time="", format="") {
    const myDate = time === "" ? new Date() : new Date(time);
    let [year, month, date, hour, minute, second] = [myDate.getFullYear(), myDate.getMonth() + 1, myDate.getDate(), myDate.getHours(), myDate.getMinutes(), myDate.getSeconds()];
    if (format === "") return [year, month, date, hour, minute, second];
    return format.replace(/YY|MM|DD|hh|mm|ss/g, function (matchStr) {
      var tokenMap = {
        'YY': addZero(year),
        'MM': addZero(month),
        'DD': addZero(date),
        "hh": addZero(hour),
        'mm': addZero(minute),
        'ss': addZero(second)
      };
      return tokenMap[matchStr];
    })
    function addZero(number) {
      return number < 10 ? '0' + number : number;
    }
  }
  /**
   * 时间转星期
   * @param {string} time 合法时间字符串
   * @param {string} prefix 字符串前缀，默认为"星期"，如: "周"、"星期"等
   * @returns {string} 星期结果
   * @example console.log(MyFunctions.timeToDay('2022-4-6', "星期")); // 星期三
   */
  static getDay(time="", prefix="星期") {
    let datelist = ['日', '一', '二', '三', '四', '五', '六',]
    return prefix + datelist[time === "" ? new Date().getDay() : new Date(time).getDay()];
  }
  /**
   * 图片转base64
   * @param {object} img 图片的DOM对象
   * @returns {string} 图片转换后的base64结果
   * @example let image = new Image();
   * image.src = './js.png';
   * image.onload = function () { console.log(MyFunctions.imageToBase64(image));}
   */
  static imageToBase64(img) {
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    return canvas.toDataURL(`image/${img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase()}`);
  }
  /**
   * 整数转罗马数字
   * @param {number} num 整数
   * @return {string} 罗马数字
   */
  static intToRoman(num) {
    // I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
    let romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let romanNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; // 存储每个字符代表的数字大小
    let romanCharNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 用来存储各种字符有几个
    let str = "";
    for (let i = 0, len = romanNum.length; i < len; i++) {
      romanCharNum[i] = Math.floor(num / romanNum[i]);
      num %= romanNum[i];
    }
    for (let i = 0, len = romanCharNum.length; i < len; i++) {
      str += romanCharNum[i] === 0 ? "" : romanArr[i].repeat(romanCharNum[i]);
    }
    return str;
  };
  /**
   * 整数转中文汉字
   * @param {number} num 正实数
   * @param {boolean} ifCapital 是否转大写汉字
   * @return {string} 中文汉字
   * @description 当ifCapital为false时只能输入正整数: 0 ～ 999999999999；当ifCapital为true时的输入范围: 0 ～ 999999999999.99
   * @example console.log(MyFunctions.intToChinese(2032100443.08, true)); 
   * // 贰拾亿叁仟贰佰壹拾万零肆佰肆拾元捌分
   */
  static intToChinese(num, ifCapital = false) {
    const unit1 = [
      ["十", "百", "千"],
      ["拾", "佰", "仟"]
    ],
      unit2 = [
        ["万", "亿"],
        ["万", "亿"]
      ],
      unit3 = ["元", "角", "分"],
      chinese = [
        ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
        ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"]
      ],
      idx = ifCapital === true ? 1 : 0,
      arr = [];
    let cnt = 0, i = 0, j = 0, copyNum = undefined;
    if (ifCapital) copyNum = num;
    num = Number(num.toFixed(0));
    while (num) {
      if ((num % 10 === 0 && (arr.length !== 0 && arr[arr.length - 1] !== "零" && arr[arr.length - 1] !== "亿" && arr[arr.length - 1] !== "万")) || num % 10 > 0) arr.push(chinese[idx][num % 10]);
      num = Math.floor(num / 10);
      if (num % 10 > 0) {
        if (cnt >= 3 && (cnt === 3 || cnt === 7)) {
          if (arr[arr.length - 1] === "万") arr.pop();
          arr.push(unit2[idx][j++]);
        }
        else {
          arr.push(unit1[idx][i++ % 3]);
        }
      }
      else if (num % 10 === 0 && (cnt === 3 || cnt === 7)) {
        if (arr[arr.length - 1] === "万") arr.pop();
        arr.push(unit2[idx][j++]);
      }
      else {
        i++;
      }
      cnt++;
    }
    if (arr[arr.length - 1] === "亿" || arr[arr.length - 1] === "万") arr.pop();
    arr.reverse();
    if (ifCapital) {
      let str = copyNum.toFixed(2);
      let decimal = str.slice(str.indexOf(".") + 1), cnt2 = 0;
      arr.push(unit3[cnt2++]);
      if (idx >= 0) {
        for (let i = 0; i <= 1; i++) {
          if (decimal[i] !== '0') arr.push(chinese[idx][decimal[i]], unit3[cnt2]);
          cnt2++;
        }
      }
      if (decimal === '00') arr.push("整");
    }
    return arr.join("");
  }
}