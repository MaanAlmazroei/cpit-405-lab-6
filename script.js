const initialLikes = 100;
const initialDislikes = 20;

let likeCounts=initialLikes;
let dislikeCounts=initialDislikes;
// get all UI elements

const likesBtn= document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");
const commentBox= document.getElementById("commentBox");
const submitBtn= document.getElementById("submit");
const clearBtn= document.getElementById("clear");
const commentList= document.getElementById("commentsList");

// set the initial values
likesBtn.innerText= "👍 " + likeCounts;
dislikeBtn.innerText= "👎 " + dislikeCounts;

// Handle like btn
likesBtn.addEventListener("click", ()=>{
    likeCounts++;
    likesBtn.innerText= "👍 " + likeCounts;
    setCookie();
})


// Handle dislike btn
dislikeBtn.addEventListener("click", ()=>{
    dislikeCounts++;
    dislikeBtn.innerText= "👎 " + dislikeCounts;
    setCookie();
})

// handel submit a comment
// submit a comment
submitBtn.addEventListener("click", ()=>{
    // create <p>
    const pElem=document.createElement("p");
    pElem.innerText = commentBox.value.trim();
    commentList.appendChild(pElem);
    commentBox.value="";
    setCookie();
})

// handle clear
clearBtn.addEventListener("click", ()=>{
    commentBox.value="";    
    document.cookie="voted=true; path=/; expires=" + new Date(Date.now() -1).toUTCString();
})

function setCookie(){
    // Set a cookie that epires in a minute from now in milliseconds
    const expireOn=new Date(Date.now() + 1*60*1000);
    const cookieString="voted=true; path=/; expires="+expireOn.toUTCString();
    document.cookie= cookieString;
}

// check for cookies when the page is loading
window.onload=()=>{
    if(document.cookie.indexOf("voted") >-1){
        // disable all buttons
        likesBtn.disabled=true;
        dislikeBtn.disabled=true;
        submitBtn.disabled=true;
    }
}

