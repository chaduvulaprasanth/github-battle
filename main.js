var firstinput = document.getElementById("firstinput");
var secondinput = document.getElementById("secondinput");
var firstinputsubmit = document.getElementById("firstinputsubmit");
var secondinputsubmit = document.getElementById("secondinputsubmit");
var firstuser = document.querySelector(".firstuser");
var seconduser = document.querySelector(".seconduser");
var firstuserscore;
var seconduserscore;
var firstresult = document.querySelector(".firstresult");
var secondresult = document.querySelector(".secondresult");


function searchCard(res){
    firstuserscore = `${res.public_repos}`
    firstuser.innerHTML = ` 
    <li>
        <div class="bio-flex">
            <a class="githuburl" href="${res.html_url}" target="_blank" rel="noopener noreferrer"><img src=${res.avatar_url}></a>
            <div class="name-flex">
                <p class="name">${res.name}</p>
                <p class="bio">${res.bio}</p>
                <a class="githuburl" href="${res.html_url}" target="_blank" rel="noopener noreferrer">Go to Github</a>
            </div>
        </div>
        <div class="sub">
            <p>Followers ${res.followers}<p>
            <p>Following ${res.following}</p>
            <p>Repos ${res.public_repos}</p>
            <p>Gists ${res.public_gists}</p>
        </div>
    </li>`
}


function gitapi(event){
    var xhr = new XMLHttpRequest;
    xhr.open("GET",`https://api.github.com/users/${firstinput.value}`);
    xhr.onload = () => searchCard(JSON.parse(xhr.response));
    xhr.send();
}

firstinputsubmit.addEventListener("click",gitapi)


// second user

function secondCard(res){
    seconduserscore = `${res.public_repos}`
    seconduser.innerHTML = ` 
    <li>
        <div class="bio-flex">
            <a class="githuburl" href="${res.html_url}" target="_blank" rel="noopener noreferrer"><img src=${res.avatar_url}></a>
            <div class="name-flex">
                <p class="name">${res.name}</p>
                <p class="bio">${res.bio}</p>
                <a class="githuburl" href="${res.html_url}" target="_blank" rel="noopener noreferrer">Go to Github</a>
            </div>
        </div>
        <div class="sub">
            <p>Followers ${res.followers}<p>
            <p>Following ${res.following}</p>
            <p>Repos ${res.public_repos}</p>
            <p>Gists ${res.public_gists}</p>
        </div>
    </li>`
    setTimeout(() => result(), 1000)
}


function secondapi(event){
    var xhr = new XMLHttpRequest;
    xhr.open("GET",`https://api.github.com/users/${secondinput.value}`);
    xhr.onload = () => secondCard(JSON.parse(xhr.response));
    xhr.send();

}
secondinputsubmit.addEventListener("click",secondapi)

// result
function result(){
    if(firstuserscore > seconduserscore){
       firstresult.textContent = "Winner";
       secondresult.textContent = "Looser";
    }
    else {
        firstresult.textContent = "Looser";
        secondresult.textContent = "Winner";
    }
}
