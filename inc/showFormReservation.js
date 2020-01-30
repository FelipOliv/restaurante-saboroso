const db = require ("./dbConnection")


module.exports = {
    render (req, res, error, success)
    {
        res.render ("reservations", {
            title: "Reservas | Restaurante Saboroso",
            bgimage: "images/img_bg_2.jpg",
            h1: "Reserve uma Mesa!",
            body: req.body,
            error,
            success
        })
    },
    save ({ name, email, people, date, time })
    {
        let database_format_date = date.split ("/")

        dbDate = `${database_format_date[2]}-${database_format_date[1]}-${database_format_date[0]}`

        return new Promise ((resolve, reject) => {
            db.query (`INSERT INTO tb_reservations (name, email, people, date, time) VALUES (?, ?, ?, ?, ?)`, [
                name,
                email,
                people,
                dbDate,
                time
            ], (error, results) => {

                if (error)
                {
                    reject (error)
                    return false
                }

                resolve(results)
            })
        })
    }
}