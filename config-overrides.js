const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@": "src",
    "@pages": "src/pages",
    "@views": "src/views",
    "@components": "src/components",
    "@utils": "src/utils",
  })(config);

  return config;
};
