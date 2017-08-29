import { h, Component } from 'preact';
import style from './style';

export default class DisplayBar extends Component {
    render() {
        return (
            <div class={style.displayBar}>
                {this.props.displayMessage}
            </div>
        );
    }
}
