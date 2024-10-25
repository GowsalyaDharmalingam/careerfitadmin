// Select all checkboxes
function selectAll(source) {
    const checkboxes = document.querySelectorAll('.select-assessment');
    checkboxes.forEach(checkbox => checkbox.checked = source.checked);
}

// Filter assessments based on the search input
function filterAssessments() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#assessmentTableBody tr");
    
    rows.forEach(row => {
        const title = row.cells[1].innerText.toLowerCase();
        row.style.display = title.includes(searchValue) ? "" : "none";
    });
}

// Sort the table by column
function sortTable(columnIndex) {
    const table = document.querySelector(".assessment-table");
    let switching = true;
    let shouldSwitch, i, x, y;
    let direction = "asc";  // Default to ascending
    let switchCount = 0;
    
    while (switching) {
        switching = false;
        const rows = table.rows;
        
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
            
            if (direction === "asc" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            } else if (direction === "desc" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount++;
        } else if (switchCount === 0 && direction === "asc") {
            direction = "desc";
            switching = true;
        }
    }
}

// Archive selected assessments
function archiveSelected() {
    const selectedCheckboxes = document.querySelectorAll('.select-assessment:checked');
    selectedCheckboxes.forEach(checkbox => {
        const row = checkbox.closest('tr');
        const statusCell = row.cells[2];
        
        if (!statusCell.classList.contains('status-archived')) {
            statusCell.innerText = 'Archived';
            statusCell.classList.remove('status-active');
            statusCell.classList.add('status-archived');
        }
    });
    alert('Selected assessments have been archived.');
}

// Delete selected assessments
function deleteSelected() {
    const selectedCheckboxes = document.querySelectorAll('.select-assessment:checked');
    selectedCheckboxes.forEach(checkbox => {
        const row = checkbox.closest('tr');
        row.remove();
    });
    alert('Selected assessments have been deleted.');
}

// Delete individual assessment
function deleteAssessment(button) {
    const row = button.closest('tr');
    row.remove();
    alert('Assessment has been deleted.');
}
function editUser(button) {
    const row = button.closest('tr');
    const username = row.cells[0].innerText;
    alert(`Edit functionality for ${username} is go to create assessment page.`);
}