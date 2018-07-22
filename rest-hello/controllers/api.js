const fs = require('fs');

var url = '1.txt'

var products = [{
    name: 'iPhone',
    price: 6999
}, {
    name: 'Kindle',
    price: 999
}];

module.exports = {
    'POST /api/file': async (ctx, next) => {
        // 设置Content-Type:
        ctx.response.type = 'application/json';
        
        var data = fs.readFileSync(ctx.request.body.url);

        // 设置Response Body:
        ctx.response.body = {
            file: data.toString(),
            request: ctx.request.body
        };
    },

    'GET /api/products': async (ctx, next) => {
        // 设置Content-Type:
        ctx.response.type = 'application/json';
        // 设置Response Body:
        ctx.response.body = {
            products: products
        };
    }

    /*'POST /api/file': async (ctx, next) => {
    var p = {
        name: ctx.request.body.name,
        price: ctx.request.body.price
    };
    products.push(p);
    ctx.response.type = 'application/json';
    ctx.response.body = p;
}*/
}