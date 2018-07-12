module.exports = function(app, db) {
    app.get('/api/some', (req, res) => {
        res.send({some: 'some shit'})
    });


}