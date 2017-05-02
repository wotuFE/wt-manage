/**
 * 计算属性 -- 获取数据
 */

export default {
  title: state => state.title,
  isNew: state => state.isNew,
  currentPage: state => state.currentPage
}
