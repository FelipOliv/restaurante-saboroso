const db = require ("./../inc/dbConnection")
const express = require ('express')
const router = express.Router ()

/* GET users listing. */
router.get ('/', (req, res, next) => {

    db.query("SELECT * FROM tb_users ORDER BY name", (error, results) => {

        if (error)
        {
            res.send (error)

            return false
        }

        res.json (results)
    })
})

module.exports = router
