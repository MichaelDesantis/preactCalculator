import { h, Component } from 'preact';
import style from './style';

export default class DisplayBar extends Component {
    render() {
        return (
            <div class={style.displayBar}>
                <h4>{this.props.displayMessage}</h4>
            </div>
        );
    }
}
