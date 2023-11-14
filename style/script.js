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

document.getElementById("time").step = "900";
const timeInput = document.getElementById('time');

timeInput.addEventListener('input', function() {
    const selectElement = document.querySelector('#timeInput::-webkit-calendar-picker-indicator');

    if (selectElement) {
        selectElement.addEventListener('click', function() {
            const options = document.querySelectorAll('#timeInput option');

            options.forEach(option => {
                const value = parseInt(option.value.split(':')[1]);
                if (![0, 15, 30, 45].includes(value)) {
                    option.setAttribute('hidden', 'true');
                } else {
                    option.removeAttribute('hidden');
                }
            });
        });
    }
});

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
