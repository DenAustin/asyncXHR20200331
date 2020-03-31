// Add event listener for the button
document.getElementById("button").addEventListener("click", function(){
   //create a new instance of XHR Object (i.e XMLhttp)
   const xhr = new XMLHttpRequest()

   //open is an object associate with XML
   //open to specify the type of request being made; to which file
   xhr.open("GET", "data.txt", true);
   //set xhr.onload to function
   console.log(this);
   xhr.onload = function(){
      
            //Http statuses
      //200: "OK"
      //403: "Forbidden"
      //404: "Not Found"

      if(this.status === 200){
         document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`;
      }
   }

   //On error in case something goes wrong

   xhr.onerror = function(){
      console.log("request error");

   }

   
   //send here is almost like calling the functions
   //Nothing happens unless you do send
   xhr.send();
});

//readyState values
//0: request not initialized
//1: server connection established
//2: request received
//3: processing request
//4: request finished and response is ready

document.createElement("<input>").value="input"