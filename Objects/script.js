/* Objects:
- store data in key-value pairs
example: 
This is an array:
var person = [1,2,3]; */
/*To get an element in the array you can call arr[2];
Arrays have order.

This is an object: */
var person = {
    name: "Nayem",
    age: 12,
    city: "SF"
};
/*To get any data in the object we can do 2 ways:
person["name"]
or
person.name
You can update any data of the object by doing:
person.age +=1 (adds one to the current age)
person.name = "Ohio" (updates that data field to Ohio instead of SF)
Objects have no order.

This is an empty object -- can add data afterwards one by one: */
var human = {}; 
//or
var human2 = new Object();
/* Can add data like:
human.name = "swag";
human.age = 12;
human.city = "MTL"; */

// Object can hold any sort of data like so:
var person2 = {
    name: "nayem",
    age: "21",
    city: "MTL",
    pets: {
        name: "Rusty",
        age: 12,
        species: "dog"
    }
};
