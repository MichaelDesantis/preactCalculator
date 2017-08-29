import { h, Component } from 'preact';
import style from './style';
import DisplayBar from '../displayBar';
import IconButtonGrid from '../iconButtonGrid'
;
export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentExpressionValue:5
        };
    }

    render() {
        return (
            <div class={style.calculatorMainDiv}>
                <DisplayBar displayMessage={this.state.currentExpressionValue}/>
                <IconButtonGrid/>
            </div>
        );
    }
}
