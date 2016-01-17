$(document).ready(function() {

    //Function to hide the OS thumbnails
    function hideElements () {
        $('#linux').hide();
        $('#osx').hide();
        $('#windows').hide();
    }

    //removes active class from OS screenshot area
    //the active class in this area makes the background color change to orange and gives it a grayish right border
    function removeOSActiveClasses() {
        $('.active').removeClass('active');
    }

    //Shows/hide the screenshot thumbnails depending on which OS icon has been clicked
    $('.linux').click(function() {          //when Linux icon is clicked
        hideElements();                     //call the function that hides all of the OS elements
        $('#linux').show();                 //show the Linux screenshot thumbnails
        removeOSActiveClasses();            //remove the Active class from all of the OS icons (takes away orange highlight from everything)
        $('.linux').addClass('active');     //add class "active" to Linux so that that one becomes highlighted
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
