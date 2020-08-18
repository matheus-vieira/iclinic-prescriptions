const router = require("express").Router();
const path = require("path");
const { debug } = require('../utils/logging/logger');

//Routes

module.exports = (route, relativePath) => {
  const pathToHtmlFile = path.join(__dirname + relativePath);
  debug(`adicionando rota "${route}" com arquivo "${relativePath}"`)
  router.get(route, (req, res) => {
    res.status(200).sendFile(pathToHtmlFile);
  });
  return router;
};
