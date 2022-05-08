const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.Node_ENV === "production" ? "/baemin_proj/" : "/",
});
