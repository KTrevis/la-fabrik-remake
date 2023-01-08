const express = require("express")
const cors = require("cors")
const app = express()

const port = process.env.PORT || 5000

const admin = require("./admin")
const galerie = require("./galerie")

app.use("/images", express.static("./public"))
app.use(express.static("../dist"))

app.use(cors())
app.listen(port, () => console.log(`Server started at http://localhost:${port}`))

admin.run(app)
galerie.run(app)

module.exports = app