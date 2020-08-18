const cacheRequest = require('../config/cacheManager');
const rp = require('request-plus');
const { error, debug } = require("../utils/logging/logger");

class BaseService {
    constructor() {
        this.request = null; 
    }
    configure() {
        try {
            this.request = rp({
                defaults: {
                    baseUrl: this.url,
                    headers: {
                        'Accept': 'Accept: application/json',
                        'Authorization': `Bearer ${this.token}`
                    },
                    json: true,
                    rejectUnauthorized: (process.env.APP_ENV !== 'development'),
                    timeout: this.timeout,
                    retry: {
                        attempts: this.retries,
                    },
                    cache: {
                        cache: cacheRequest,
                        cacheOptions: {
                            ttl: this.ttl
                        }
                    }
                }
            });
        } catch (e) {
            error(e);
        }
    }
}

module.exports = BaseService;