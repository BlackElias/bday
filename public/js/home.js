
var primus = new Primus("http://localhost:3000", {  });

const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');


var str,
element = messageInput;
if (element != null) {
    str = element.value;
    console.log(str)
}
else {
    str = null;
    console.log(str)
}
primus.on('data', (json) => {
    if (json.action === "addMessage") {
        appendMessage(json.data);
    }
}); 
let appendMessage = (json) => {
    let bericht = `<div class="message">
                    
                    <div class="messsage__text">${json.data.todo.text}</div>
                    
                </div>`;
    document.querySelector("#message-container").insertAdjacentHTML('afterend', bericht);
}


let input = document.querySelector(".message__input");
input.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
        // on enter
        let text = input.value;
        fetch("http://localhost:3000/controllers/api/v1/message", {
                method: "post",
                'headers': {
                    'Content-Type': 'application/json',
                  //  'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    "text": text
                })
            })
            .then(result => {
                return result.json();
            }).then(json => {
                input.value = "";
                input.focus();

                primus.write({
                    "action": "addTodo",
                    "data": json
                });

                //appendTodo(json);

            }).catch(err => {
                console.log(err)
            })
    }

    e.preventDefault();
});

/* //creates a listener for when you press a key
window.onkeyup = keyup;

//creates a global Javascript variable
var inputTextValue;
primus.write({some: "data"})
function keyup(e) {
  //setting your input text to the global Javascript Variable for every key press
  inputTextValue = e.target.value;
  
  //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
  if (e.keyCode == 13) {
     console.log("enter")
     e.preventDefault()
     const message = messageInput.value
     appendMessage(`You: ${message}`)
    
     messageInput.value = ''
     
     const messageElement = document.createElement('div')
     messageElement.innerText = message
     
     
    
    messageInput.value = ''  
    
  messageElement.innerText = message
  messageContainer.append(messageElement)
  }
}*/

 
 

//const name = prompt('What is your name?');




   
  

  
  