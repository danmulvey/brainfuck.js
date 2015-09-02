// ==============================
// brainfuck.js
// a simple brainfuck interpreter
// written in javascript
// - by danmulvey (danmulvey.com)
// ==============================

var fs      = require('fs');
var argv    = process.argv.slice(2);
var code    = "";
var codePos = 0;
var tape    = [];
var tapePos = 0;

// parse command line flags
function checkFlag() {
  switch (argv[0]) {
    case '-f':
    case '--file':
      try {
        code = fs.readFileSync(argv[1], 'ascii').split('');
      } catch (err) {
        console.log("Unable to open file: " + argv[1] + "\n");
        showHelp();
      } else {
        console.log("Invalid command.\n");
        showHelp();
      }
      break;
    case '-i':
    case '--input':
      code = argv[1].split('');
      break;
    case '-h':
    case '--help':
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

function run() {
  while (codePos < code.length) {
    switch (code[codePos]) {
      case '>':
        tapePos++;
        break;
      case '<':
        tapePos--;
        break;
      case '+':
        tape[tapePos]++;
        break;
      case '-':
        tape[tapePos]--;
        break;
      case '.':
        break;
      case ',':
        break;
      case '[':
        break;
      case ']':
        break;
    }
    codePos++;
  }
}
