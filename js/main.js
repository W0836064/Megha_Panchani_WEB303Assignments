$(document).ready(function() {
    // Attach a click event listener to elements with the IDs 'prospect', 'convert', and 'retain'
    $("#prospect, #convert, #retain").on("click", function(event) {
        // Prevent the default behavior of the clicked link (e.g., navigating to a new page)
        event.preventDefault();

        // Get the ID of the clicked link ('prospect', 'convert', or 'retain')
        var linkId = $(this).attr("id");

        // Make an AJAX request to load content from a file with a name matching the link ID
        $.ajax({
            url: linkId + ".html", // Construct the URL based on the link ID
            type: 'GET', // Specify the HTTP request method as 'GET'
            dataType: "html", // Specify that we expect HTML content in the response
            success: function(data) {
                // Get a reference to the 'content' div
                var $contentVal = $('#content');

                // Hide the content div with a 400ms animation
                $contentVal.hide();

                // Set the HTML content of the 'content' div to the data received from the AJAX request
                $contentVal.html(data);

                // Fade in the 'content' div with a 1500ms animation
                $contentVal.fadeIn(1500);

                // Apply a border to the 'content' div
                $contentVal.css({
                    'border': '1.5px solid blue'
                });
            },
            error: function() {
                // Display an alert message if there is an error loading content
                alert("Error loading content.");
            }
        });
    });
});