/**
 * 计算属性 -- 获取数据
 */

export default {
  title: state => state.title,
  isNew: state => state.isNew,
  rightObj: state => state.rightObj,
  currentPage: state => state.currentPage,
  // rightBtn: state => state.rightBtn
}
