function filterLogs() {
    const dateFilter = document.getElementById('dateFilter').value;
    const userFilter = document.getElementById('userFilter').value.toLowerCase();
    const actionFilter = document.getElementById('actionFilter').value;

    const rows = document.querySelectorAll('#logTableBody tr');

    rows.forEach(row => {
        const date = row.cells[0].textContent;
        const user = row.cells[1].textContent.toLowerCase();
        const action = row.cells[2].textContent;

        const dateMatch = dateFilter ? date.startsWith(dateFilter) : true;
        const userMatch = user.includes(userFilter);
        const actionMatch = actionFilter ? action === actionFilter : true;

        if (dateMatch && userMatch && actionMatch) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function sortTable(columnIndex) {
    const table = document.querySelector('.audit-logs-table tbody');
    const rows = Array.from(table.rows);
    const sortedRows = rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent;
        const bText = b.cells[columnIndex].textContent;
        return aText.localeCompare(bText);
    });
    
    sortedRows.forEach(row => table.appendChild(row)); // Append sorted rows to the table
}

function viewDetails(button) {
    const row = button.closest('tr');
    const timestamp = row.cells[0].textContent;
    const user = row.cells[1].textContent;
    const action = row.cells[2].textContent;

    alert(`Details:\nTimestamp: ${timestamp}\nUser: ${user}\nAction: ${action}`);
}
