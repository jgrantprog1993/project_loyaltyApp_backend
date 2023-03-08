module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/offers/count',
            handler: 'offer.count',
        },
    ]
}