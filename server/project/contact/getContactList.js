const Mock = require('mockjs')
const { Random } = Mock

// 随机生成手机号码
function getMoble () {
  var prefixArray = ['130', '131', '132', '133', '135', '137', '138', '170', '187', '189']
  var i = parseInt(10 * Math.random())
  var prefix = prefixArray[i]

  for (var j = 0; j < 8; j++) {
    prefix = prefix + Math.floor(Math.random() * 10)
  }
  return prefix
}

// 随机生成年龄
function getAge () {
  return parseInt((Math.random() * 31) + 15)
}

// 生成1或2
function oneOrTwo () {
  return parseInt((Math.random() * 2) + 1)
}

function ins (ctx) {
  /**
   * @param {String} num 需要数据数量
   */
  try {
    const num = Number(ctx.request.query.num) || 30
    const data = []
    for (let i = 0; i < num; i++) {
      const obj = Mock.mock({
        id: i + 1,
        age: getAge(),
        sex: oneOrTwo(),
        nativePlace: Random.city(true),
        github: Random.url('https', 'github.com'),
        headImg: Random.image('120x120'),
        skillTree: Random.cword(2, 10),
        realName: Random.cname(),
        phone: getMoble()
      })
      data.push(obj)
    }
    ctx.body = {
      code: 666,
      data: data
    }
  } catch (error) {
    throw new Error(error)
  }
}
/* eslint-disable */
module.exports = ins