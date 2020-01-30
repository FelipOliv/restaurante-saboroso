const db = require ("./../inc/dbConnection")
const express = require ('express')
const router = express.Router()
const dbMenus = require ("./../inc/queryMenus")
const showReservationForm = require ("./../inc/showFormReservation")


router.get('/', (req, res, next) => {

    dbMenus.getMenus().then (results => {
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

    dbMenus.getMenus().then (results => {
        res.render ("menus", {
            title: "Menus | Restaurante Saboroso",
            bgimage: "images/img_bg_1.jpg",
            h1: "Saboreie nosso menu!",
            menus: results
        })
    })
})

router.get ("/reservas", (req, res, next) => {

    showReservationForm.render (req, res)
})

router.post ("/reservas", (req, res, next) => {

    const { name, email, people, date, time } = req.body

    if ( ! name )
    {
        showReservationForm.render (req, res, "Preencha o campo nome")
    }
    else if ( ! email )
    {
        showReservationForm.render (req, res, "Preencha o campo e-mail")
    }
    else if ( ! people )
    {
        showReservationForm.render (req, res, "Informe para quantas pessoas é a mesa")
    }
    else if ( ! date )
    {
        showReservationForm.render (req, res, "Informe a data da reserva")
    }
    else if ( ! time )
    {
        showReservationForm.render (req, res, "Preencha a hora da reserva")
    }
    else
    {
        showReservationForm.save(req.body).then (results => {

            req.body = {}

            showReservationForm.render (req, res, null, "Reseva realizada !")

        }).catch (error => {

            showReservationForm.render (req, res, error.message, null)

        })
    }
})

router.get ("/servicos", (req, res, next) => {

    res.render ("services", {
        title: "Serviços | Restaurante Saboroso",
        bgimage: "images/img_bg_1.jpg",
        h1: "É um prazer poder servir!"
    })
})

module.exports = router
