// question1 Program and observe the following requirements:
// Create a null object and set its variable name as user;
var user = {};
// Add a name attribute and set its value as John;
user.name = 'John';
// Add a surname attribute and set its value as Mile;
user.surname = 'Mike';
console.log(user);
// Modify the value of name attribute as Peter;
user.name = 'Peter';
console.log(user);
// Delete name attribute of user.
delete user.name;
console.log(user);

/*
 question2 Program and observe the following requirements:calculate how
 many pieces of fruit there are in the fruit object and the output should be 50
*/
var fruit = {
	apple : 20,
	pear : 20,
	peach : 10
};

var keys = Object.keys(fruit);
console.log(keys);
var total = 0;
for (var i = 0; i < keys.length; i++) {
	total += fruit[keys[i]];
}
console.log("Total is " + total);