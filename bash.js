const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data',(data)=>{
  const cmd = data.toString().trim();

  if(cmd === "pwd"){
    pwd();

  } else if(cmd === "ls"){
    ls();
  }


});







// write if statement for pwd
  // log out the filepath
  // revert back to the prompt
