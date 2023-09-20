// Name: Megha Panchani
// Student no: w0836064
// Assignment 2 


$(document).ready(function () {
    // Event handler for when a link is clicked
    $("a").click(function (event) {
      event.preventDefault(); // Prevent the default behavior of the link
  
      var linkId = $(this).attr("id"); // Get the ID of the clicked link
      var contentDiv = $("#content"); // Get the content div
  
      // Hide the content div with animation
      contentDiv.hide(500, function () {
        // Clear the contents of the content div
        contentDiv.empty();
  
        // Use AJAX with the "GET" method to load content from the appropriate file
        $.ajax({
          url: linkId + ".html", // Assuming that the file names match the link IDs
          method: "GET", // Specify the HTTP method as "GET"
          dataType: "html",
          success: function (data) {
            // Append the loaded content to the content div
            contentDiv.html(data);
  
            // Animate the content div to display the newly loaded HTML
            contentDiv.show(500);
          },
          error: function () {
            console.log("Error loading content.");
          },
        });
      });
    });
  });
  
