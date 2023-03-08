module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/vouchers/count',
            handler: 'voucher.count',
        },
    ]
}