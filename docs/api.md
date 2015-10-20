[TOC]

# UGUI API Documentation

***
##Concepts

##### Developer vs Production Mode
This is controlled by changing the class of `<body>` from between `dev` and `prod`.

**Developer Mode** displays the UGUI Developer Toolbar at the bottom of your app. It supplies you helpful information and enables common shortcut keys such as refreshing the page and opening Developer Tools. Any time a form element with a `data-argName` is interacted with, an inventory of all items on the page with `data-argName`'s is performed and the "CMD Output" section of the UGUI Developer Toolbar is updated.

While in **Production Mode** we don't activate any keyboard shortcuts (you can add in your own in `_scripts/app.js`, use [this](http://ugui.io/docs/ugui.js-1.1.2.html#f07-custom-keyboard-shortcuts) as a reference). We turn of developer warnings and skip loading the UGUI Developer Toolbar. We only take inventory of contents of the page when the user clicks the submit button for a form.

***
## API

The "**ugui Object**" contains many useful items for developers. This section will outline everything it contains.

***
### Helper Functions

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
* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#b04-read-contents-of-a-folder)

___
##### ugui.helpers.removeTypedQuotes()
* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#c10-prevent-user-from-entering-quotes-in-forms)

___
##### ugui.helpers.runcmd(executableAndArgs, callback)
* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#b01-run-cmd)

___
##### ugui.helpers.runcmdAdvanced(parameters)
* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#b02-run-cmd-advanced-)

___
##### ugui.helpers.saveSettings(optionalFile, callback)
This saves the settings of your app into a local user account specific folder on the computer that is different for each Operating System. You can run the following to see what the default location is on your OS:

    ugui.helpers.saveSettings(["Show Default"]);

Or you can pass in a custom path for the location of your settings file.

    ugui.helpers.saveSettings("C:/folder/settings.json");
    ugui.helpers.saveSettings("~/folder/settings.json");

**What gets saved:**

Add a `data-argName` attribute to an element in your HTML to ensure it gets saved automatically. Add a class of `do-not-save` for items you don’t want to be updated during <a href="#ugui.helpers.loadsettings(optionalfile)">ugui.helpers.loadSettings(optionalFile)</a>.

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#h01-save-settings)

___
##### ugui.helpers.sliderHandleColor()
Since bootstrap-slider is a plugin and not officially a part of Bootstrap, Bootswatches don’t contain styles for them. So we dynamically set the styles to match the background color of the navigation bar. However you can pass in any color or gradient you want by using <a href="#ugui.helpers.sliderhandlegradient(gradient)">ugui.helpers.sliderHandleGradient()</a> or <a href="#ugui.helpers.sliderhandlesolid(color)">ugui.helpers.sliderHandleSolid(color)</a>.

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#g02-range-slider)

___
##### ugui.helpers.sliderHandleGradient(gradient)
The `gradient` typically comes from the background-image of the navigation bar, however you can pass in any css gradient you want.

    ugui.helpers.sliderHandleGradient("linear-gradient(#ED8C2B, #911146 40%, #2B2728)");

* * [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#g02-range-slider)

___
##### ugui.helpers.sliderHandleSolid(color)
The `color` typically comes from the background color of the navigation bar, however you can pass in any color you want.

    ugui.helpers.sliderHandleSolid("#ED8C2B");

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#g02-range-slider)

___
##### ugui.helpers.updateCommandLineOutputPreviewHint()
While in [developer mode](#developer-vs-production-mode), in the UGUI Developer Toolbar section "CMD Output", we display a hint that states "Click the Run! button to see output.". The "Run!" part is loaded dynamically depending on what the `sendCmdArgs` button says.
* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#f01-detect-if-in-developer-environment)

___
##### ugui.helpers.updateUGUIDevCommandLine()
While in [developer mode](#developer-vs-production-mode), this updates the contents the UGUI Developer Toolbar’s "CMD Output" section whenever the user interacts with any form elements.
* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#f03-real-time-updating-dev-tool-command-output)

___
##### ugui.helpers.warnIfDuplicateArgNames()
While in [developer mode](#developer-vs-production-mode) if there are multiple elements on the page with the same `data-argName` we display a warning.
* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#e01-warn-if-identical-data-argnames)

___
##### ugui.helpers.writeToFile(file, data, callback)
This will override the contents of a file you pass in with the data you supply. If the file you point to doesn’t exist, it will be created with your supplied data.

    ugui.helpers.writeToFile("C:/folder/file.htm", "Text.");
    ugui.helpers.writeToFile("~/folder/file.txt", "Text.");

With a callback and variables:

    var yourFile = "../random-number.txt";
    var randomNumber = Math.random();
    functionToRunUponCompletion() {
    	console.log("Finished writing to file.");
    }
    ugui.helpers.writeToFile(yourFile, randomNumber, functionToRunUponCompletion);

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#b05-write-to-file)

***
## Information

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

___
##### ugui.args
This is commonly referred to as the ***UGUI Args Object***. It contains an inventory of information about all form elements on that bear a `data-argName`. It is central to much of UGUI's functionality such as processing what arguments are sent to command line or saving and loading settings.

###### Universal Properties

All items have the following properties stored with them:

    htmltag: {input|select|textarea}
    htmltype: {checkbox|color|dropdown|file|folder|radio|range|select}
    value: {The value of the element.}

###### Checkboxes and Radio dials:

    htmlticked: {true|false}

###### Color picker:

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

###### File Browser or EZDZ drag and drop box

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

###### Folder Browser

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

###### Range Slider

    value: "{value}" or "{min},{max}"  //This is based on the settings for your range slider
                                       //Some allow one handle for the user to input a numerical value
                                       //Some allow two handles for the user to select an min and max value



___
##### ugui.executable
Returns an array of all executables used by this app. It is populated by, and in the same order as, the `<cmd>` blocks at the top of your `index.html` file.

___
##### ugui.platform
Returns what OS you are currently on, such as `darwin`, `freebsd`, `linux`, `sunos`, or `win32`. Note that these results are not related to your OS Architecture being 32 or 64-Bit. A 64-Bit copy of Windows will still have it's platform set as `win32`. To get the archetecture use type `process.arch` in the Webkit Developer Tools console.

___
##### ugui.textFields
Returns a jQuery object of all `<textarea>` and `<input type="text">` that occur on the page and bear a `data-argName`. This is primarily used by <a href="#ugui.helpers.removetypedquotes()">ugui.helpers.removeTypedQuotes()</a>.

___
##### ugui.version
Returns what version of UGUI is in use.
