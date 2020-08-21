const Messages = require("./errorMessageUtil");
const notFoundError = (key) => {
  let e = new Error(Messages[key].error.message);
  e.statusCode = 404;
  throw e;
};
exports.notFoundError = notFoundError;
