module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-nested"),
    require("postcss-preset-env"),
    require("cssnano"),
  ],
};
