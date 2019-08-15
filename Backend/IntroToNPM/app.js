console.log("From app.js");

// get contents of the package cat
var cat = require("cat-me");
// console.log(cat());

// get contents of the package knock-knock-jokes
// notice it gets installed in package-lock.json when installing another package -- makes it easier to install many packages
var joke = require("knock-knock-jokes");
console.log(joke());


