const contactName = document.querySelector("#nameInputField");
const email = document.querySelector("#emailInputField");
const choose = document.querySelector("#topicField");
const message = document.querySelector("#massageInputfield");
const submit = document.querySelector(".inputSubmit");
const submitted = document.querySelector(".submitted");

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

/*



  //document.forms[0].reset();
  //contactName.value="";
  //choose.value="";
  //email.value="";
  //message.value="";


  const contact = localStorage.getItem("contactList")
  console.log (contact)

  const contactList = JSON.parse(contact)
  console.log (contactList);


 for (let i = 0; i < localStorage.length; i++){
    test.innerHTML = localStorage.getItem("Contact-list");
   
  }

  document.querySelector("button").addEventListener ("click", addProduct);

  function addProduct(e) {
  e.preventDefault();


  const src = document.querySelector("input").value;
  const productName = document.querySelector("productName").value;
  
  localStorage.setItem("src",src)
  localStorage.setItem("productName",productName)
  
  }
 

  document.querySelector("div").innerHTML = "<span>" + productName + "</span>"

  +"<img 
  
src=" +src + " alt=  EJ KALR!!!!

*/




/* const submit = document.querySelector(".inputSubmit");


const signUp = e => {
    let contactName = document.querySelector("#nameInputField").value,
        choose = document.querySelector("#topicField").value,
        email = document.querySelector("#emailInputField").value,
        message = document.querySelector("#massageInputfield").value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.contactName.toLowerCase() == contactName.toLowerCase() && 
            data.message.toLowerCase() == message.toLowerCase()
        );

    f(!exist){
        formData.push({ contactName, choose, email, message });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.querySelector("#nameInputField").focus();
        alert("Account Created.\n\nVänligen lämna ett meddelande.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
    e.preventDefault();i
}

submit.addEventListener("click", signUp);
*/