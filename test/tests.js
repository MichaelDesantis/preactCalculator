const chai = require('chai');
const expect = chai.expect;

//Sanity check
describe('My unit testing setup',function(){
    it('should work',function(){
        expect(true).to.be.ok;
    });
});

describe('My Main Component methods',()=>{

    beforeEach(()=>{
        //set baseline initialState for each application.
        //We'll have to manipulate the state for each unit soon. 
    });

    xit('Prevents a user from selecting an operand before a first value is entered',()=>{

    });

    xit('Allows a user to define a starting value',()=>{

    });

    xit('Allows a user to have a multi-digit starting value',()=>{

    });

    xit('Allows a user to select an operand',()=>{

    });

    xit('Allows a user to select a second number',()=>{

    });

    xit('Allows a user to have a multi-digit second value',()=>{

    });

    xit('Prevents a user from clicking "equals" and evaulating an expression before starting value, operand, and second value are defined',()=>{

    });

    xit('Evaluates an expression when the equals symbol is clicked',()=>{

    });

    xit('Evaluates an expression when valid, and sets that as the starting (or final) value for future calculations',()=>{});

    xit('Sets the operand and second value back to undefined after an evaluation',()=>{

    });

    xit('Allows a second operand to be selected without effecting the previous value prematurely',()=>{

    });

});