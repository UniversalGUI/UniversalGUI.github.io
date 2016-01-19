$(document).ready(function() {

    //Function to hide the OS thumbnails
    function hideIcons () {
        $('#linux').hide();
        $('#osx').hide();
        $('#windows').hide();
    }

    function hideScreenshots () {
        $('.screenshots img, .screenshots h3, .screenshots p').hide();
    }

    //removes active class from OS screenshot area
    //the active class in this area makes the background color change to orange and gives it a grayish right border
    function removeOSActiveClasses() {
        $('.active').removeClass('active');
    }

    //Shows/hide the screenshot thumbnails depending on which OS icon has been clicked
    $('.linux').click(function() {          //when Linux icon is clicked
        hideIcons();                        //call the function that hides all of the OS elements
        $('#linux').show();                 //show the Linux screenshot thumbnails
        removeOSActiveClasses();            //remove the Active class from all of the OS icons (takes away orange highlight from everything)
        $('.linux').addClass('active');     //add class "active" to Linux so that that one becomes highlighted
    });
    $('.osx').click(function() {
        hideIcons();
        $('#osx').show();
        removeOSActiveClasses();
        $('.osx').addClass('active');
    });
    $('.windows').click(function() {
        hideIcons();
        $('#windows').show();
        removeOSActiveClasses();
        $('.windows').addClass('active');
    });

    $('#win-thumb').click(function() {
        hideScreenshots();
        $('.win-screenshot-lg').show();
    });

    $('#osx-thumb').click(function() {
        hideScreenshots();
        $('.osx-screenshot-lg').show();
    });

    $('#lin-thumb').click(function() {
        hideScreenshots();
        $('.linux-screenshot-lg').show();
    });

    //Determine which browser user is on and display screenshot thumbnails & default screenshot on page load accordingly.
    if ($('html').hasClass('win')) {
        $('.windows').click();
        $('#win-thumb').click();
    }
    else if ($('html').hasClass('linux')) {
        $('.linux').click();
        $('#lin-thumb').click();
    }
    else {
        $('.mac').click();
        $('#osx-thumb').click();
    }
});
