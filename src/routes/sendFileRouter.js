const router = require("express").Router();
const path = require("path");

//Routes

module.exports = (route, relativePath) => {
  const indexHtml = path.join(__dirname + relativePath);
  router.get(route, (req, res) => {
    res.status(200).sendFile(indexHtml);
  });
  return router;
};
