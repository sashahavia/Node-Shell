const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data',(data)=>{
  // const cmd = data.toString().trim();
  const cmd = data.toString().trim().split(" ");

  if (cmd.length > 1){
    cat(cmd[1]);
  }
  if(cmd[0] === "pwd"){
    pwd();

  } else if(cmd[0] === "ls"){
    ls();
  }

});
