const cacheManager = require("cache-manager");
const { debug } = require("../utils/logging/logger");

debug("Configurando o cache manager");
debug("CACHE_REQUEST_STORE", process.env.CACHE_REQUEST_STORE);
debug("CACHE_REQUEST_MAX", process.env.CACHE_REQUEST_MAX);
const cache = cacheManager.caching({
  store: process.env.CACHE_REQUEST_STORE,
  max: process.env.CACHE_REQUEST_MAX,
});

module.exports = cache;
