/* craco.config.js */
const path = require('node:path');

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@Styles": path.resolve(__dirname, "src/styles"),
      "@Hooks": path.resolve(__dirname, "src/hooks"),
      "@Utils": path.resolve(__dirname, "src/utils"),
      "@Types": path.resolve(__dirname, "src/types"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Simples": path.resolve(__dirname, "src/components/simples"),
      "@Complex": path.resolve(__dirname, "src/components/complex"),
      "@SVGR": path.resolve(__dirname, "src/components/svgr"),
    },
  },
};
