// usei o express para criar e configurar o meu servidor
const express = require("express")
const server = express()

//criando variáveis para o HTML com nunjucks
const ideias = [
    {
        img: "assets/curso-dev.png",
        title: "Cursos de programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti impedit aperiam molestiae corporis dolorum dolores aut obcaecati excepturi aliquid quam ratione incidunt quia dolore ipsam ut doloremque, repellendus error provident?",
        url: "https://www.rocketseat.com.br/"
    },
    {
        img: "assets/exercicios.png",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti impedit aperiam molestiae corporis dolorum dolores aut obcaecati excepturi aliquid quam ratione incidunt quia dolore ipsam ut doloremque, repellendus error provident?",
        url: "https://www.youtube.com/c/CaioSignoretti"
    },
    {
        img: "assets/yoga.png",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti impedit aperiam molestiae corporis dolorum dolores aut obcaecati excepturi aliquid quam ratione incidunt quia dolore ipsam ut doloremque, repellendus error provident?",
        url: "https://www.youtube.com/c/PriLeiteYoga"
    },
    {
        img: "assets/jardinagem.png",
        title: "Jardinagem",
        category: "Meio ambiente",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti impedit aperiam molestiae corporis dolorum dolores aut obcaecati excepturi aliquid quam ratione incidunt quia dolore ipsam ut doloremque, repellendus error provident?",
        url: "https://www.youtube.com/watch?v=t_UDYuByuYo&list=PLQMyk6-jAVtpnOh8370lhH2cvXT6W9Vqh"
    },

]

//configurar arquivos estáticos (css, scripts e imagens)
server.use(express.static("public"))

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

//criei uma rota /
// e capturo o pedido do clinte para responder
server.get("/", function(req, res) {

    const reversedIdeias = [...ideias].reverse()

    let lastIdeias = []
    for (let ideia of reversedIdeias) {
        if(lastIdeias.length < 2) {
            lastIdeias.push(ideia)
        } 
    }
    return res.render("index.html", { ideias: lastIdeias })
})
server.get("/ideias", function(req, res) {

    const reversedIdeias = [...ideias].reverse()

    return res.render("ideias.html", {ideias: reversedIdeias})
})


//liguei meu servidor na porta 3000
server.listen(3000)