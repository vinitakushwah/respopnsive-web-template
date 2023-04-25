

var myform = document.getElementById('myform');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById("password_error");
var submitbtn = document.getElementById('submitbtn');


var err = "Login Failed"




// for disable remove

function valid(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if( email!= "" && password != "" )
    {
        submitbtn.removeAttribute("disabled");
    }

};


// check validation and get data

function formsubmit() {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    // for email check

    if (email == "") {
        email_error.innerHTML = "add text";

    }
    else{

        submitbtn.disabled = false;
    }

    // for password check

    if (password == "") {

        password_error.innerHTML = "";
    }


    let formdata = JSON.stringify({ "EmailID": email, "Password": password, "AccountType": 2 });

    // console.log("this is my formdata" ,formdata);

    if(formdata){
      fetch("https://stage.webtalkx.com/api/I2B_Users/LoginUser",{

        method: 'POST',
        body : formdata ,
        headers : { "Content-Type" : "application/json; charset=UTF-8"  }

      }).then((res)=>{

        // console.log(res);

        if(res.ok){

            console.log(res)

             return res.json()}
    
      }).then((data)=>{

       if(data[0].ResponseStatus == 'Success'){


        let name = data[0].FirstName +' '+ data[0].LastName;

        // console.log(name)

       localStorage.setItem("name", name)

        // var username = localStorage.setItem("name","subham sharma");
        // for redirect to dashboard 

        window.open(
            "index.html"
          ); 

       }

       else{
          console.log(err);

       }


      })

    }


   










}

















function emailvalidation(){

    var email = document.getElementById('email').value;
    if (email !== ""){
        let erroremail = document.getElementById('email_error');
        erroremail.innerHTML ="";
        return true;
    }


}

function passwordvalidation() {

    var password = document.getElementById('password').value;
    if (password !== "") {
        let errorpassword = document.getElementById('password_error');
        errorpassword.innerHTML = "";
        return true;
    }
}





//  function username(){

//     console.log("fbvfjdbvjhcxbv")
// }
