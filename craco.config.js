/* craco.config.js */
const path = require('node:path');

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@types": path.resolve(__dirname, "src/types"),
      "@components": path.resolve(__dirname, "src/components"),
      "@simples": path.resolve(__dirname, "src/components/simples"),
      "@complex": path.resolve(__dirname, "src/components/complex"),
      "@SVGR": path.resolve(__dirname, "src/components/svgr"),
      "@constants": path.resolve(__dirname, "src/constants"),
    },
  },
};
