//Laura MacKenzie
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

if (day < 10) {
    day = '0' + day; 
}

if (month < 10) {
    month = '0' + month; 
}
//Laura MacKenzie
var formattedDate = year + '-' + month + '-' + day;
//Laura MacKenzie
document.getElementById('date').min = formattedDate;

//Laura MacKenzieFunction to filter time options based on hours and minutes
function filterTimeOptions() {
    const selectedHour = document.getElementById('hours').value;
    const selectedMinute = document.getElementById('mins').value;

    const options = document.querySelectorAll('#mins option');

    options.forEach(option => {
        const value = option.value;
        if ((selectedHour === '--' && value !== '--') || (selectedHour !== '--' && value !== selectedMinute)) {
            option.setAttribute('hidden', 'true');
        } else {
            option.removeAttribute('hidden');
        }
    });
}
//Laura MacKenzie
function myForm() {
    // Get the form elements by their IDs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.querySelector('input[type="date"]').value;
    var hours = document.getElementById('hours').value;
    var mins = document.getElementById('mins').value;

    // Set the display property of the form to "none" to hide it
    document.getElementById('myForm').style.display = 'none';

    // Display the confirmation message
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = 'Thank you, ' + name + ', your table is confirmed for ' + date + ' at ' + hours + ':' + mins;

    // Prevent default form submission
    return false;
}
//Laura MacKenzie
function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}
//Laura MacKenzie
function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}
//Laura MacKenzie
function contactForm() {

    var form = document.getElementById('contactForm');
    var contactConfirmationMessage = document.getElementById('contactConfirmationMessage');

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contactNumber').value;

    form.style.display = 'none';

    alert (contactConfirmationMessage.innerHTML = 'Thank you, ' + firstName + " " + lastName + ', we will be in contact with you soon, at: ' + email + ' or at ' + contactNumber);

}

function myGallery(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
  
// Minigame JS below

let But = document.querySelector("#But");
let OutputMenu = document.querySelector("#OutputMenu");
let Input = 0;


function GetMenuItem () {
   

   let Input = document.querySelector("#UserChoice").value;

   if (Input>0 && Input <10 ) {
    window.alert("Congratulations, you have selected Pancakes!");
   // OutputMenu.innerHTML = "You have selected Pancakes!"
   }

   else if (Input>10 && Input <20) {
    window.alert("Congratulations, you have selected Bruschetta!");
    //OutputMenu.innerHTML = "You have selected Bruschetta!";

   }

   else if (Input>20 && Input <30) {
    alert("Congratualtions, You have selected Eggs Benedict!");
    //OutputMenu.innerHTML = "You have selected Eggs Benedict!";

   }

   else if (Input>30 && Input <40) {
    alert("Congratulations,you have Sun Vine Tomato Pasta!");
    //OutputMenu.innerHTML = "You have Sun Vine Tomato Pasta!";

   }

   else if (Input>40 && Input <50) {
    alert("Congratulations, you have selected Vegetarian Pizza!");
    //OutputMenu.innerHTML = "You have selected Vegetarian Pizza!";

   }

   else if (Input>50 && Input <60) {
    alert("Congratulations, You have selected Mushroom and Parmesan Spaghetti!");
    //OutputMenu.innerHTML = "You have selected Mushroom and Parmesan Spaghetti!";

   }

   else if (Input>60 && Input <80) {
    alert("Congratulations, you have selected Lasagna!");
    //OutputMenu.innerHTML = "You have selected Lasagna!";

   }

   else if (Input>80 && Input <=100) {
    alert("Congratulations, You have selected Bufallo Mozarella Macaroni Tomato Pasta!!");
    //OutputMenu.innerHTML = "You have selected Bufallo Mozarella Macaroni Tomato Pasta!";

   }

   else {
    alert("Please enter a number between 1-100");
    //OutputMenu.innerHTML = "Please enter a number between 1-100"


   };
   

}
// Font change on menu page (Jetinder Rathore)

function FontChange (){
    document.getElementById("Change").style.fontStyle = "italic";
    document.getElementById("Men1").style.fontStyle = "italic";
    document.getElementById("Men2").style.fontStyle = "italic";
    document.getElementById("Men3").style.fontStyle = "italic";

}
