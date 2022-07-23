const dotenv = require("dotenv");

dotenv.config({
  path: `${__dirname}/../../environment/.env`,
});

class Config {
  static PORT = process.env.PORT;
  static URL_IMAGE = process.env.URL_IMAGE;
}

module.exports = Config;
