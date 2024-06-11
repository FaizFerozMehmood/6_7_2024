var email = document.getElementById('email')
var password = document.getElementById("password")
var loginC = document.getElementById("loginC")
var home_container = document.getElementById("home_container")
var user_email_display =document.getElementById('user_email_display')
var notes = document.getElementById("note")
var notesList = document.getElementById("notesList")

const emailVerify = localStorage.getItem("email") 

const arr = JSON.parse(localStorage.getItem("notes")) || [];

function saveEmail(){
    if(!email.value || !password.value)
        return alert("enter email and password")
    localStorage.setItem("email",email.value, "password",password.value)
    checkIsLoggedin()
    
    
   
}
function checkIsLoggedin(){
    var email = localStorage.getItem('email');
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

function hello(){
    notes.innerText =""
    let text;
    arr?.forEach(element => {
        text += `
        <li id = "listItems"> ${element.notes}</li>
        <p>${element.email}</p>
        `
    });
    notesList.innerHTML = text
    
    
    
        
    }
hello()
console.log(arr);
function submitNote(){
    notes.innerText =""
    var email = localStorage.getItem("email")
    var bjct = {
        email :email,
        notes:notes.value
    }
    arr.push(bjct)
    localStorage.setItem("notes",JSON.stringify(arr));
    console.log("arr",arr);
    hello()
    //savingValueToLocalStorage(bjct)
    // notes.value =""
}
function savingValueToLocalStorage(bjct){
    var notes = localStorage.getItem("notes")
    console.log(notes);

}


const showIdentityHandler = ()=>{
  const val= arr.filter((single)=> emailVerify == single.email);
  console.log(val);
}