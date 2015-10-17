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
##### ugui.helpers.loadSettings()
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
##### ugui.helpers.readAFolder()
* [View the source code of this function]()

___
##### ugui.helpers.removeTypedQuotes()
* [View the source code of this function]()

___
##### ugui.helpers.runcmd()
* [View the source code of this function]()

___
##### ugui.helpers.runcmdAdvanced()
* [View the source code of this function]()

___
##### ugui.helpers.saveSettings()
* [View the source code of this function]()

___
##### ugui.helpers.sliderHandleColor()
Since bootstrap-slider is a plugin and not officially a part of Bootstrap, Bootswatches don’t contain styles for them. So we dynamically set the styles to match the background color of the navigation bar. However you can pass in any color or gradient you want by using <a href="#ugui.helpers.sliderHandleGradient()">ugui.helpers.sliderHandleGradient()</a> or .
* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#g02-range-slider)

___
##### ugui.helpers.sliderHandleGradient()

    ugui.helpers.sliderHandleGradient("
-webkit-radial-gradient(center top, farthest-side, #ED8C2B, #911146 40%, #2B2728 95%, #2B2728), #2B2728
linear-gradient(rgb(84, 180, 235), rgb(47, 164, 231) 60%, rgb(29, 156, 229))

");

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
##### ugui.helpers.writeToFile(file, data)
This will override the contents of a file you pass in with the data you supply. If the file you point to doesn’t exist, it will be created with your supplied data.

    ugui.helpers.writeToFile("C:/folder/file.htm", "Text.");
    ugui.helpers.writeToFile("~/folder/file.txt", "Text.");

* [View the source code of this function](http://ugui.io/docs/ugui.js-1.1.2.html#b05-write-to-file)

___
##### ugui.platform
Returns what OS you are currently on, such as `darwin`, `freebsd`, `linux`, `sunos`, or `win32`. Note that these results are not related to your OS Architecture being 32 or 64-Bit. A 64-Bit copy of Windows will still have it's platform set as `win32`. To get the archetecture use type `process.arch` in the Webkit Developer Tools console.

___
##### ugui.textFields
Returns a jQuery object of all `<textarea>` and `<input type="text">` that occur on the page and bear a `data-argName`. This is primarily used by <a href="#ugui.helpers.removetypedquotes()">ugui.helpers.removeTypedQuotes()</a>.

___
##### ugui.version
Returns what version of UGUI is in use.