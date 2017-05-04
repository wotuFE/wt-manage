/**
 * 过滤函数
 */

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
  }
}
