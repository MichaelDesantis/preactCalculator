import { h, Component } from 'preact';
import style from './style';

export default class Calculator extends Component {
    render() {
        return (
            <div class={style.calculatorMainDiv}>
                <h1>Home</h1>
                <p>This is the Home component.</p>
            </div>
        );
    }
}
