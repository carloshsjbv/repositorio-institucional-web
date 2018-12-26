const proxy = [
    {
        context: '/api',
        target: 'http://localhost:9090',
        pathRewrite: {
            '^/api': ''
        }
    }
];

module.exports = proxy;