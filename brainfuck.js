// ==============================
// brainfuck.js
// a simple brainfuck interpreter
// written in javascript
// - by danmulvey (danmulvey.com)
// ==============================


// parse command line flags
function checkFlag() {
  switch (process.argv[2]) {
    case '-f':
    case '--file':
      // read file from argv[3]
      break;
    case '-i':
    case '--input':
      // get input from argv[3]
      code = process.argv[3].split('');
      break;
    case '-h':
    case '--help':
      // show help screen
      showHelp();
      break;
    default:
      showHelp();
  }
}

function showHelp() {
  console.log("Welcome to brainfuck.js");
  console.log("A simple brainfuck interpreter written in javascript.");
  console.log("usage: node brainfuck.js <flag> <file|input>");
  console.log("flags:");
  console.log("\t-f, --file   : loads the specified .bf file");
  console.log("\t-i, --input  : input your bf code as an argument");
  console.log("\t-h, --help   : display this page");
  console.log("Example code can be found in ./examples/");
  console.log("For help with brainfuck syntax,");
  console.log("see http://www.muppetlabs.com/~breadbox/bf/");
}
