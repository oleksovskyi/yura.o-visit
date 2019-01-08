function contactTab() {
    window.open('contact.html', '_blank');
}

$(document).ready(function(){
    $('#scroll_top').click(function(){
       $('html, body').animate({scrollTop : 0},350);
       return false;
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 250) {
        $('#scroll_top').fadeIn();                     
    }else if ($(this).scrollTop() < 250) {
        $('#scroll_top').hide();
    }
});
