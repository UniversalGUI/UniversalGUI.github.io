$(document).ready(function() {

    //Function to hide the OS thumbnails
    function hideElements () {
        $('#linux').hide();
        $('#osx').hide();
        $('#windows').hide();
    }

    //removes active class from OS screenshot area
    function removeOSActiveClasses() {
        $('.active').removeClass('active');
    }

    //Shows/hide the screenshot thumbnails depending on which OS icon has been clicked
    $('.linux').click(function() {
        hideElements();
        $('#linux').show();
        removeOSActiveClasses();
        $('.linux').addClass('active');
    });
    $('.osx').click(function() {
        hideElements();
        $('#osx').show();
        removeOSActiveClasses();
        $('.osx').addClass('active');
    });
    $('.windows').click(function() {
        hideElements();
        $('#windows').show();
        removeOSActiveClasses();
        $('.windows').addClass('active');
    });

    //Determine which browser user is on and display screenshot thumbnails on page load accordingly.
    if ($('html').hasClass('win')) {
        $('.windows').click();
    }
    else if ($('html').hasClass('linux')) {
        $('.linux').click();
    }
    else {
        $('.mac').click();
    }
});
