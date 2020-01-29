const database = require ("./dbConnection")

module.exports = {
    getMenus () {
        return new Promise ((resolve, reject) => {
            database.query ("SELECT * FROM tb_menus ORDER BY title", (error, results) => {
                if (error)
                {
                    reject (error)

                    return false
                }

                resolve (results)
            })
        })
    }
}