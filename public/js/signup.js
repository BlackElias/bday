var btnSignup = document.querySelector("#btn-signup").addEventListener("click", function(){
let password = document.querySelector('#password').value;
let username = document.querySelector('#username').value;  
fetch('http://localhost:3000/signup', {
     method: "post",
      headers: { 'Content-Type': 'application/json'
}, 
    body: JSON.stringify({ 
        "username": username, 
        "password": password,
    })
 }).then(response =>{
     return response.json();
 }).then(json => {
      if (json.status === "success"){ 
     let feedback = document.querySelector(".alert"); 
     feedback.textContent = "Sign up complete!"; 
     feedback.classList.remove('hidden'); 
     let token = json.data.token;
     localStorage.setItem("token", token);
     window.location.href = "home.html";// app pagina 
      }
      })
      }); 