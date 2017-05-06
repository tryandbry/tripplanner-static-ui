var chalk = require('chalk');

exports.magenta = function(){
  Array.prototype.slice.call(arguments).forEach( arg=>{
    console.log(chalk.magenta(String(arg)));
  });
};
