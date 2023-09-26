// Method for making a $.getJSON request
function fetchTeamDataWithGetJSON() {
    $.getJSON("team.json", function (data) {
      processTeamData(data);
    });
  }
  
  // Method for making a $.ajax request
  function fetchTeamDataWithAjax() {
    // Display "Loading..." message
    $("#team").text("Loading...");
  
    $.ajax({
      url: "team.json",
      type: "GET",
      dataType: "json",
      success: function (data) {
        // Simulate a 3-second delay before displaying the data
        setTimeout(function () {
          processTeamData(data);
        }, 3000);
      },
      error: function () {
        $("#team").text("Error: Content could not be retrieved.");
      },
    });
  }
  
  // Method for processing the retrieved team data
  function processTeamData(data) {
    var teamDiv = $("#team");
    teamDiv.empty(); // Clear existing content
  
    $.each(data, function (index, member) {
      // Create elements for name, position, and bio
      var nameElement = $("<h2>").text(member.name);
      var positionElement = $("<h5>").text(member.position);
      var bioElement = $("<p>").text(member.bio);
  
      // Append elements to the teamDiv
      teamDiv.append(nameElement, positionElement, bioElement);
    });
  }
  
  // Call one of the methods in a ready function to run the code
  $(document).ready(function () {
    fetchTeamDataWithGetJSON(); // You can also use fetchTeamDataWithAjax() here
  });
  