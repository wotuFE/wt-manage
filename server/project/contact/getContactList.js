const Mock = require('mockjs');
const { Random } = Mock;
function ins(ctx) {
    const data = Mock.mock({
        realName: Random.cname(),
        phone: '2342342342',
        
    })
    ctx.body = data;
}

module.exports = ins;