const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function() {
    //CRIAR A TABELA
    db.run(`
        CREATE TABLE IF NOT EXISTS ideias(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)
    //INSERIR DADOS NA TABELA
    // const query = `
    //     INSERT INTO ideias(
    //         image,
    //         title,
    //         category,
    //         description,
    //         link
    //     )   VALUES (?,?,?,?,?);
    // `
    // const values = [
    //      "assets/curso-dev.png",
    //      "Cursos de programação",
    //      "Estudo",
    //      "Estudar programação para fazer aplicações incríveis!!",
    //      "https://www.rocketseat.com.br/"
    //     ]
    //     db.run(query, values, function(err){
    //     if (err) return console.log(err)

    //     console.log(this)
    // })

    //DELETAR UM DADO DA TABELA
    //db.run (`DELETE FROM ideias WHERE id = ?`, [1], function(err){
        //if (err) return console.log(err)

        //console.log("DELETEI", this)
    //})

    //CONSULTAR DADOS NA TABELA
    //db.all(`SELECT * FROM ideias`, function(err, rows) {
        //if (err) return console.log(err)

        //console.log(rows)
    //})
})

//USANDO O BANCO DE DADOS NA MINHA APLICAÇÃO
module.exports = db