exports.run = (app) => {
    const fs = require("fs")
    const multer = require('multer')
    const path = require('path')

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

    function uploadImageToGalerie() {
        // Set up the `multer` middleware with the destination and file name options
        const storage = multer.diskStorage({
            destination: '../public/galerie',
            filename: (req, file, callback) => {
                fs.readdir("../public/galerie", (err, files) => {
                    if (err) {
                        return callback(err)
                    }

                    if (files.length == 0) {
                        return callback(null, "0" + path.extname(file.originalname))
                    }

                    let filesName = files

                    filesName = filesName.map(fileName => fileName.split(".")[0])

                    let highestNumber = filesName.reduce((prev, current) => {
                        // Extract the number from the file name
                        const prevNumber = Number(prev.split('.')[0]);
                        const currentNumber = Number(current.split('.')[0]);

                        // Return the file with the higher number
                        return prevNumber > currentNumber ? prev : current;
                    });

                    highestNumber = Number(highestNumber)

                    callback(null, (highestNumber + 1).toString() + path.extname(file.originalname))
                })
            }
        })

        const upload = multer({ storage: storage }).array('image', 10)

        app.post('/api/admin/galerieupload', (req, res) => {
            upload(req, res, (err) => {
                if (err) {
                    // An error occurred when uploading
                    return res.status(500).send(err)
                }

                // Everything went fine
                res.send({ status: 'Successfully uploaded image!' })
            })
        })
    }

    function main() {
        logIn()
        uploadImageToGalerie()
    }

    main()
}