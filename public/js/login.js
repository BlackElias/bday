var btnSignup = document.guerySelector("#btn-login").addEventListener("click", function(){
    let username = document.querySelector('#email').value; 
    let password = document.guerySelector('#password').value; 
    fetch('http://localhost:3000/users/login', {
         method: "post",
          headers: { 'Content-Type': 'application/json'
    }, 
        body: JSON.stringify({ 
            "username": username, 
            "password": password 
        })
     }).then(response =>{
         return response.json();
     }).then(json => {
          if (json.status === "success"){  
         let token = json.data.token;
         localStorage.setItem("token", token);
         window.location.href = "app.html";// app pagina 
          } else {
            let feedback = document.querySelector(".alert"); 
            feedback.textContent = "login failed"; 
            feedback.classList.remove('hidden');
          }
          })
          }); 