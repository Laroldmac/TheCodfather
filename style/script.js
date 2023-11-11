function myForm() {
    // Get the form elements by their IDs
    var form = document.getElementById('myForm');
    var confirmationMessage = document.getElementById('confirmationMessage');

    // Get the values from the form
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // Set the display property of the form to "none" to hide it
    form.style.display = 'none';

    // Display the confirmation message
    confirmationMessage.innerHTML = 'Thank you, ' + name + ', your table is confirmed for ' + date + ' at ' + time;

    // Prevent default form submission
    return false;
}
