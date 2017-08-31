import { h, Component } from 'preact';
import style from './style';
import DisplayBar from '../displayBar';
import IconButtonGrid from '../iconButtonGrid';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentExpressionString:"",
            firstNum:"",
            operand:"",
            secondNum:"",
            isActive:true
        };
        this.handlers = {
            evaluateExpression:(firstNum,operand,secondNum)=>{
                if(firstNum===undefined||firstNum===""){
                    throw new Error("First number must be defined");
                 };
                if(operand===undefined||operand===""){
                    throw new Error("Operand must be defined");
                };
                if(secondNum===undefined||secondNum===""){
                    throw new Error("Second number must be defined")
                };
               let fn = firstNum.toString();
               let op = operand.toString();
               let sn = secondNum.toString();
               let execString = `${fn} ${op} ${sn}`;
               return eval(execString);
            },
            handleOperandClick:(operand)=>{
                if(this.state.isActive===true){
                    if(this.state.firstNum!==""&&this.state.firstNum!==undefined){
                        if(this.state.operand===""||this.state.operand===undefined){
                            let newOperand = operand;
                            let newExpressionString = this.state.currentExpressionString + operand;
                            this.setState({
                                operand:newOperand,
                                currentExpressionString:newExpressionString
                            });
                        }else if(this.state.operand!==""&&this.state.operand!==undefined){
                            if(this.state.secondNum!==""&&this.state.secondNum!==undefined){
                                let result = this.handlers.evaluateExpression(this.state.firstNum,this.state.operand,this.state.secondNum);
                                let resultString = result.toString();
                                this.setState({
                                    currentExpressionString:`${resultString}${operand}`,
                                    firstNum:resultString,
                                    operand:operand,
                                    secondNum:""
                                });
                            }
                        }
                    }
                }
            },
            handleNumberClick:(number)=>{
                if(this.state.isActive===true){
                    if(this.state.operand===""||this.state.operand===undefined){
                        if(this.state.firstNum===""&&number==="."){
                            number="0.";
                        }
                        let newFirstNum = this.state.firstNum + number;
                        let newExpressionString = this.state.currentExpressionString + number;
                        this.setState({
                            firstNum:newFirstNum,
                            currentExpressionString:newExpressionString
                        });            
                    }else{
                        if(this.state.secondNum===""&&number==="."){
                            number="0.";
                        }
                        let newSecondNum = this.state.secondNum + number;
                        let newExpressionString = this.state.currentExpressionString + number;
                        this.setState({
                            secondNum:newSecondNum,
                            currentExpressionString:newExpressionString
                        });
                    }
                }
            },
            handleEqualClick:()=>{
                if(this.state.firstNum!==""&&this.state.operand!==""&&this.state.secondNum!==""){
                    let result = this.handlers.evaluateExpression(this.state.firstNum,this.state.operand,this.state.secondNum);
                    let resultString = result.toString();
                    this.setState({
                        currentExpressionString:`${resultString}`,
                        firstNum:"",
                        operand:"",
                        secondNum:"",
                        isActive:false
                    });
                }
            },
            resetGame:()=>{
                this.setState({
                    currentExpressionString:"",
                    firstNum:"",
                    operand:"",
                    secondNum:"",
                    isActive:true
                });
            }
        };
    }

    render() {
        return (
            <div class={style.calculatorMainDiv}>
                <DisplayBar displayMessage={this.state.currentExpressionString}/>
                <IconButtonGrid util={this.handlers} isActive={this.state.isActive}/>
            </div>
        );
    }
}
