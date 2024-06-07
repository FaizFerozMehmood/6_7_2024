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

function submitNote(){
    notes.innerText =""
    localStorage.setItem("notes",notes.value)
    var savedNotes =localStorage.getItem("notes")
    notesList.innerHTML +=`
    <li id = "listItems"> ${savedNotes}</li>
     `
     if(notes.value==""){
         alert("Enter your notes")
         notesList.innerText.style.display="none"

         
         }
            
        
    }
submitNote()

// function submitNote(){
//     var email = localStorage.getItem("email")
//     var bjct = {
//         email :email,
//         notes:notes.value
//     }
//     saveValue(bjct);
//     notes.value= ""
// }
// function saveValue(bjct){
//    var setting= localStorage.setItem("notes",notes)
//     var notes = localStorage.getItem("notes")
// }

        