const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files); // Output: [ '1-Module.js', '2-NodeModuleSystem', '3-PathModule.js', '4-OSModule.js', '5-FileSystemModule.js', 'app.js' ]

fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});
