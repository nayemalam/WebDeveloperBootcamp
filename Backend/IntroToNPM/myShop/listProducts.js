var faker = require('faker');

var someName = faker.name.findName(); // Hailey
var someEmail = faker.internet.email(); // random@email.com
var someCard = faker.helpers.createCard(); // random contact card w/ many properties

// console.log(someName + " " + someEmail +" " + someCard.website);

/* instructions:
Use faker to print out 10 random product names and prices
*/

var productNames = faker.commerce.productName;
var price = faker.commerce.price;

for(var i=0; i<10; i++) {
    console.log(productNames() + ": $" +price());
}
// console.log(productNames + ": $" + price);

