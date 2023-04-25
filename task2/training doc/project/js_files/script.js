// getting data from localstorage

var logout = document.getElementById('logout');

var username = document.getElementById('username');




  var data = localStorage.getItem("name");
 username.innerHTML = data;




 
// for logout the sessiosn

logout.addEventListener('click' , ()=>{
    localStorage.clear();
    window.open(
        "login.html"
      ); 
});













