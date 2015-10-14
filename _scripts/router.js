
//Get the URL the user typed
var desiredURL = window.location.pathname;

//The second item in each array is what the user could have typed
//The first item in each array is a known good URL to forward them to
var set = [
    ["/download", "downloads"],
    ["/download", "dl"],
    ["/download", "source"],
    ["/download", "archive"]
];

function forward(arr) {
    //RegExp to match any URL (after the domain) with "downloads" in it
    var regex = new RegExp ( "^(?:\/)(?:[^\ ]*)(?:" + arr[1] + ")(?:.*)$", "gm" );

    //If the typed URL has "downloads" anywhere in it
    if (regex.test(desiredURL)) {
        //go to /download
        window.location.replace(arr[0]);
        return
    }
}

for (var i = 0; i < set.length; i++) {
    forward(set[i]);
}
