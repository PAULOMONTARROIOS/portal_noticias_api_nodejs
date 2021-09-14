module.exports.admin = function (app, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (app, req, res) {
    var noticia = req.body;

    req.assert('titulo', 'Titulo obrigatório.').notEmpty();
    req.assert('resumo', 'Resumo deve ser informado').notEmpty();
    req.assert('resumo', 'Resumo deve ter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor deve ser informado.').notEmpty();
    req.assert('data_noticia', 'Data deve ser informado.').notEmpty()
    req.assert('data_noticia', 'A data de ser no formado americano.').isDate({ format: 'YYYY-MM-DD' });
    req.assert('noticia', 'Noticia deve ser informada.').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, (error, result) => {
        res.redirect("/noticias");
    });
}