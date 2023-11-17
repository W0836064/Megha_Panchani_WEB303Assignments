$(document).ready(function() {
    $.ajax({
        url: 'characters.json',
        dataType: 'json',
        success: function(data) {
            populateTable(data);

            $('.filterBtn').on('click', function() {
                const filter = $(this).data('filter');
                filterCharacters(filter);
            });

            $('#searchInput').on('input', function() {
                const searchTerm = $(this).val().toLowerCase();
                searchCharacters(searchTerm);
            });
        }
    });

    function populateTable(data) {
        const tbody = $('#characterTable tbody');
        tbody.empty();
        data.forEach(character => {
            const row = `<tr>
                            <td>${character.firstName}</td>
                            <td>${character.lastName}</td>
                            <td>${character.info1}</td>
                            <td>${character.info2}</td>
                            <td>${character.info3}</td>
                            <td>${character.info4}</td>
                        </tr>`;
            tbody.append(row);
        });
        updateFilterCounts(data);
    }

    function filterCharacters(filter) {
        const tbody = $('#characterTable tbody');
        tbody.find('tr').hide();
        tbody.find(`tr td:nth-child(2):icontains(${filter})`).parent().show();
    }

    function searchCharacters(searchTerm) {
        const tbody = $('#characterTable tbody');
        tbody.find('tr').each(function() {
            const row = $(this);
            const firstName = row.find('td:first').text().toLowerCase();
            if (firstName.includes(searchTerm)) {
                row.addClass('highlight');
            } else {
                row.removeClass('highlight');
            }
        });
    }

    $.extend($.expr[":"], {
        "icontains": function(elem, i, match, array) {
            return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
    });

    function updateFilterCounts(data) {
        const rangeAMCount = data.filter(character => character.lastName.toUpperCase().charCodeAt(0) >= 65 && character.lastName.toUpperCase().charCodeAt(0) <= 77).length;
        const rangeNZCount = data.length - rangeAMCount;

        $('#rangeAM').text(rangeAMCount);
        $('#rangeNZ').text(rangeNZCount);
    }
});
