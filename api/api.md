# UGUI API Documentation

The "**ugui Object**" contains many useful items for developers. This section will outline everything it contains. Items in each section of displayed alphabetically.

Titles on this page <span class="blue">in blue</span> can be typed into the Webkit Developer Tools Console, like so:

<img src="/_img/docs/ugui.args_console.gif" title="An animation demonstrating typing in ugui.args into the console." alt="Typing ugui.args in the console." />



## General Information

___
##### ugui.args
This is commonly referred to as the ***UGUI Args Object***. It contains an inventory of information about all form elements that bear a `data-argName`. It is central to much of UGUI's functionality such as processing what arguments are sent to command line or saving and loading settings.

**Universal Properties**

All items have the following properties stored with them:

```css
htmltag: { input | select | textarea }
htmltype: { checkbox | color | dropdown | file | folder | radio | range | select }
value: { The value of the element. }
```

**Checkboxes and Radio Dials**

```css
htmlticked: { true | false }
```

**Color Picker**

```javascript
decRrGgBb: "{0-15} {0-15} {0-15} {0-15} {0-15} {0-15}"
                                   //Compute each hex value as a decimal (0-15)
decblue: {0-255}                   //Convert Hex blue to a decimal
decgreen: {0-255}                  //Convert Hex green to a decimal
decred: {0-255}                    //Convert Hex red to a decimal
hexRrGgBb: "{000000-ffffff}"       //The hex value with the "#" removed
percentBlue: {0-100}               //Percentage of blue in the color
percentGreen: {0-100}              //Percentage of green in the color
percentRed: {0-100}                //Percentage of red in the color
rgb: "rgb({0-255},{0-255},{0-255})"//Standard CSS acceptable rgb format
value: "#{000000-ffffff}"          //Standard CSS acceptable hex format
```

**File Browser or EZDZ drag and drop box**

```
value: "C:\folder\fileName.png"    //What the user selected
fullpath: "C:\folder\fileName.png" //How JavaScript understands that
path: "C:\folder\"                 //Full path to the folder containing the file
name: "fileName"                   //Name of file without path or extension
ext: "png"                         //The file extension without a .
nameExt: "fileName.png"            //
type: "image/png"                  //File mime-type
size: 112                          //size in bytes
lastModified: 1423895123000        //Unix date/time stamp
lastModifiedDate: Sat Feb 14 2015 01:25:23 GMT-0500 (Eastern Standard Time)
                                   //Human readable time stamp with it's own special properites
                                   //like .getYear() and .getMinutes()
webkitRelativePath: ""             //Used when an input tag has an attribute of webkitdirectory
```

**Folder Browser**

```
value: "C:\pictures\cats"          //The HTML value for the input element
fullpath: "C:\pictures\cats"       //Full file path to the selected folder, including it
path: "C:\pictures\"               //Path to the selected folder
folderName: "cats"                 //Name of the selected folder
contents: Object                   //Listing of items in the folder with "size" and "isFolder" values for each
contentsList: Array                //An array with the names of all files and folders in the root of the folder
lastModified: 1422110168000        //Unix date/time stamp
lastModifiedDate: Sat Jan 24 2015 09:36:08 GMT-0500 (Eastern Standard Time)
                                   //Human readable time stamp with it's own special properites
                                   //like .getYear() and .getMinutes()
webkitRelativePath: ""             //Used when an input tag has an attribute of webkitdirectory
```

**Range Slider**

```javascript
value: "{value}" or "{min},{max}"  //This is based on the settings for your range slider
                                   //Some allow one handle for the user to input a numerical value
                                   //Some allow two handles for the user to select an min and max value
```

___
##### ugui.executable
Returns an array of all executables used by this app. It is populated by, and in the same order as, the `<cmd>` blocks at the top of your `index.html` file.

___
##### ugui.platform
Returns what OS you are currently on, such as `darwin`, `freebsd`, `linux`, `sunos`, or `win32`. Note that these results are not related to your OS Architecture being 32 or 64-Bit. A 64-Bit copy of Windows will still have it's platform set as `win32`. To get the archetecture use `process.arch`.

