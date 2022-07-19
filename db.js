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
    const query = `
    INSERT INTO ideias(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `
    const values = [
        "assets/curso-dev.png",
        "Cursos de programação",
        "Estudo",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti impedit aperiam molestiae corporis dolorum dolores aut obcaecati excepturi aliquid quam ratione incidunt quia dolore ipsam ut doloremque, repellendus error provident?",
        "https://www.rocketseat.com.br/"
    ]
    db.run(query, values, function(err) {
        if (err) return console.log(err)

        console.log(this)
    })

    //CONSULTAR DADOS NA TABELA

    //DELETAR UM DADO DA TABELA

})