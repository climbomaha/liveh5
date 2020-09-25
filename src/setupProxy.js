const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/front/",
    proxy({
      target: "http://demo.pipihou.net:8082",
      changeOrigin: true,
    })
  );
};
