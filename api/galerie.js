exports.run = (app) => {
    const fs = require("fs")

    function getGalerieImages() {
        app.get("/api/galerie/images", (req, res) => {
            let images = fs.readdirSync("../public/galerie")

            images = images.map(image => {
                return "/images/galerie/" + image
            })

            res.send({ images: images })
        })
    }

    function main() {
        getGalerieImages()
    }

    main()
}