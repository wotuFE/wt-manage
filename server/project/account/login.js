const request = require('request');
const makeIns = async function (ctx) {
    const userInfo = {
        phone,
        password
    } = ctx.request.body;
    // const res = await login(userInfo);
    ctx.body = {
        code: 666,
        msg: 'success'
    };
}
const login = function (postData) {
    return new Promise(function (resolve, reject) {
        request.post({
            url: 'http://localhost/manage/index.php/account/getUserById',
            formData: postData
        }, function optionalCallback(err, httpResponse, body) {
            if (err) {
                // reject(new Error('查询列表失败'));
                console.log('失败');
                throw new Error('添加用户失败');
            } else {
                resolve(body);
            }
        });
    })
}
module.exports = makeIns;