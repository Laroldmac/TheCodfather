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

var formattedDate = year + '-' + month + '-' + day;

document.getElementById('date').min = formattedDate;

// Function to filter time options based on hours and minutes
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
  