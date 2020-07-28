require("@babel/register")({
  presets: ["@babel/preset-env"],
  plugins: ["@babel/plugin-transform-runtime"]
});
require("babel-polyfill");

module.exports = require('./src/index');
