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

##### ugui.helpers.buildCommandArray()
* [View the source code of this function]()

___
##### ugui.helpers.buildUGUIArgObject()
* [View the source code of this function]()

___
##### ugui.helpers.centerNavLogo()
* [View the source code of this function]()

___
##### ugui.helpers.convertCommandArraytoString()
* [View the source code of this function]()

___
##### ugui.helpers.createAFolder()
* [View the source code of this function]()

___
##### ugui.helpers.deleteAFile()
* [View the source code of this function]()

___
##### ugui.helpers.deleteAFolder()
* [View the source code of this function]()

___
##### ugui.helpers.fillExecutableDropdowns()
* [View the source code of this function]()

___
##### ugui.helpers.findKeyValue()
* [View the source code of this function]()

___
##### ugui.helpers.loadSettings(optionalFile)
* [View the source code of this function]()

___
##### ugui.helpers.openDefaultBrowser()
* [View the source code of this function]()

___
##### ugui.helpers.parseArgument()
* [View the source code of this function]()

___
##### ugui.helpers.patternMatchingDefinitionEngine()
* [View the source code of this function]()

___
##### ugui.helpers.readAFile()
* [View the source code of this function]()

___
##### ugui.helpers.readAFolder(file, callback)
* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#b04-read-contents-of-a-folder)

___
##### ugui.helpers.removeTypedQuotes()
* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#c10-prevent-user-from-entering-quotes-in-forms)

___
##### ugui.helpers.runcmd()
* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#b01-run-cmd)

___
##### ugui.helpers.runcmdAdvanced(parameters)
* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#b02-run-cmd-advanced-)

___
##### ugui.helpers.saveSettings(optionalFile)
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
##### ugui.platform
Returns what OS you are currently on, such as `darwin`, `freebsd`, `linux`, `sunos`, or `win32`. Note that these results are not related to your OS Architecture being 32 or 64-Bit. A 64-Bit copy of Windows will still have it's platform set as `win32`. To get the archetecture use type `process.arch` in the Webkit Developer Tools console.

___
##### ugui.textFields
Returns a jQuery object of all `<textarea>` and `<input type="text">` that occur on the page and bear a `data-argName`. This is primarily used by <a href="#ugui.helpers.removetypedquotes()">ugui.helpers.removeTypedQuotes()</a>.

___
##### ugui.version
Returns what version of UGUI is in use.