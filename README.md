### Notes (mostly for myself for now, I'll turn this into documentation later):
    
* Preact CLI's test setup fails out of the box on both their lack of a test command and a badly configured ESlint setup (or code written by them that violates their own rules). 

* Switched out preact setup for my own. (I'll eject and config later.)

* Assumes mocha global install as is.

* Avoid adding additional dependencies. You should be able to do this with vanilla CSS/JS and preact's methods. (We're only requiring CHAI for testing.)

* It is apparently impossible to pass CSS styles as props to other nested components. Especially when each child component requires a unique position attribute to work with CSS native grid. Eval string type prop to JS for CSS class styling fails. Even when using examples straight out of Preact documentation.

* I may have to try creating multiple classes within the same JS file to bypass the above issue.

* I should also learn to use Regex, would have been massively useful during the validations.

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

* Attempting separating logic into separate file for easy of logic testing. (This could come back to bite me when it comes to updating state)




