// Filter users based on the search input
function filterUsers() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#userTableBody tr");
    
    rows.forEach(row => {
        const name = row.cells[0].innerText.toLowerCase();
        row.style.display = name.includes(searchValue) ? "" : "none";
    });
}

// Sort the table by column
function sortTable(columnIndex) {
    const table = document.querySelector(".user-table");
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

// Edit user functionality (this could be expanded to include modals, forms, etc.)
function editUser(button) {
    const row = button.closest('tr');
    const username = row.cells[0].innerText;
    alert(`Edit functionality for ${username} is go to import users page.`);
}

// Activate/Deactivate user
function toggleStatus(button) {
    const row = button.closest('tr');
    const statusCell = row.cells[2];
    const buttonText = button.innerText;

    if (buttonText === "Deactivate") {
        statusCell.innerText = "Inactive";
        statusCell.classList.remove('status-active');
        statusCell.classList.add('status-inactive');
        button.innerText = "Activate";
        button.classList.add('activate-btn');
        button.classList.remove('deactivate-btn');
    } else {
        statusCell.innerText = "Active";
        statusCell.classList.remove('status-inactive');
        statusCell.classList.add('status-active');
        button.innerText = "Deactivate";
        button.classList.add('deactivate-btn');
        button.classList.remove('activate-btn');
    }
}

// Delete user
function deleteUser(button) {
    const row = button.closest('tr');
    const username = row.cells[0].innerText;

    if (confirm(`Are you sure you want to delete ${username}?`)) {
        row.remove();
        alert(`${username} has been deleted.`);
    }
}
