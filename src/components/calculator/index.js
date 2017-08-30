import { h, Component } from 'preact';
import style from './style';
import DisplayBar from '../displayBar';
import IconButtonGrid from '../iconButtonGrid';
import {evaluateExpression, handleOperandClick, handleNumberClick, handleEqualClick} from '../../util/util';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentExpressionString:"4",
            firstNum:"",
            operand:"",
            secondNum:""
        };
        this.handlers = {
            evaluateExpression:evaluateExpression.bind(this),
            handleOperandClick:handleOperandClick.bind(this),
            handleNumberClick:handleNumberClick.bind(this),
            handleEqualClick:handleEqualClick.bind(this)
        };
    }


    render() {
        return (
            <div class={style.calculatorMainDiv}>
                <DisplayBar displayMessage={this.state.currentExpressionString}/>
                <IconButtonGrid util={this.handlers}/>
            </div>
        );
    }
}
