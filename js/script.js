$(document).ready(function () {
    // Accordion functionality
    $('.accordion-label').click(function () {
        const panel = $(this).next('.accordion-panel');
        $('.accordion-panel').not(panel).slideUp();
        panel.slideToggle();
    });

    // Tab functionality
    $('.tab-label').click(function () {
        const index = $(this).index();
        $('.tab-label').removeClass('active');
        $(this).addClass('active');
        $('.tab-pane').hide().eq(index).show();
    });
});
