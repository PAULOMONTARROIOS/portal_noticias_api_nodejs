var http = require('http')

var server = http.createServer((req, res) => {
    var categoria = req.url

    if (categoria == "/tecnologia"){
        res.end("<html><body> Criando um site de tecnologia com NodeJs </body></html>");
    }
    else if (categoria == "/financas"){
        res.end("<html><body> Criando um site de financas com NodeJs </body></html>");
    }
    else{
        res.end("<html><body> Criando um site normal </body></html>");
    }
});

server.listen(3000, () => { console.log('Servidor on na porta 3000.')});

