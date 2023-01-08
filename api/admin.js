exports.run = (app) => {
    const adminGalerie = require("./adminGalerie")
    const adminEvents = require("./adminEvents")

    adminGalerie.run(app)
    adminEvents.run(app)

    function logIn() {
        const admin = {
            username: "admin",
            password: "1234"
        }

        app.post("/api/admin/login", (req, res) => {
            if (req.body.username == admin.username && req.body.password == admin.password) {
                return res.send({ connected: true })
            }

            return res.send({ connected: false })
        })
    }

    function main() {
        logIn()
    }

    main()
}