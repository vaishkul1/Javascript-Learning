const accountId = 121212;   //cannot be changed again
let accountEmail = "v@tcs.com"
var accountPassword = "121212"  //shouldnt to use var
accountCity = "mumbai"
let userAddress;

/*
var is accessible throughout the function where it is declared.

let is block-scoped; It is accessible only within the block in which it is declared. 
*/

accountEmail = "k@tcs.com"
accountPassword = 323232
accountCity = "pune"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
