var email = document.getElementById('email')
var password = document.getElementById("password")
var loginC = document.getElementById("loginC")
var home_container = document.getElementById("home_container")
var user_email_display =document.getElementById('user_email_display')
var notes = document.getElementById("note")
var notesList = document.getElementById("notesList")



function saveEmail(){
    if(!email.value || !password.value)
        return alert("enter email and password")
    localStorage.setItem("email",email.value, "password",password.value)
    checkIsLoggedin()
    
    
   
}
function checkIsLoggedin(){
    var email = localStorage.getItem('email')
    console.log("saved email",email);
    if(email){
        loginC.style.display= "none"
        home_container.style.display="block"
        user_email_display.innerText =email
    }else{
        loginC.style.display="block"
        home_container.style.display = "none"

    }
}
checkIsLoggedin()

function logout(){
   
var message =  "Are you sure you want to leave this site?"
var userReponse =confirm(message)
if(userReponse){

            localStorage.removeItem('email')
            checkIsLoggedin()
} 
    
        
    

}
var savedNotes =localStorage.getItem("notes")|| "notes"

function submitNote(){
    localStorage.setItem("notes",notes.value)
    notesList.innerHTML +=`
    <li id = "listItems"> ${savedNotes}</li>
     `

}
// submitNote()
        
