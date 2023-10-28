const accountId = 144553   //not changeble
let accountEmail = "abcd@google.com"      //let,var both use for variables , but is not used bcoz it has scope issue - block , functional scpe (if scope is defined it also work outside of scope)
var accountPassword ="12345"                //var now used nowadays , to solve issue of var, let is come in play
accountCity = "Banglore"    //not prefferable
let accountState;

accountEmail = "efgh@hi.com"       //updating email
accountPassword = "2123455"         //updating
accountCity = "Jaipur"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity , accountState])
