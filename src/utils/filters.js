/**
 * 过滤函数
 */
/* eslint-disable */
import Pinyin from './pinyin'

export default {
  /**
   * 例：日期格式化
   * @param {Date} date
   */
  dateFormat (date) {
    const nowDate = new Date(date)
    const _year = nowDate.getFullYear()
    const _month = nowDate.getMonth() + 1
    const _date = nowDate.getDate()
    return `${_year}-${_month}-${_date}`
  },
  /**
   * 人名排序sort方法
   */
  compare (val1, val2) {
    val1 = Pinyin.getFullChars(val1).toLowerCase()
    val2 = Pinyin.getFullChars(val2).toLowerCase()

    // 获取较长的拼音的长度
    var length = val1.length > val2.length ? val1.length : val2.length

    // 依次比较字母的unicode码，相等时返回0，小于时返回-1，大于时返回1
    for (var i = 0; i < length; i++) {
      var differ = val1.charCodeAt(i) - val2.charCodeAt(i)
      if (differ === 0) {
        continue
      } else {
        if (val1.charAt(i) === '_') {
          return -1
        }
        return differ
      }
    }
    if (i === length) {
      return val1.length - val2.length
    }
  },
  /**
   * 人名排序
   * @param {Array} arr 一个数组
   * @param {empty} empty
   */
  sortName: (arr, key) => {
    const index = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ*'.split('')
    const segs = []
    let curr
    index.forEach(
      (item, index) => {
        curr = {index: item, data: []}
        arr.forEach(
          (arrItem, arrIndex) => {
            const firstLetter = key
            ? Pinyin.getFullChars(arrItem[key]).toUpperCase()[0]
            : Pinyin.getFullChars(arrItem).toUpperCase()[0]
            if (firstLetter === item) {
              curr.data.push(arrItem)
            }
          }
        )
        if (curr.data.length > 0) {
          curr.data.sort(this.a.compare)
          segs.push(curr)
        }
      }
    )
    return segs
  }
}
