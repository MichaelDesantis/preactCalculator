import { h } from 'preact';
import style from './style';

const DisplayBar=(props)=>{
    return (
        <div class={style.displayBar}>
            {props.displayMessage}
        </div>
    );
}
export default DisplayBar;
