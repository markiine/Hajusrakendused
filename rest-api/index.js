const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());        // Avoid CORS errors in browsers
app.use(express.json()) // Populate req.body

require("./routes/widgetsRoutes")(app)
require("./routes/greetingsRoutes")(app)

app.listen(8080, () => {
    console.log(`API up at: http://localhost:8080`)
})
