### Notes (mostly for myself for now, I'll turn this into documentation later):
    
* Preact CLI's test setup fails out of the box on both their lack of a test command and a badly configured ESlint setup (or code written by them that violates their own validation rules). 

* Switched out preact setup for my own. (I'll eject and config later.) EDIT: Their eject setup is a mess. And I'd like to demo the unit tests. Keeping this as Dev CLI build.

* Assumes mocha global install AND preact-cli install as is.

* Avoid adding additional dependencies. You should be able to do this with vanilla CSS/JS and preact's methods. (We're only requiring CHAI for testing.)

* It is apparently impossible to pass CSS styles as props to other nested components. Especially when each child component requires a unique position attribute to work with CSS native grid. Eval string type prop to JS for CSS class styling fails. Even when using examples straight out of Preact documentation.

* I may have to try creating multiple classes within the same JS file to bypass the above issue. EDIT : Yeah, no go on this. CSS-Grid needs to accept strings as grid-area arguments. My program can't discern between a CSS var reference and a js reference. 

* I should also learn to use Regex, would have been massively useful during the validations. (Although there is no direct user input, so there is less to validate.)

* Attempting separating logic into separate file for easy of logic testing. (This could come back to bite me when it comes to updating state) EDIT: Opting for direct component methods rather than import. Importing methods that require state awareness from a separate file without a context of state unnecessarily complicates things without a method-decoupling setup like MOBX or Redux. (which is overkill, as we only have 4 methods to this application). I'll just run unit tests on the component directly and attempt to use enzyme (shallow to render out the methods.

### Specs:

* USE CSS GRID! (This is a perfect use case for CSS grid. And I could use the practice)

* USE FLEXBOX + CSS4 spec color rules (Again, for practice)

* FOLLOW DESIGN RULES (layout first, mobile first, grayscale before color.)

* HANDLE LOGIC IN MAIN APPLICATION STATE (No need for MOBX in this simplified example, have all buttons function as functional/pure components. Receive all functions as props from master component.)

* NO PREACT ROUTER (This is a simple application, multiple routes are unnecessary for now.)

* FRONT END ONLY. (No need for server logic in this example. Save the node event loop, event emitter, and microservice architecture experiments for another time.)

* FULL TEST COVERAGE. (NO untested logic, tests first.)

### TO-DO : 

* Write tests to 100% coverage.

* Remove unnecessary dependencies set in place by CLI.

* Make ESlint pass.

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






