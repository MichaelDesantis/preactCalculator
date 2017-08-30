export const evaluateExpression=(firstNum,operand,secondNum)=>{

        if(firstNum===undefined||firstNum===""||firstNum===null){
            throw new Error("First number must be defined");
        };

        if(operand===undefined||operand===""||operand===null){
            throw new Error("Operand must be defined");
        };

        if(secondNum===undefined||secondNum===""||secondNum===null){
            throw new Error("Second number must be defined")
        };

       let fn = firstNum.toString();
       let op = operand.toString();
       let sn = secondNum.toString();
       let execString = `${fn} ${op} ${sn}`;
       return eval(execString);
    };

export const handleOperandClick = (state,operand)=>{
        console.log("clicked on operand!");
        if(state.operand===""||state.operand===undefined){
            return operand;
            console.log("operand returned");
        }else if(state.operand!==""&&state.operand!==undefined){
            console.log("operand already defined");
        }
    };

export const handleNumberClick=(state,number)=>{
        console.log(state);
        console.log("clicked on number!");
    };

export const handleEqualClick=(state)=>{
        console.log("clicked on equals");
    };


