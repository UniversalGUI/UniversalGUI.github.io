# UGUI API Documentation

The "**ugui Object**" contains many useful items for developers. This section will outline everything it contains.

Titles on this page <span class="blue">in blue</span> can be typed into the Webkit Developer Tools Console, like so:

![An animation demonstrating typing in ugui.args into the console.](/_img/docs/ugui.args_console.gif "Typing ugui.args in the console.")


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
fullpath: "C:\folder\fileName.png" //How JavaScript understand that
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

___
##### ugui.textFields
Returns a jQuery object of all `<textarea>` and `<input type="text">` that occur on the page and bear a `data-argName`. This is primarily used by [ugui.helpers.removeTypedQuotes()](#ugui-helpers-removetypedquotes-)</a>.

___
##### ugui.version
Returns what version of UGUI is in use.

![A screenshot of the About section of UGUI displaying both the App and UGUI versions.](/_img/docs/ugui.app.version.png "App and UGUI versions on display")




***
## App Information

___
##### ugui.app
This returns an object of useful information specific to the app you make using UGUI.

___
##### ugui.app.author
Returns the value from the `author` field in your package.json file. This is the creator(s) of your app.

___
##### ugui.app.description
Returns the value from the `description` field in your package.json file. This is a short description or tagline for you app.

___
##### ugui.app.name
Returns the value from the `name` field in your package.json file. This is a URL safe name for your app.

___
##### ugui.app.packageJSON
Returns the contents of your package.json file. Such as `keywords`, `node-main`, your app settings, and more.

___
##### ugui.app.pathToProject
Returns the file path to the folder that contains your project.

___
##### ugui.app.startPage
Returns the value from the `main` field in your package.json file. This is the first page your app loads when launched.

___
##### ugui.app.title
Returns the value from the `window.title` field in your package.json file. This is the plain text/human readable title for your app. It does not need to be URL safe.

___
##### ugui.app.version
Returns the value from the `version` field in your package.json file. This is the version number for you app. Do not confuse `ugui.app.version` with `ugui.version` which is the version of UGUI your app is using, not the version of your app.

![A screenshot of the About section of UGUI displaying both the App and UGUI versions.](/_img/docs/ugui.app.version.png "App and UGUI versions on display")





***
## Helper Functions

___
##### ugui.helpers.buildCommandArray(executable)
* [View the source code of this function]()

___
##### ugui.helpers.buildUGUIArgObject()
* [View the source code of this function]()

___
##### ugui.helpers.centerNavLogo()
* [View the source code of this function]()

___
##### ugui.helpers.convertCommandArraytoString(cmdArray)
* [View the source code of this function]()

___
##### ugui.helpers.createAFolder(file, callback)
* [View the source code of this function]()

___
##### ugui.helpers.deleteAFile(file, callback)
* [View the source code of this function]()

___
##### ugui.helpers.deleteAFolder(file, callback)
* [View the source code of this function]()

___
##### ugui.helpers.fillExecutableDropdowns()
* [View the source code of this function]()

___
##### ugui.helpers.findKeyValue(obj, arr)
* [View the source code of this function]()

___
##### ugui.helpers.loadSettings(optionalFile, callback)
* [View the source code of this function]()

___
##### ugui.helpers.openDefaultBrowser()
* [View the source code of this function]()

___
##### ugui.helpers.parseArgument(argumentText)
* [View the source code of this function]()

___
##### ugui.helpers.patternMatchingDefinitionEngine()
* [View the source code of this function]()

___
##### ugui.helpers.readAFile(file)
* [View the source code of this function]()

___
##### ugui.helpers.readAFolder(file, callback)

Supply a path to a folder as a string and UGUI will return an array of all files/folders and an object with each file and folder as a sub-object. Each sub-object returned will have a boolean `isFolder` property and a numeral `size` to represent (in bytes) the file size. Some system files and all folders will report `0` for size.

```javascript
var mediaContents = ugui.helpers.readAFolder("C:\pictures\cats", function(contents, contentsList) {
    console.log("Number of items in folder: " + contentsList.length);
});
```

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.3.html#b04-read-contents-of-a-folder)

___
##### ugui.helpers.removeTypedQuotes()

In all input text fields and textareas, remove both single and double quotes as they are typed, on page load, and when the form is submitted.

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.3.html#c10-prevent-user-from-entering-quotes-in-forms)

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

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.3.html#b01-run-cmd)

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

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.3.html#b02-run-cmd-advanced-)

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

Add a `data-argName` attribute to an element in your HTML to ensure it gets saved automatically. Add a class of `do-not-save` for items you don’t want to be updated during [ugui.helpers.loadSettings(optionalFile)](#ugui-helpers-loadsettings-optionalfile-callback-).

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.3.html#h01-save-settings)

___
##### ugui.helpers.sliderHandleColor()

Run this if you want the slider handles to match the background color/gradient of the navigation bar.

Since bootstrap-slider is a plugin and not officially a part of Bootstrap, Bootswatches don’t contain styles for them. So we dynamically set the styles to match the background color of the navigation bar.

However you can pass in any color or gradient you want by using [ugui.helpers.sliderHandleGradient()](#ugui-helpers-sliderhandlegradient-gradient-) or [ugui.helpers.sliderHandleSolid(color)](#ugui-helpers-sliderhandlesolid-color-).

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.3.html#g02-range-slider)

___
##### ugui.helpers.sliderHandleGradient(gradient)

The `gradient` typically comes from the background-image of the navigation bar, however you can pass in any css gradient you want.

```javascript
ugui.helpers.sliderHandleGradient("linear-gradient(#ED8C2B, #911146 40%, #2B2728)");
```

The above code would produce:

![Example of a Range Slider with a gradient on its handle](/_img/docs/slider-grad.png "Range Slider with gradient handles.")

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.3.html#g02-range-slider)

___
##### ugui.helpers.sliderHandleSolid(color)

The `color` typically comes from the background color of the navigation bar, however you can pass in any color you want.

```javascript
ugui.helpers.sliderHandleSolid("#ED8C2B");
```

The above code would produce:

![Example of a Range Slider with a solid color handle](/_img/docs/slider-solid.png "Range Slider with solid color handles.")

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.3.html#g02-range-slider)

___
##### ugui.helpers.updateCommandLineOutputPreviewHint()

While in [developer mode](#developer-vs-production-mode), in the UGUI Developer Toolbar section "CMD Output", we display a hint that states "Click the Run! button to see output.". The "Run!" part is loaded dynamically depending on what the `sendCmdArgs` button says.

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.3.html#f01-detect-if-in-developer-environment)

___
##### ugui.helpers.updateUGUIDevCommandLine()

While in [developer mode](#developer-vs-production-mode), this updates the contents the UGUI Developer Toolbar’s "CMD Output" section whenever the user interacts with any form elements.

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.3.html#f03-real-time-updating-dev-tool-command-output)

___
##### ugui.helpers.warnIfDuplicateArgNames()

While in [developer mode](#developer-vs-production-mode) if there are multiple elements on the page with the same `data-argName` we display a warning.

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.3.html#e01-warn-if-identical-data-argnames)

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

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.3.html#b05-write-to-file)




***

## Concepts

***

##### Developer vs Production Mode
This is controlled by changing the class of `<body>` from between `dev` and `prod`.

**Developer Mode** displays the UGUI Developer Toolbar at the bottom of your app. It supplies you helpful information and enables common shortcut keys such as refreshing the page and opening Developer Tools. Any time a form element with a `data-argName` is interacted with, an inventory of all items on the page with `data-argName`'s is performed and the "CMD Output" section of the UGUI Developer Toolbar is updated.

While in **Production Mode** we don't activate any keyboard shortcuts (you can add in your own in `_scripts/app.js`, use [this](http://ugui.io/docs/ugui.js-1.1.3.html#f07-custom-keyboard-shortcuts) as a reference). We turn off developer warnings and skip loading the UGUI Developer Toolbar. We only take inventory of contents of the page when the user clicks the submit button for a form.
