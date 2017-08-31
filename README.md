### Notes (mostly for myself for now, I'll turn this into documentation later):
    
* Preact CLI's test setup fails out of the box on both their lack of a test command and a badly configured ESlint setup (or code written by them that violates their own validation rules). 

* Switched out preact setup for my own. (I'll eject and config later.) EDIT: Their eject setup is a mess. And I'd like to demo the unit tests. Keeping this as Dev CLI build.

* Assumes mocha global install AND preact-cli install as is.

* Avoid adding additional dependencies. You should be able to do this with vanilla CSS/JS and preact's methods. (We're only requiring CHAI for testing.)

* It is apparently impossible to pass CSS styles as props to other nested components. Especially when each child component requires a unique position attribute to work with CSS native grid. Eval string type prop to JS for CSS class styling fails. Even when using examples straight out of Preact documentation.

* I may have to try creating multiple classes within the same JS file to bypass the above issue. EDIT : Yeah, no go on this. CSS-Grid needs to accept strings as grid-area arguments. My program can't discern between a CSS var reference and a js reference. 

* I should also learn to use Regex, would have been massively useful during the validations. (Although there is no direct user input, so there is less to validate.)

* Attempting separating logic into separate file for easy of logic testing. (This could come back to bite me when it comes to updating state) EDIT: Opting for direct component methods rather than import. Importing methods that require state awareness from a separate file without a context of state unnecessarily complicates things without a method-decoupling setup like MOBX or Redux. (which is overkill, as we only have 4 methods to this application). I'll just run unit tests on the component directly and attempt to use enzyme (shallow to render out the methods.

* eval() WILL NOT ACCEPT A NON-STRING OPERAND. It'll handle integers just fine, but unquote an operand and so help you god your application is doomed! I'm handling all calculation-critical data as a string to ensure that this does not happen.

* On the topic of testing, the library itself has open issues related to testing = https://github.com/developit/preact/issues/658  Their workaround is to use a little known library called https://github.com/developit/preact-jsx-chai/

* The testing config is a pain. Babel configs hiddel by preact-cil built. Cannot access to config. Getting "unexpected token 'import' even when I place the test file in the same dir as the component itself." Tests will have to wait. Done over again, I'd have to implement another alternative to allow for separated function testing.

* On the topic of testing, here's a ton of issues related to it

    * https://github.com/developit/preact-compat/issues/233

    * https://github.com/developit/preact/issues/146

    * https://gist.github.com/robertknight/88e9d10cff9269c55d453e5fb8364f47 (sadly, the lack of intuitive webpack configuration and setup still leads to failure with this method)

    * https://github.com/developit/preact/issues/658 (OPEN ISSUE, difficult preact test setup is a known problem with no current solution.)

    * https://github.com/developit/preact/issues/560 (touches on how Preact is opinionated and requires karma as another dependency.)

    * https://gist.github.com/developit/9b0bb57b3e001de67814c7f4de9cbfbf (This was what I attempted first. No luck with that one either.)

    * https://preactjs.com/guide/unit-testing-with-enzyme (Their documentation is literally one section. And offers no alternative to their exact karma setup. )

### Specs:

* USE CSS GRID! (This is a perfect use case for CSS grid. And I could use the practice)

* USE FLEXBOX! (Again, for practice. And because it makes life easier.)

* FOLLOW DESIGN RULES (layout first, mobile first, grayscale before color.)

* HANDLE LOGIC IN MAIN APPLICATION STATE (No need for MOBX in this simplified example, have all buttons function as functional/pure components. Receive all functions as props from master component.)

* NO PREACT ROUTER (This is a simple application, multiple routes are unnecessary for now.)

* FRONT END ONLY. (No need for server logic in this example. Save the node event loop, event emitter, and microservice architecture experiments for another time.)

* FULL TEST COVERAGE. (NO untested logic.) EDIT: Their test setup has MAJOR issues!

* Curently scores higher on lightbox evaluation on ALL 4 categories of PWA, Performance, Accessibility, AND Best practices when compared to coder.com's current website.

### TO-DO : 

* Write tests to 100% coverage. (This will have to wait, the state of testing in preact is a mess.)

* Make ESlint pass. (I indent using 4 spaces. ESlint preact default plugin is set to tabs which is causing errors to be thrown. Regardless, the setup is in place to plug-and-play any eslint config setup.)

* Documentation.

### Completed : 

* Test structure setup.

* Favicon

* Design scheme from coder.com

* Build out components for calculator.

* Layout setup

* Pseudocode and architect the logic for this app. (via pending tests)

* Design components (CSS).

* Establish click event binding for components.

* Add clear button.

* Modify manifest.json.

* Remove unnecessary dependencies/components set in place by CLI.

### Known problems : 

* Hitting '.' repeatedly causes an error.



