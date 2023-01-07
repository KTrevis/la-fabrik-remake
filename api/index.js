const express = require("express")
const cors = require("cors")
const app = express()

const admin = require("./admin")

app.use(cors())
app.listen(5000, () => console.log("Server started at http://localhost:5000"))

admin.run(app)