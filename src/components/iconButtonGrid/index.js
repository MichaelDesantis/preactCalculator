import { h } from 'preact';
import style from './style';

const IconButtonGrid=(props)=> {
        return (
            <div class={style.iconButtonGrid}>
                <span class={style.aa, style.numberVal} data-value="1" data-type="integer" onclick={props.util.handleNumberClick}>1</span>
                <span class={style.ab, style.numberVal} data-value="2" data-type="integer" onclick={props.util.handleNumberClick}>2</span>
                <span class={style.ac, style.numberVal} data-value="3" data-type="integer" onclick={props.util.handleNumberClick}>3</span>
                <span class={style.ad, style.operandVal} data-value="/" data-type="
                operand" onclick={props.util.handleOperandClick}>/</span>
                <span class={style.ba, style.numberVal} data-value="4" data-type="integer" onclick={props.util.handleNumberClick}>4</span>
                <span class={style.bb, style.numberVal} data-value="5" data-type="integer" onclick={props.util.handleNumberClick}>5</span>
                <span class={style.bc, style.numberVal} data-value="6" data-type="integer" onclick={props.util.handleNumberClick}>6</span>
                <span class={style.bd, style.operandVal} data-value="*" data-type="
                operand" onclick={props.util.handleOperandClick}>*</span>
                <span class={style.ca, style.numberVal} data-value="7" data-type="integer" onclick={props.util.handleNumberClick}>7</span>
                <span class={style.cb, style.numberVal} data-value="8" data-type="integer" onclick={props.util.handleNumberClick}>8</span>
                <span class={style.cc, style.numberVal} data-value="9" data-type="integer" onclick={props.util.handleNumberClick}>9</span>
                <span class={style.cd, style.operandVal} data-value="-" data-type="
                operand" onclick={props.util.handleOperandClick}>-</span>
                <span class={style.da, style.numberVal} data-value="0" data-type="integer" onclick={props.util.handleNumberClick}>0</span>
                <span class={style.db, style.numberVal} data-value="." data-type="integer" onclick={props.util.handleNumberClick}>.</span>
                <span class={style.dc, style.equalsBtn} data-value="=" data-type="equalsBtn" onclick={props.util.handleEqualClick}>=</span>
                <span class={style.dd, style.operandVal} data-value="+" data-type="
                operand" onclick={props.util.handleOperandClick}>+</span>
            </div>
        );   
}

export default IconButtonGrid;