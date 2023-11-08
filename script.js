$(document).ready(function () {


    // Accordion functionality (keep your existing code)
    $('.accordion-label').click(function () {
        const panel = $(this).next('.accordion-panel');
        $('.accordion-panel').not(panel).slideUp();
        panel.slideToggle();
    });

    // Tab functionality (keep your existing code)
    $('.tab-label').click(function () {
        const index = $(this).index();
        $('.tab-label').removeClass('active');
        $(this).addClass('active');
        $('.tab-pane').hide().eq(index).show();
    });

    

    $(document).ready(function () {
        // Define a variable to track the sorting order for each column
        const sortingOrder = {};
    
        // Function to sort the table rows based on a specific column
        const sortTable = (column) => {
            const table = $('.character-table tbody');
            const rows = table.find('tr').get();
            rows.sort(function (a, b) {
                const keyA = $(a).find(`td:eq(${Object.keys(sortingOrder).indexOf(column)})`).text();
                const keyB = $(b).find(`td:eq(${Object.keys(sortingOrder).indexOf(column)})`).text();
    
                if (sortingOrder[column] === 'asc') {
                    return keyA.localeCompare(keyB);
                } else {
                    return keyB.localeCompare(keyA);
                }
            });
            table.empty();
            $.each(rows, function (index, row) {
                table.append(row);
            });
        };
    
        // Function to toggle the sorting order and update the chevron
        const toggleSorting = (column) => {
            if (sortingOrder[column] === 'asc') {
                sortingOrder[column] = 'desc';
            } else if (sortingOrder[column] === 'desc') {
                sortingOrder[column] = ''; // Reset sorting
            } else {
                sortingOrder[column] = 'asc';
            }
    
            // Update the chevron
            $('.character-table thead th a').each(function () {
                const dataColumn = $(this).data('column');
                const chevron = $(this).find('.chevron');
                if (dataColumn === column) {
                    if (sortingOrder[column] === 'asc') {
                        chevron.html('&#x25B2;');
                    } else if (sortingOrder[column] === 'desc') {
                        chevron.html('&#x25BC;');
                    } else {
                        chevron.html(''); // No sorting, remove chevron
                    }
                } else {
                    chevron.html('');
                }
            });
        };
    
        // Handle clicking on table headings to sort data
        $('.character-table thead th a').click(function (e) {
            e.preventDefault();
            const column = $(this).data('column');
            toggleSorting(column);
            sortTable(column);
        });
    
        // Load character data from JSON and populate the table (keep your existing code)
        // ...
    });
    
    // Load character data from JSON and populate the table
    $.ajax({
        url: 'characters.json', // Replace with the correct path to your JSON file
        dataType: 'json',
        success: function (data) {
            const table = $('.character-table tbody');
            data.forEach(function (character) {
                table.append(`
                    <tr>
                        <td>${character.firstName}</td>
                        <td>${character.lastName}</td>
                        <td>${character.age}</td>
                        <td>${character.occupation}</td>
                        <td>${character.city}</td>
                        <td>${character.dateOfBirth}</td>
                    </tr>
                `);
            });
        },

       
        
        error: function (error) {
            console.error('Failed to load character data:', error);
        }
    });
});
