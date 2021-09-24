// ---------redirect page-----------
function historypage(){
    window.location = "history.html"
}

// -----------date & time-----------

let live_date = new Date();
let monthname = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"]
let month = monthname[live_date.getMonth()];
let date = live_date.getDate();
let year = live_date.getFullYear();
let hour = live_date.getHours();
let min = live_date.getMinutes();
document.querySelector(".livedate").innerHTML = date + "/" + month + "/" + year;
document.querySelector(".livetime").innerHTML = hour + ":" + min;


// ---------------github------------------

let main = document.querySelector("#main")
document.getElementById("gsearch").addEventListener("click",gfunction)
function gfunction(){
    let ginput = document.querySelector("#ginput").value;
    let xhrrequest = new XMLHttpRequest();
    xhrrequest.open("GET", `https://api.github.com/users/${ginput}`);
    xhrrequest.onreadystatechange = function (){
        if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
            let response = JSON.parse(this.response);
            // console.log(response);
            let img = document.createElement("img");
            img.setAttribute("id", "gprofile");
            main.appendChild(img);
            let p1 = document.createElement("p1");
            p1.setAttribute("id", "gpname");
            main.appendChild(p1);
            let p2 = document.createElement("p2");
            p2.setAttribute("id", "gname");
            main.appendChild(p2);
            let p3 = document.createElement("p3");
            p3.setAttribute("id", "gbio");
            main.appendChild(p3);
            let p4 = document.createElement("p4");
            p4.setAttribute("id", "grepos");
            main.appendChild(p4);
            let p5 = document.createElement("p5");
            p5.setAttribute("id", "gemail");
            main.appendChild(p5);
            let p6 = document.createElement("p6");
            p6.setAttribute("id", "glocation");
            main.appendChild(p6);
            img.src = `${response.avatar_url}`; 
            p1.innerHTML = `Profile Name : ${response.login}`; 
            p2.innerHTML = `Name : ${response.name}`; 
            p3.innerHTML = `Bio : ${response.bio}`;
            p4.innerHTML = `Repositories : ${response.public_repos}`;
            p5.innerHTML = `E-Mail : ${response.email}`;
            p6.innerHTML = `Location : ${response.location}`;
        }
    }
    xhrrequest.send();
} 

// --------------History-sec-------------
document.querySelector("#gsearch").addEventListener("click", createHistory)
function createHistory(){
    let his_input = document.querySelector('#ginput').value;
    document.querySelector('#ginput').value = "";
    localStorage.setItem("His-names",his_input);
}
let list_his = localStorage.getItem("His-names");  
console.log(list_his);
let his_list = document.querySelector("#his_list1");
    his_list.innerHTML = list_his;
        




