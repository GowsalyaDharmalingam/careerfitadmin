document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual submission

        // Here you can handle form data and send it to the server
        alert('Settings saved successfully!');
    });
});
