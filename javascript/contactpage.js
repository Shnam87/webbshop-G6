const contactName = document.querySelector("#nameInputField");
const email = document.querySelector("#emailInputField");
const choose = document.querySelector("#topicField");
const message = document.querySelector("#massageInputfield");
const submit = document.querySelector(".inputSubmit");
const submitted = document.querySelector(".submitted");



window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}


/*
const contactList = JSON.parse ( localStorage.getItem ("contactList")) || [];




const addContact=(e)=>{
  e.preventDefault();

  const contact = {
    contactName: contactName.value,
    topic: choose.value,
    email: email.value,
    message: message.value
  }

  if ( message.value == ""|| email.contactName =="" || email.email ==""){
    alert ("Information saknas");
    document.querySelectorAll(".input")
  } 


  else {
    contactList.push(contact);
    submitted.innerHTML = "Ditt meddelande har skickats!";
    localStorage.setItem("contactList", JSON.stringify(contactList));  
    document.querySelector('form').reset();
  }

}

submit.addEventListener("click", addContact);
*/
