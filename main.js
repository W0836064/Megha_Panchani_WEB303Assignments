// WEB303 Assignment 2


$(document).ready(function () {
    // Initially hide the content div
    $("#content").hide();

    // Function to load content and animate
    function loadAndAnimateContent(url) {
        $.ajax({
            url: linkId + ".html", // Construct the URL based on the link ID
            type: 'GET',
            dataType: "html",
            success: function (data) {
                // Hide content with animation
                $("#content").fadeOut(300, function () {
                    // Clear the content
                    $(this).empty();

                    // Append the new content and fadeIn
                    $(this).append(data).fadeIn(300);
                });
            }
        });
    }

    // Click event for links
    $("#content-wrapper a").on("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
        var url = $(this).attr("href");
        loadAndAnimateContent(url);
    });
});
