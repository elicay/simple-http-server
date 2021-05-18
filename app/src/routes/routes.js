const { responseHandler } = require('../helpers/responseHandler');
const fileReader = require('../helpers/fileReader');

module.exports = {
  '/': (req, res) => {
    responseHandler(res, 'index');
  },
  '/about': (req, res) => {
    responseHandler(res, 'about');
  },
  '/contact': (req, res) => {
    responseHandler(res, 'contact');
  },
  404: (req, res) => {
    res.statusCode = 404;
    res.write(fileReader.readSync('404'));
  },
};
