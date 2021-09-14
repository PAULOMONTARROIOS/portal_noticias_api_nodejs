module.exports.noticias = function (app, req, res) {
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias((erro, result) => {
        res.render("noticias/noticias", { noticias: result });
    });
}

module.exports.noticia = function (app, req, res) {
    var connection = app.config.dbConnection();
    var noticiaModel = new app.app.models.NoticiasDAO(connection);

    var id_noticia = req.query;
    
    noticiaModel.getNoticia(id_noticia, (erro, result) => {
        res.render('noticias/noticia', { noticia: result });
    });
}
