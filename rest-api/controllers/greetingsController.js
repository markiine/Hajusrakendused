let greetings = [
    { id: 1, recipient: "Andre", message: "Merry Christmas!", sender: "Dagne"},
    { id: 2, recipient: "Kert", message: "Ole mõnna!", sender: "Markiine" },
    { id: 3, recipient: "Liisa", message: "Hyva uut!!", sender: "Kotkapoeg" },
]

const getGreetingById = function name (id) {
    return greetings.find(x => x.id == id)
}

//READ
exports.getAll = (req, res) => {
    res.send(greetings)
}
exports.getById = (req, res) => {
    const result = getGreetingById(req.params.id)
    if (typeof result === 'undefined') {
        return res.status(404).send({ error: "Greeting not found" })
    }
    res.send(result)
}

//CREATE
exports.create = (req, res) => {
    if (!req.body.recipient || !req.body.message || !req.body.sender) {
        return res.status(400).send({ error: 'One or all params are missing' })
    }
    let newGreeting = {
        id: greetings[greetings.length - 1].id + 1,
        recipient: req.body.recipient,
        message: req.body.message,
        sender: req.body.sender
    }
    greetings.push(newGreeting)
    res.status(201).location('localhost:8080/greetings/' + (greetings.length - 1)).send(
        newGreeting
    )
}

//UPDATE
exports.update = (req,res) => {
    const result = getGreetingById(req.params.id)
    if (typeof result === 'undefined') {
        return res.status(404).send({ error: "Greeting not found" })
    }
    if (!req.body.recipient || !req.body.message || !req.body.sender) {
        return res.status(400).send({ error: 'One or all params are missing' })
    }
    result.recipient = req.body.recipient
    result.message = req.body.message
    result.sender = req.body.sender
    res.status(200).location('http://localhost:8080/greetings/' + result.id).send(result)

}

//DELETE
exports.delete = (req,res) => {
    const greetingToDelete = getGreetingById(req.params.id)
    if (typeof greetingToDelete === 'undefined') {
        return res.status(404).send({ error: "Greeting not found" })
    }
    greetings = greetings.filter(w => w.id !== greetingToDelete.id)
    res.status(204).send()
}
