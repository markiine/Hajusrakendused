const widgets = require("../controllers/widgetsController")

module.exports = (app) => {

    //READ
    app.get('/widgets', widgets.getAll)
    app.get('/widgets/:id', widgets.getById)

    //CREATE
    app.post('/widgets', widgets.create)

    //UPDATE
    app.put('/widgets/:id',widgets.update)

    //DELETE
    app.delete('/widgets/:id',widgets.delete)
}
