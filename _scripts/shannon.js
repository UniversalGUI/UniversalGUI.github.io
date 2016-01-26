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

    var thumbs = document.querySelectorAll('.thumbnails img');
    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].onclick = function () {
            var file = this.getAttribute('src').split('_img/screenshot/')[1].split('-th')[0];
            var elements = document.querySelectorAll('#screenshots h3, #screenshots span, #screenshots p');
            for (var j = 0; j < elements.length; j++) {
                elements[j].style.display = 'none';
            }
            var shown = document.getElementsByClassName(file);
            for (var j = 0; j < shown.length; j++) {
                shown[j].style.display = 'inline-block';
            }
        }
    }


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
