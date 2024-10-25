document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save-btn');
    const statusIndicator = document.getElementById('status-indicator');
    const statusText = document.getElementById('status-text');

    saveButton.addEventListener('click', () => {
        // Logic for saving configuration, such as an API call to save data (omitted in this example)
        const isSuccess = saveConfiguration(); // Simulate saving data

        if (isSuccess) {
            // Update status indicator
            statusIndicator.classList.add('active');
            statusText.textContent = 'Configuration Saved Successfully';
        } else {
            statusIndicator.classList.remove('active');
            statusText.textContent = 'Configuration Not Saved';
        }
    });

    function saveConfiguration() {
        // Simulated API call or logic to save configuration
        // In a real app, you'd send data to a server and return success/failure
        return true;  // Simulate success
    }
});
