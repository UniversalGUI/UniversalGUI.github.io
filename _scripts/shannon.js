$(document).ready(function() {

    var screenshotData = [
        {
            "os": "win",
            "large": "ugui-win.png",
            "largalt": "Screenshot of UGUI running on Windows",
            "thumb": "ugui-win-th.png",
            "thumbalt": "Thumbnail of a screenshot of UGUI running on Windows",
            "title": "UGUI Running on Windows",
            "paragraph": ""
        },
        {
            "os": "osx",
            "thumb": "ugui-osx-th.png",
            "large": "ugui-osx.png",
            "thumbalt": "Thumbnail of a screenshot of UGUI running on OSX",
            "largealt": "Screenshot of UGUI running on OSX",
            "title": "UGUI Running on OSX",
            "paragraph":  ""
        },
        {
            "os": "ubuntu",
            "thumb": "ugui-ubuntu-th.png",
            "large": "_img/screenshot/ugui-ubuntu.png",
            "thumbalt": "Thumbnail of a screenshot of UGUI running on Ubuntu",
            "largealt": "Screenshot of UGUI running on Ubuntu",
            "title": "UGUI Running on Ubuntu",
            "paragraph": ""
        }
    ];

    for (var i = 0; i < screenshotData.length; i++) {
        var os = screenshotData[i].os;
        var thumbImage = screenshotData[i].thumb;
        var thumbAltText = screenshotData[i].thumbalt;
        $(".thumbnails").append(
            '<img class="' + os + '" src="_img/screenshot/' + thumbImage + '" alt="' + thumbAltText + '" />'
        );
    }

    $("#screenshots header div").click(function() {
        $("#screenshots header div").removeClass("active");
        var os = $(this).attr("class");
        $(this).addClass("active");
        $(".thumbnails img").hide();
        $(".thumbnails ." + os).show();
    });


/*

        SHANNON TO DO:
        Add a class of "active" to the thumbnail that is clicked.
        When you change to a different OS, auto click the first thumbnail for that OS.

        Rewrite the following as nice, clean, easily readible jQuery.
        Hint: You won't have any for loops when done.
        Pro-tip: console.log is your friend.

*/

/*
    var thumbs = $('.thumbnails img');
        //var thumbs = document.querySelectorAll('.thumbnails img');  ... select everything in the document that meets this & set it to var thumbs; returns an array
    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].onclick = function () {                                   //Attach the click event to the current thumbnail (in the future, it will look at what is clicked)
            var className = this.getAttribute('src')                             //get the "src" attribute from img src="sdgjdskljg.jpg"
                .split('_img/screenshot/')[1]                               //"_img/screenshot/ugui-ubuntu-th.png"
                .split('-th')[0];                                           //splits the above into ["ugui-ubuntu", "-th.png"] & returns index 0 of array: ugui-ubuntu
            var elements = document.querySelectorAll('#screenshots h3, #screenshots span, #screenshots p');
            for (var j = 0; j < elements.length; j++) {
                elements[j].style.display = 'none';                         //setting all of these to "display: none" in the CSS
            }
            var elementsToBeShown = document.getElementsByClassName(className);              //class name is ugui-win, ugui-osx etc as determined by file string above
            for (var j = 0; j < elementsToBeShown.length; j++) {
                elementsToBeShown[j].style.display = 'inline-block';                    //now it's showing the class name that was clicked
            }
        }
    }
    */
    $('.thumbnails img').click(function () {                                                           //get the piece of the image src that contains the class name in HTML
        var src = $(this).attr('src');
        var className = src.split('_img/screenshot/')[1].split('-th')[0];                   //jQuery will attach the click event to all thumbnail images
        $('#screenshots h3, #screenshots span, #screenshots p').hide();
        $('.' + className).show();
    });
        //show the elements in #screenshots section that match the class name that was clicked


    //Determine which browser user is on and display screenshot thumbnails & default screenshot on page load accordingly.
    if ($('html').hasClass('win')) {
        $('#screenshots header .win').click();
        for (var i = 0; i < screenshotData.length; i++) {
            var os = screenshotData[i].os;
            if (os == "win") {
                $( $(".thumbnails img")[i] ).click();
                return;
            }
        }
    } else if ($('html').hasClass('linux')) {
        $('#screenshots header .ubuntu').click();
        for (var i = 0; i < screenshotData.length; i++) {
            var os = screenshotData[i].os;
            if (os == "ubuntu") {
                $( $(".thumbnails img")[i] ).click();
                return;
            }
        }
    } else {
        $('#screenshots header .osx').click();
        for (var i = 0; i < screenshotData.length; i++) {
            var os = screenshotData[i].os;
            if (os == "osx") {
                $( $(".thumbnails img")[i] ).click();
                return;
            }
        }
    }

});
