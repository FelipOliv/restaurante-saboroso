const db = require ("./../inc/dbConnection")
const express = require ('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {

    db.query ("SELECT * FROM tb_menus ORDER BY title", (error, results) => {
        if (error)
        {
            console.log (error)

            return false
        }

        res.render("index", { title: 'Restaurante Saboroso!', menus: results })
    })
});

router.get ("/contatos", (req, res, next) => {

    res.render ("contacts", {
        title: "Contatos | Restaurante Saboroso",
        bgimage: "images/img_bg_3.jpg",
        h1: "Diga um oi!"
    })
})

router.get ("/menus", (req, res, next) => {

    res.render ("menus", {
        title: "Menus | Restaurante Saboroso",
        bgimage: "images/img_bg_1.jpg",
        h1: "Saboreie nosso menu!"
    })
})

router.get ("/reservas", (req, res, next) => {

    res.render ("reservations", {
        title: "Reservas | Restaurante Saboroso",
        bgimage: "images/img_bg_2.jpg",
        h1: "Reserve uma Mesa!"
    })
})

router.get ("/servicos", (req, res, next) => {

    res.render ("services", {
        title: "Serviços | Restaurante Saboroso",
        bgimage: "images/img_bg_1.jpg",
        h1: "É um prazer poder servir!"
    })
})

module.exports = router
