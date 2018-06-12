const fs = require('fs');

module.exports = function(filename){
  // fs.readdir('./', 'utf8', (err, files) => {
  //   if(err){
  //     throw err
  //   } else {
  //     process.stdout.write(files.join('\n'));
  //     process.stdout.write("\nprompt > ");
  //   }
  // });
  fs.readFile(filename, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
    process.stdout.write("\nprompt > ");
  });
}
