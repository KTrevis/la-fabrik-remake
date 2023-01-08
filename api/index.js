const express = require("express")
const cors = require("cors")
const app = express()

const admin = require("./admin")
const galerie = require("./galerie")

app.use(express.static("../dist"))

app.use(cors())
app.listen(5000, () => console.log("Server started at http://localhost:5000"))

admin.run(app)
galerie.run(app)

module.exports = app