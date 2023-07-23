$(function() {
    /* div with id=common-header change to be footer.html , uses title from document*/
    $.get('header.html', function(data) {
        $('#common-header').html(data);
        
        // Dynamically update the paragraph based on the page title
        var pageTitle = document.title;
        $('#header-paragraph').text(pageTitle);
    });

    /* div with id=common-footer change to be footer.html*/
    $.get('footer.html', function(data) {
        $('#common-footer').html(data);
    });
    
});