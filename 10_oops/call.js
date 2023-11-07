function SetUserName(username){
    this.username = username
}

function createUser (username , email , password){

    // SetUserName(username)            //here call is not happening only reference is there, here after calling the variables are removed from the stack and we ddon't have reference to access

    SetUserName.call(this ,username)     //here we holding reference and sayig use this refernce of current user fn and don't of setUser
    this.email = email
    this.password = password
}

const u1 = new createUser('chai' , "chat@google.com" , '456')
console.log(u1);