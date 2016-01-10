/** Below code shows/hides the screenshot thumbnails depending on which OS icon has been clicked. **/

$(document).ready(function() {
    function hideElements () {
        $('#linux').hide();
        $('#osx').hide();
        $('#windows').hide();
    }
    $('.linux').click(function() {
        hideElements();
        $('#linux').show();
    });
    $('.osx').click(function() {
        hideElements();
        $('#osx').show();
    });
    $('.windows').click(function() {
        hideElements();
        $('#windows').show();
    });
});
