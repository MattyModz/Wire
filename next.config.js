const path = require("path");

module.exports = {
  trailingSlash: false,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    domains: ["cdn.sanity.io"],
  },
};