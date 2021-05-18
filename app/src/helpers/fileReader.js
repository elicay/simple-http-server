const fs = require('fs');
const path = require('path');

module.exports = {
  readSync: (filename) => {
    const filePath = path.join('./', `/app/src/html/${filename}.html`);
    return fs.readFileSync(filePath).toString();
  },
};
