$(document).ready(function () {
    let charactersData = [];
  
    $.ajax({
      url: "characters.json",
      dataType: "json",
      success: function (data) {
        charactersData = data;
        populateTable(charactersData);
        updateFilterCounts(charactersData);
  
        $(".filterBtn").on("click", function () {
          const filter = $(this).data("filter");
          filterCharacters(filter);
        });
  
        $("#searchInput").on("input", function () {
          const searchTerm = $(this).val().toLowerCase();
          searchCharacters(searchTerm);
        });
      }
    });
  
    function populateTable(data) {
      const tbody = $("#characterTable tbody");
      tbody.empty();
      data.forEach((character) => {
        const row = `<tr>
            <td>${character.firstName}</td>
            <td>${character.lastName}</td>
            <td>${character.occupation}</td>
            <td>${character.relationship}</td>
            <td>${character.quirk}</td>
            <td>${character.trait}</td>
          </tr>`;
        tbody.append(row);
      });
    }
  
    function filterCharacters(filter) {
      const tbody = $("#characterTable tbody");
      tbody.find("tr").hide();
  
      const filteredRows = charactersData.filter((character) => {
        const lastNameFirstChar = character.lastName.charAt(0).toUpperCase();
        return (
          (filter === "A-M" &&
            lastNameFirstChar >= "A" &&
            lastNameFirstChar <= "M") ||
          (filter === "N-Z" &&
            lastNameFirstChar >= "N" &&
            lastNameFirstChar <= "Z")
        );
      });
  
      const filteredIndices = filteredRows.map((filteredRow) =>
        charactersData.findIndex((character) => character === filteredRow)
      );
  
      filteredIndices.forEach((index) => {
        tbody.find(`tr:eq(${index})`).show();
      });
    }
  
    function searchCharacters(searchTerm) {
      const tbody = $("#characterTable tbody");
      const rows = tbody.find("tr");
  
      rows.each(function () {
        const row = $(this);
        const firstName = row.find("td:first").text().toLowerCase();
        const containsTerm = firstName.includes(searchTerm.toLowerCase());
  
        if (containsTerm) {
          row.addClass("highlight").css({
            "background-color": "darkgreen",
            color: "white"
          });
        } else {
          row.removeClass("highlight").css({
            "background-color": "",
            color: ""
          });
        }
      });
  
      if (!searchTerm) {
        // Clear search term, remove all highlights
        rows.removeClass("highlight").css({
          "background-color": "",
          color: ""
        });
      }
    }
  
    function updateFilterCounts(data) {
      const rangeAMCount = data.filter(
        (character) =>
          character.lastName.toUpperCase().charCodeAt(0) >= 65 &&
          character.lastName.toUpperCase().charCodeAt(0) <= 77
      ).length;
      const rangeNZCount = data.length - rangeAMCount;
  
      $("#rangeAM").text(`A - M (${rangeAMCount})`);
      $("#rangeNZ").text(`N - Z (${rangeNZCount})`);
    }
  });
  