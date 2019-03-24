const proxy = require('http-proxy-middleware');

/**
 * @return {Boolean}
 */
var filter = function(pathname, req) {
  const accept = req.headers && (req.headers["Accept"] || req.headers["accept"]);
  return accept && /json/.test(accept);
}

module.exports = function(app) {
  app.use(proxy('/websocket', { target: 'ws://localhost:8080/websocket', ws: true }));
  app.use(proxy(filter, { target: 'http://localhost:8080/' }));
};