<img class="img-border" src="/_img/docs/ugui.platform.png" title="Running ugui.platform in the NW.js developer tools console." alt="A screenshot of running ugui.platform in the console" />

___
##### ugui.textFields
Returns a jQuery object of all `<textarea>` and `<input type="text">` that occur on the page and bear a `data-argName`. This is primarily used by [ugui.helpers.removeTypedQuotes()](#ugui-helpers-removetypedquotes-)</a>.

<img class="img-border" src="/_img/docs/ugui.textfields.png" title="Running ugui.textFields in the NW.js developer tools console." alt="A screenshot of running ugui.textFields in the console" />

___
##### ugui.version
Returns what version of UGUI is in use.

<img src="/_img/docs/ugui.app.version.png" title="App and UGUI versions on display" alt="A screenshot of the About section of UGUI displaying both the App and UGUI versions." />




***
## App Information

___
##### ugui.app
This returns an object of useful information specific to the app you make using UGUI.

<img class="img-border" src="/_img/docs/ugui.app.png" title="Running ugui.app in the NW.js developer tools console." alt="A screenshot of running ugui.app in the console" />

___
##### ugui.app.author
Returns the value from the `author` field in your package.json file. This is the creator(s) of your app.

<img class="img-border" src="/_img/docs/ugui.app.author.png" title="Running ugui.app.author in the NW.js developer tools console." alt="A screenshot of running ugui.app.author in the console" />

___
##### ugui.app.description
Returns the value from the `description` field in your package.json file. This is a short description or tagline for you app.

<img class="img-border" src="/_img/docs/ugui.app.description.png" title="Running ugui.app.description in the NW.js developer tools console." alt="A screenshot of running ugui.app.description in the console" />

___
##### ugui.app.name
Returns the value from the `name` field in your package.json file. This is a URL safe name for your app.

<img class="img-border" src="/_img/docs/ugui.app.name.png" title="Running ugui.app.name in the NW.js developer tools console." alt="A screenshot of running ugui.app.name in the console" />

___
##### ugui.app.packageJSON
Returns the contents of your package.json file. Such as `keywords`, `node-main`, your app settings, and more.

<img class="img-border" src="/_img/docs/ugui.app.packagejson.png" title="Running ugui.app.packageJSON in the NW.js developer tools console." alt="A screenshot of running ugui.app.packageJSON in the console" />

___
##### ugui.app.pathToProject
Returns the file path to the folder that contains your project.

<img class="img-border" src="/_img/docs/ugui.app.pathtoproject.png" title="Running ugui.app.pathToProject in the NW.js developer tools console." alt="A screenshot of running ugui.app.pathToProject in the console" />

___
##### ugui.app.startPage
Returns the value from the `main` field in your package.json file. This is the first page your app loads when launched.

<img class="img-border" src="/_img/docs/ugui.app.startpage.png" title="Running ugui.app.startPage in the NW.js developer tools console." alt="A screenshot of running ugui.app.startPage in the console" />

___
##### ugui.app.title
Returns the value from the `window.title` field in your package.json file. This is the plain text/human readable title for your app. It does not need to be URL safe.

<img class="img-border" src="/_img/docs/ugui.app.title.png" title="Running ugui.app.title in the NW.js developer tools console." alt="A screenshot of running ugui.app.title in the console" />

___
##### ugui.app.version
Returns the value from the `version` field in your package.json file. This is the version number for you app. Do not confuse `ugui.app.version` with `ugui.version` which is the version of UGUI your app is using, not the version of your app.

<img src="/_img/docs/ugui.app.version.png" title="A screenshot of the About section of UGUI displaying both the App and UGUI versions." alt="App and UGUI versions on display" />





***
## Helper Functions

___
##### ugui.helpers.buildCommandArray(executable)

This begins the process of obtaining information from UI elements, interpretting `<arg>`'s and returns an array of the passed in executable and processed `<arg>`'s that have had their `((keywords))` replaced by data from the [ugui.args](#ugui-args) object. This array can then be processed using [ugui.helpers.convertCommandArraytoString()](#ugui-helpers-convertcommandarraytostring-cmdarray-) then passed into [ugui.helpers.runcmd()](#ugui-helpers-runcmd-executableandargs-callback-).

This function is automatically triggered when clicking a submit button with a class of `sendCmdArgs`. When in [dev mode](#developer-vs-production-mode) the UGUI Developer Toolbar's "CMD Output" section is updated using this function.

If you don't pass in a specific executable as a string, it will default to the first executable mentioned in your `<cmd>` blocks.

* [View the source code of this function](/docs/ugui.js-1.3.0.html#c02-building-the-command-array)

___
##### ugui.helpers.buildUGUIArgObject()

This grabs all the data about the elements on the page that have a `data-argName` and puts that information in the `ugui` object, accessible here: `ugui.args`.

For information regarding the data that is stored view the [ugui.args](#ugui-args) section of the API documentation.

* [View the source code of this function](/docs/ugui.js-1.3.0.html#c03-build-ugui-arg-object)

___
##### ugui.helpers.centerNavLogo()

Makes sure that the logo and app name in the nav bar are vertically centered. UGUI runs this anytime the BootSwatch theme is changed.

* [View the source code of this function](/docs/ugui.js-1.3.0.html#d04-navigation-bar-functionality)

___
##### ugui.helpers.convertCommandArraytoString(cmdArray)

Takes an array of strings starting with an executable name followed by commands. Thn removes empty strings and returns a string ready to be sent out to the command line with [ugui.helpers.runcmd()](#ugui-helpers-runcmd-executableandargs-callback-).

```javascript
var cmdArray = ["myexe","-Q 25-75","","","--input 'C:\file.txt'","","--ouput 'C:\file.new.txt'"];
ugui.helpers.convertCommandArraytoString(cmdArray);
```

The above example would return the following string `myexe -Q 25-75 --import 'C:\file.txt' --ouput 'C:\file.new.txt'`.

* [View the source code of this function](/docs/ugui.js-1.3.0.html#c07-convert-command-array-to-string)

___
##### ugui.helpers.createAFolder(file, callback)

This will create a new folder in the location you pass in. You cannot create a new folder with a folder in it. So if `C:/Taco` doesn't exist then the following wouldn't work:

```javascript
ugui.helpers.createAFolder("C:/Taco/Cheese");
```

You'd need to create the "Taco" folder first, then the "Cheese" folder, like so:

```javascript
ugui.helpers.createAFolder("C:/Taco", function(){
    ugui.helpers.createAFolder("C:/Taco/Cheese");
});
```

In this example we are using a callback to create a subfolder. This ensures that the "Taco" folder will exist before we attempt to create the "Cheese" folder.

* [View the source code of this function](/docs/ugui.js-1.3.0.html#b06-create-a-folder)

___
##### ugui.helpers.deleteAFile(file, callback)

Quick and easy way of deleting files.

```javascript
ugui.helpers.deleteAFile("C:/folder/delete_me.htm");

ugui.helpers.deleteAFile("C:/folder/delete_me.htm", function(){
    console.log("File delete finished.");
});
```

* [View the source code of this function](/docs/ugui.js-1.3.0.html#b07-delete-a-file)

___
##### ugui.helpers.deleteAFolder(file, callback)

Quick and easy way to delete folders. **This will not delete a folder unless it is empty.**

```javascript
ugui.helpers.deleteAFolder("C:/path/to/folder");

ugui.helpers.deleteAFolder("C:/path/to/folder", function(){
    console.log("Folder delete finished.");
});
```

* [View the source code of this function](/docs/ugui.js-1.3.0.html#b08-delete-a-folder)

___
##### ugui.helpers.findKeyValue(obj, arr)

This is a general purpose function that allows retrieving information from an object. Here is an example object and how `findKeyValue()` works to return data from it:

```javascript
var a = {
    "b": "dog",
    "c": {
        "d": "cat",
        "e": "bat"
    }
};
var ab  = ["b"];
var acd = ["c","d"];
console.log( findKeyValue(a,ab) );  //dog
console.log( findKeyValue(a,acd) ); //cat
```

* [View the source code of this function](/docs/ugui.js-1.3.0.html#c04-find-key-value)

___
##### ugui.helpers.getFileSize(filePath, callback)

Quick and easy way to get the file size for a file. This will return an object containing the size stored as bytes, kilobytes, and megabytes. You can also pass in a callback that takes the file size object as an argument and an `err` argument for errors.

```javascript
ugui.helpers.getFileSize("C:/folder/pizza.jpg");           // { "bytes": 1048576, "kilobytes": 1024, "megabytes": 1 }
ugui.helpers.getFileSize("C:/folder/pizza.jpg").bytes;     // 1048576
ugui.helpers.getFileSize("C:/folder/pizza.jpg").kilobytes; // 1024
ugui.helpers.getFileSize("C:/folder/pizza.jpg").megabytes; // 1

ugui.helpers.getFileSize("C:/folder/pizza.jpg", function(fileSize, err) {
    if (err) {
        $("body").prepend('<div id="alert">Error Accessing File</div>');
    } else {
        $("#output").html("Input file is " + fileSize.kilobytes + "KB");
    }
});
```

* [View the source code of this function](/docs/ugui.js-1.3.0.html#b09-get-a-file-s-size)

___
##### ugui.helpers.loadSettings(optionalFile, callback)

This loads your settings from the default save location or a location that you've passed in. It reads the file, which is a JSON version of the `ugui.args` object, and updates the UI elements on the page with the correct values, then updates the current `ugui.args` to reflect the UI changes.

To have an HTML element skipped during the load process, give it a class of `do-not-save`.

Check the default location for `uguisettings.json` and load it

```javascript
ugui.helpers.loadSettings();
```

Check your custom location for settings and attempt to load them

```javascript
ugui.helpers.loadSettings("../appsettings.json");
```

Check the default location for `uguisettings.json` and load it, and then run a callback function

```javascript
ugui.helpers.loadSettings(function(){
    console.log("Settings have finished loading");
});
```

Check your custom location for settings and attempt to load them, then run a callback function

```javascript
ugui.helpers.loadSettings("~/my-app-settings.json", function(){
    console.log("Settings have finished loading");
});
```

* [View the source code of this function](/docs/ugui.js-1.3.0.html#h02-load-settings)

___
##### ugui.helpers.openDefaultBrowser()

Detects all links on the page with a class of `external-link` and sets them to open the link in the user’s default browser instead of using NW.js as a browser which can cause issues.

This should be treated like an initialize function. If you have dynamically added new links to the page with a class of `external-link` you'll need to re-run this function.

* [View the source code of this function](/docs/ugui.js-1.3.0.html#d05-launch-links-in-default-browser)

___
##### ugui.helpers.parseArgument(argumentText)

This takes the argument from an `<arg>`, finds all the `((keywords))` and replaces them with the information on the UGUI Args Object found here: `window.ugui.args`

```javascript
ugui.helpers.parseArgument("--import ((fileToProcess))");
//Returns something like: "--import C:\file.txt"
```

* [View the source code of this function](/docs/ugui.js-1.3.0.html#c05-parse-argument)

___
##### ugui.helpers.patternMatchingDefinitionEngine()

This loops through all `<def>`'s and processes the value of them to create the correct key value pairs on the UGUI Args Object. [Custom Definitions](#custom-definitions) are an advanced feature of UGUI, read more about them in the [Concepts](#concepts) section.

* [View the source code of this function](/docs/ugui.js-1.3.0.html#c06-process-all-cmd-definitions)

___
##### ugui.helpers.readAFile(file)

This returns the contents of a file, allowing you to store them in a variable. This is reads the file directly from the local drive it's stored on, and not does not perform a network request.

```javascript
var devToolsHTML = ugui.helpers.readAFile("../_markup/ugui-devtools.htm");
```

* [View the source code of this function](/docs/ugui.js-1.3.0.html#b03-read-a-file)

___
##### ugui.helpers.readAFolder(file, callback)

Supply a path to a folder as a string and UGUI will return an array of all files/folders and an object with each file and folder as a sub-object. Each sub-object returned will have a boolean `isFolder` property and a numeral `size` to represent (in bytes) the file size. Some system files and all folders will report `0` for size.

```javascript
var mediaContents = ugui.helpers.readAFolder("C:\pictures\cats", function(contents, contentsList) {
    console.log("Number of items in folder: " + contentsList.length);
});
```

* [View the source code of this function](/docs/ugui.js-1.3.0.html#b04-read-contents-of-a-folder)

___
##### ugui.helpers.removeTypedQuotes()

In all input text fields and textareas, remove both single and double quotes as they are typed, on page load, and when the form is submitted.

* [View the source code of this function](/docs/ugui.js-1.3.0.html#c10-prevent-user-from-entering-quotes-in-forms)

___
##### ugui.helpers.runcmd(executableAndArgs, callback)

You can pass in the location of an executable, or just the name if it is in the user's environment path. Arguments for the executable should be in the same string. You can use this to run an executable and text it would output to the command line.

```javascript
//Running an executable when a button is clicked
$('button').click( function() {
    ugui.helpers.runcmd('C:\pngquant.exe --force "C:\file.png"');
});

//Putting text on the page that was returned from an executable
ugui.helpers.runcmd('node --version', function(data) {
    $('div').html('<pre>Node Version: ' + data + '</pre>');
});
```

* [View the source code of this function](/docs/ugui.js-1.3.0.html#b01-run-cmd)

___
##### ugui.helpers.runcmdAdvanced(parameters)

This is a more advanced option for running executables. You can pass in a parameters object to get additional functionality such as running a function when an executable closes, finishes, errors, or returns data.

```javascript
var parameters = {
    "executableAndArgs": "node --version",
    "returnedData": function(data) {
        console.log("The text from the executable: " + data);
    },
    "onExit": function(code) {
        console.log("Executable finished with the exit code: " + code);
    },
    "onError": function(err) {
        console.log("Executable finished with the error: " + err);
    },
    "onClose": function(code) {
        console.log("Executable has closed with the exit code: " + code);
    }
};
ugui.helpers.runcmdAdvanced(parameters);
```

* [View the source code of this function](/docs/ugui.js-1.3.0.html#b02-run-cmd-advanced-)

___
##### ugui.helpers.saveSettings(optionalFile, callback)
This saves the settings of your app into a local user account specific folder on the computer that is different for each Operating System. You can run the following to see what the default location is on your OS:

```javascript
ugui.helpers.saveSettings(["Show Default"]);
```

Or you can pass in a custom path for the location of your settings file.

```javascript
ugui.helpers.saveSettings("C:/folder/settings.json");
ugui.helpers.saveSettings("~/folder/settings.json");
```

**What gets saved:**

The "[UGUI Args Object](#ugui-args)" is what gets saved. Add a `data-argName` attribute to an element in your HTML to ensure it gets saved automatically. Add a class of `do-not-save` for items you don’t want to be updated during [ugui.helpers.loadSettings(optionalFile)](#ugui-helpers-loadsettings-optionalfile-callback-).

* [View the source code of this function](/docs/ugui.js-1.3.0.html#h01-save-settings)

___
##### ugui.helpers.sliderHandleColor()

Run this if you want the slider handles to match the background color/gradient of the navigation bar.

Since bootstrap-slider is a plugin and not officially a part of Bootstrap, Bootswatches don’t contain styles for them. So we dynamically set the styles to match the background color of the navigation bar.

However you can pass in any color or gradient you want by using [ugui.helpers.sliderHandleGradient()](#ugui-helpers-sliderhandlegradient-gradient-) or [ugui.helpers.sliderHandleSolid(color)](#ugui-helpers-sliderhandlesolid-color-).

* [View the source code of this function](/docs/ugui.js-1.3.0.html#g02-range-slider)

___
##### ugui.helpers.sliderHandleGradient(gradient)

The `gradient` typically comes from the background-image of the navigation bar, however you can pass in any css gradient you want.

```javascript
ugui.helpers.sliderHandleGradient("linear-gradient(#ED8C2B, #911146 40%, #2B2728)");
```

The above code would produce:

<img class="img-border" src="/_img/docs/slider-grad.png" title="Range Slider with gradient handles." alt="Example of a Range Slider with a gradient on its handle" />

* [View the source code of this function](/docs/ugui.js-1.3.0.html#g02-range-slider)

___
##### ugui.helpers.sliderHandleSolid(color)

The `color` typically comes from the background color of the navigation bar, however you can pass in any color you want.

```javascript
ugui.helpers.sliderHandleSolid("#ED8C2B");
```

The above code would produce:

<img class="img-border" src="/_img/docs/slider-solid.png" title="Range Slider with solid color handles." alt="Example of a Range Slider with a solid color handle" />

* [View the source code of this function](/docs/ugui.js-1.3.0.html#g02-range-slider)

___
##### ugui.helpers.updateUGUIDevCommandLine()

While in [developer mode](#developer-vs-production-mode), this updates the contents the UGUI Developer Toolbar’s "CMD Output" section (seen below) whenever the user interacts with any form elements or when manually ran in your code.

<img src="/_img/docs/cmd-output.png" title="CMD Output section of the UGUI Developer Toolbar" alt="Screenshot of the CMD Output section of the UGUI Developer Toolbar." />

* [View the source code of this function](/docs/ugui.js-1.3.0.html#f03-real-time-updating-dev-tool-command-output)

___
##### ugui.helpers.writeToFile(file, data, callback)

This will override the contents of a file you pass in with the data you supply. If the file you point to doesn’t exist, it will be created with your supplied data.

```javascript
ugui.helpers.writeToFile("C:/folder/file.htm", "Text.");
ugui.helpers.writeToFile("~/folder/file.txt", "Text.");
```

With a callback and variables:

```javascript
var yourFile = "../random-number.txt";
var randomNumber = Math.random();

functionToRunUponCompletion() {
    console.log("Finished writing to file.");
}

ugui.helpers.writeToFile(yourFile, randomNumber, functionToRunUponCompletion);
```

* [View the source code of this function](/docs/ugui.js-1.3.0.html#b05-write-to-file)




***

## Concepts

***

##### Developer vs Production Mode
This is controlled by changing the class of `<body>` from between `dev` and `prod`.

**Developer Mode** displays the UGUI Developer Toolbar at the bottom of your app. It supplies you helpful information and enables common shortcut keys such as refreshing the page and opening Developer Tools. Any time a form element with a `data-argName` is interacted with, an inventory of all items on the page with `data-argName`'s is performed and the "CMD Output" section of the UGUI Developer Toolbar is updated.

While in **Production Mode** we don't activate any keyboard shortcuts (you can add in your own in `_scripts/app.js`, use [this](/docs/ugui.js-1.3.0.html#f07-custom-keyboard-shortcuts) as a reference). We turn off developer warnings and skip loading the UGUI Developer Toolbar. We only take inventory of contents of the page when the user clicks the submit button for a form.

___
##### Check for Updates

This is an advanced feature of UGUI useful to those maintaining their projects on GitHub and posting releases on their Repo’s release page. This will check for the version number of the latest release and compare it to the version number in the package.json, then offer a link to the release page if there is a newer release.

<img class="img-border" src="/_img/docs/check-for-updates.gif" title="Check For Updates feature in use." alt="Screenshots of the Check For Updates feature" />

**To use:**

1. Uncomment this block of code from `index.html`
```html
<p id="updateResults"></p>
<p class="text-center">
    <button id="updateChecker" class="btn btn-primary">Check for updates</button>
</p>
```
2. You must supply a "Repository URL" in your `package.json` file and it must match the following pattern `git://github.com/USERNAME/REPO.git`.
3. You must also [publish releases on GitHub](https://help.github.com/articles/creating-releases/) to that same repo listed above.
4. Make sure all of your release versions follow this pattern `v0.0.0` (*where any of the 0's can be any positive whole number*). If you do something like "v0.0" or "v0.0.0a" or "v0alpha" or "v0.0.0-rc" or "v0.0.0.0" or "0.0.0", etc; This feature will likely not work, as it compares version numbers to see which is newer based on an expected pattern.

Feel free to modify [this part of ugui.js](/docs/ugui.js-1.3.0.html#d06-check-for-updates) to meet the needs of your app.

___
##### Custom Definitions

> **Note:** Custom Definitions are the most powerful feature of UGUI, and thus require a lot of explanation. If you intend on using them, you should read this section thoroughly.

Custom Definitions allow you to pull user defined data from predictable patterns and set them as custom keys on the [UGUI Args Object](#ugui-args). (It isn't as complicated as it sounds though).

___

**Custom Definitions - Example 1**

If you have an input that will return a consistent pattern of `I like X`, where `X` could be anything the user would enter, you could create a definition like so:

```html
<def name="like">I like ((thing))</def>
```

The definition `name` will match against a form element with a `data-argName="like"`. It will get the value of that element, and compare it against the definition to produce the following on the [UGUI Args Object](#ugui-args):

```javascript
ugui.args.like = {
    value: "I like cows", //The value of the form element
    htmltag: "input",
    htmltype: "text",
    thing: "cows" //This was set by the <def>
};
```

You could then call `ugui.args.like.thing` to get `cows` (or whatever the user types), or use that key in a command line argument, like this:

```html
<cmd executable="myexe">
  <def name="like">I like ((thing))</def>
  <arg>-m "((like.thing))"</arg>
</cmd>
```

The command that would be sent out would be `myexe -m "cows"`.

___

**Custom Definitions - Example 2**

This is a real world example.

When range sliders have two handles, they always return a value that contains the values of both handle's (comma seperated). So it would look something like this:

```html
<form id="myexe">
  <input class="slider" type="text" id="quality" data-argname="quality"
    data-slider-id="qualitySlider" data-slider-min="0" data-slider-max="100"
    data-slider-step="25" data-slider-value="[0,100]" data-value="25,100"
    value="25,100" />
</form>
```

Notice that its `value` is **`25,100`** and its `data-argName` is **`quality`**. In the `<cmd>` block, we can use a `<def>` to take advantage of the predictable nature of this comma seperated value.

```html
<cmd executable="myexe">
  <def name="quality">((min)),((max))</def>
  <arg>-Q ((quality.min))-((quality.max))</arg>
</cmd>
<!--
  What would be sent to the command line:
  myexe -Q 25-100
-->
```

In the console we can also view the contents of `quality` on the [UGUI Args Object](#ugui-args).

```javascript
console.log( ugui.args.quality ); //would print out the following:
Object: {
    value: "25,100", //Set by the user
    htmltag: "input",
    htmltype: "range",
    min: "25", //Set by the <def>
    max: "100" //Set by the <def>
}
```

___

**Custom Definitions - Additional Information**

* All `<def>`'s are processed before any `<arg>`'s; so they can be placed anywhere in the `<cmd>` block. They could be before or after an `<arg>` that uses them.
* You can have as many keywords in your definition as you want:
```html
<def name="example">The ((first), ((second)), then the ((third)), finally ((fourth)) is last.</def>
```
* You can **not** have two values next to each other without a separator:
```html
<def name="BADexample">Some text ((first))((second)).</def>
```
  If the value was `Some text 1234`. We would have no idea how to seperate the values, like `1`,`234` or `12`,`34` or `123`,`4`.
* Values do not need text at the begining or end.
```html
<def name="another">((nothingBeforeOrAfter))</def>
```
