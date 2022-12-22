let widgets = [
    { id: 1, name: "Cizzbor", price: 29.99 },
    { id: 2, name: "Woowo", price: 26.99 },
    { id: 3, name: "Crazlinger", price: 59.99 },
]

const getWidgetById = function name (id) {
    return widgets.find(x => x.id == id)
}

//READ
exports.getAll = (req, res) => {
    res.send(widgets)
}
exports.getById = (req, res) => {
    const result = getWidgetById(req.params.id)
    if (typeof result === 'undefined') {
        return res.status(404).send({ error: "Widget not found" })
    }
    res.send(result)
}

//CREATE
exports.create = (req, res) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).send({ error: 'One or all params are missing' })
    }
    let newWidget = {
        id: widgets[widgets.length - 1].id + 1,
        name: req.body.name,
        price: req.body.price
    }
    widgets.push(newWidget)
    res.status(201).location('localhost:8080/widgets/' + (widgets.length - 1)).send(
        newWidget
    )
}

//UPDATE
exports.update = (req,res) => {
    const result = getWidgetById(req.params.id)
    if (typeof result === 'undefined') {
        return res.status(404).send({ error: "Widget not found" })
    }
    if (!req.body.name || !req.body.price) {
        return res.status(400).send({ error: 'One or all params are missing' })
    }
    result.name = req.body.name
    result.price = req.body.price
    res.status(200).location('http://localhost:8080/widgets/' + result.id).send(result)

}

//DELETE
exports.delete = (req,res) => {
    const widgetToDelete = getWidgetById(req.params.id)
    if (typeof widgetToDelete === 'undefined') {
        return res.status(404).send({ error: "Widget not found" })
    }
    widgets = widgets.filter(w => w.id !== widgetToDelete.id)
    res.status(204).send()
}
