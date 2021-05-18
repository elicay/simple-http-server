const fileReader = require('../helpers/fileReader');

exports.responseHandler = (res, fileName) => {
  res.statusCode = 200;
  res.write(fileReader.readSync(fileName));
  res.end();
};
