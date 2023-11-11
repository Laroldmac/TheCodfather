function hideForm() {
            // Get the form element by its ID
            var form = document.querySelector('form');

            // Set the display property to "none" to hide the form
            form.style.display = ('Thank you, '+name+', your table is confirmed for '+date+' at '+time);
        }
