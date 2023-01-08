exports.run = (app) => {
    const sqlite = require("sqlite3").verbose()

    let db = new sqlite.Database("./database.db", (err) => {
        if (err) console.error(err)

        console.log("Connected to ./database.db")
    })

    function createEvent() {
        app.post("/api/admin/events/create", (req, res) => {
            db.serialize(() => {
                db.run(`INSERT INTO events(name, date) VALUES('${req.body.name}', '${req.body.date}')`)
            })

            res.send(req.body)
        })
    }

    function queryEvents() {
        app.get("/api/admin/events/query", (req, res) => {
            db.serialize(() => {
                events = db.all("SELECT * FROM events", (err, rows) => {
                    if (err) {
                        console.error(err)
                        res.send({ error: err })
                        return
                    }
                    res.send({ events: rows })
                })
            })
        })
    }

    function main() {
        createEvent()
        queryEvents()
    }

    main()
}