$(function() {
    $.get('header.html', function(data) {
        $('#common-header').html(data);
        
        // Dynamically update the paragraph based on the page title
        var pageTitle = document.title;
        $('#header-paragraph').text('Welcome to ' + pageTitle + '!');
    });
});