const pageTitle = document.getElementById('pageTitle');
$(function() {
    $('#common-header').load('header.html');

    var pageTitle = document.title;
    $('#header-paragraph').text(pageTitle);
});