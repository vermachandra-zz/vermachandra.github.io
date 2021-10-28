

const loginPrototypes = {
allowlogin : function(x){
    var a =x;
    var b;
    const myaccount = {
        a1: "Pendo_Company-1",
        a2: "PX_Company-2",
        a3: "PX_Company-3",
        a4: "PX_Company-4"

    }
    var c;

    if (a != "") {
        if (a == "dileepnalla29@gmail.com" || a == "dileepnalla6@gmail.com" || a == "dnalla@gainsight.com" || a == "demouser@gmail.com") {
            alert("valid User");
            b = a.substr(8, 5);
            var id = b;
                        // var hash = CryptoJS.HmacSHA256(id, "9rmLVS939teSt3cILUccAPiqBBxSsQNmREc8CwpAj");



            alert("Logged in user id :" + b);
            window.location = "Index.HTML";

        }
        else
            alert("Invalid User,enter \"demouser@gmail.com\"");
    }
    else
        alert("enter \"demouser@gmail.com\"");


    return b;
},

callpx : function(){}

}

const userlogin = Object.create(loginPrototypes);
userlogin.usermail= 'dileeptesting@gmail.com';
userlogin.firstname = 'firstName';
userlogin.Lastname = 'LastName';
userlogin.allowlogin(userlogin.usermail);