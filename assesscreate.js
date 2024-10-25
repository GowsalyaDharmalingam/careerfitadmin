document.addEventListener('DOMContentLoaded', () => {
    const uploadType = document.getElementById('upload-type');
    const manualUpload = document.querySelector('.manual-upload');
    const bulkUpload = document.querySelector('.bulk-upload');
    const saveButton = document.getElementById('save-btn');
    const publishButton = document.getElementById('publish-btn');
    const generateAiButton = document.getElementById('generate-ai');
    const aiSuggestionField = document.getElementById('ai-suggestion');

    // Show/Hide upload sections based on selection
    uploadType.addEventListener('change', () => {
        if (uploadType.value === 'manual') {
            manualUpload.style.display = 'block';
            bulkUpload.style.display = 'none';
        } else {
            manualUpload.style.display = 'none';
            bulkUpload.style.display = 'block';
        }
    });

    // Save as Draft
    saveButton.addEventListener('click', () => {
        alert('Assessment saved as draft!');
        // Code to save draft will go here (e.g., API call to save)
    });

    // Publish Assessment
    publishButton.addEventListener('click', () => {
        alert('Assessment published!');
        // Code to publish assessment will go here (e.g., API call to publish)
    });

    // Simulate AI Suggestions
    generateAiButton.addEventListener('click', () => {
        aiSuggestionField.value = '1. Explain the significance of AI in modern technology.\n2. What are the ethical concerns around AI usage?';
    });
});
