document.getElementById('questionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const questionText = document.getElementById('questionText').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const answer = document.getElementById('answer').value;
    const category = document.getElementById('category').value;

    const previewTable = document.getElementById('previewTable').getElementsByTagName('tbody')[0];
    
    const newRow = previewTable.insertRow();

    newRow.innerHTML = `
        <td>${questionText}</td>
        <td>
            1. ${option1} <br>
            2. ${option2} <br>
            3. ${option3} <br>
            4. ${option4}
        </td>
        <td>${answer}</td>
        <td>${category}</td>
    `;

    // Clear form inputs after adding
    document.getElementById('questionForm').reset();
});

// Bulk upload functionality (CSV/Excel)
document.getElementById('bulkUploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('bulkUpload');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select a file to upload.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        // Here you would process the file content and populate the preview table
        alert('Bulk upload successful (file processing not implemented).');
    };
    
    reader.readAsText(file);
});
