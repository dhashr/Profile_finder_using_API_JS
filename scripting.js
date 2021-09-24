// --------------mainpage--------------

//-------------git redirect page---------  
function gitmainpage(){
    window.location = "githubmain.html"
}  
function gitfunction(){
    window.location = "github.html";
}

// -------------view on signin------------
document.querySelector("#signbtn").addEventListener("click", togglesign)
function togglesign() {
    var signup = document.getElementById('signupform');
    var login = document.getElementById('loginform');
    if (signup.style.display == 'none') {
        signup.style.display = 'block';
        login.style.display = 'none'  
    }
}

document.querySelector("#loginbtn").addEventListener("click", togglelogin)
function togglelogin() {
    var login = document.getElementById('loginform');
    var signup = document.getElementById('signupform');
    if (login.style.display == 'none') {
        login.style.display = 'block';
        signup.style.display = 'none'  
    }
}

// ------------LoginForm--------------
document.querySelector("#signup").addEventListener("click", checksigncondition)
function checksigncondition(){
    let formatpwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(document.getElementById("f_name").value == ""){
        alert("Fill the FirstName");
        return false
    }
    else if(document.getElementById("f_name").value.length < 4){
        alert("Type the  correct name ");
        return false
    }
    else if(document.getElementById("l_name").value == ""){
        alert("Fill the LastName");
        return false
    }
    else if(document.getElementById("dob").value == ""){
        alert("Fill the DOB ");
        return false
    }
    else if(document.getElementById("mail").value == ""){
        alert("Fill the E-mail ");
        return false
    }
    else if(document.getElementById("pwd").value == ""){
        alert("Fill the Password ");
        return false
    }
    else if(document.getElementById("pwd").value.length < 8){
        alert("Password Length is minimum 8");
        return false
    }
    else if(document.getElementById("pwd").value.match(formatpwd)){
        alert("Password is Strong");
        return false
    }
    else{
        document.querySelector("#signup").addEventListener("click", togglesignup)
        function togglesignup() {
            let tonxt = document.getElementById('tonxt');
            if (tonxt.style.display == 'none') {
                tonxt.style.display = 'block';  
            }
        } 
    }
}

document.querySelector("#loginin").addEventListener("click", checklogincondition)
function checklogincondition(){
    if(document.getElementById("mail1").value == ""){
        alert("Fill the E-mail ");
        return false
    }
    else if(document.getElementById("pwd1").value == ""){
        alert("Fill the Password");
        return false
    }
    else{
        document.querySelector("#loginin").addEventListener("click", toggleloginin)
        function toggleloginin() {
            let tonxt1 = document.getElementById('tonxt1');
            if (tonxt1.style.display == 'none') {
                tonxt1.style.display = 'block';  
            }
        } 
    }
}
    
  
// -------------localStorage-------------
function storesigndata(){
    let f_name = document.querySelector("#f_name").value;
    let l_name = document.querySelector("#l_name").value;
    let dob = document.querySelector("#dob").value;
    let gender = document.querySelector("#gender").value;
    let email = document.querySelector("#mail").value;
    let pwd = document.querySelector("#pwd").value;
    
    localStorage.setItem("Sign up firstname",f_name)
    localStorage.setItem("Sign up lastname",l_name)
    localStorage.setItem("Sign up dob",dob)
    localStorage.setItem("Sign up gender",gender)
    localStorage.setItem("Sign up email",email)
    localStorage.setItem("Sign up password",pwd)
}

function storelogindata(){
    let email1 = document.querySelector("#mail1").value;
    let pwd1 = document.querySelector("#pwd1").value;
    
    localStorage.setItem("Login Email",email1)
    localStorage.setItem("Login password",pwd1)
}


