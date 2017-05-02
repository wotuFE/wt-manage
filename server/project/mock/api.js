const Mock = require('mockjs');
const { Random } = Mock;

function makeIns(ctx) {
    const data = {
        // 返回随机的一个县名
        county: Mock.Random.county(true),
        // 返回2到10随机整数
        integer:Mock.Random.integer(2,10),
        // 返回一个随机中文名字
        cname: Mock.Random.cname(),
        // 6,随机选取数组中的成员
        amount: Random.pick(['5','10','20','30','40']),
        code: '666',
        msg: 'success'
    }
    ctx.body = data;
}
module.exports = makeIns;