let todosList = [
    {
        label: 'todos 1',
        done: false
    },
    {
        label: 'todos 2',
        done: false
    },
    {
        label: 'todos 3',
        done: true
    }
]

module.exports = function(app, db) {
    app.get('/api/todos', (req, res) => {
        console.log(db.collection)
        db.collection('todos').find((err, result) => {
            if (!err) {
                res.send(result)
            }
        })
    });
}