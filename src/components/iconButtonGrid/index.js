import { h, Component } from 'preact';
import style from './style';

export default class IconButtonGrid extends Component {
    render() {
        return (
            <div class={style.iconButtonGrid}>
                <span class={style.aa}>aa</span>
                <span class={style.ab}>ab</span>
                <span class={style.ac}>ac</span>
                <span class={style.ad}>ad</span>
                <span class={style.ba}>ba</span>
                <span class={style.bb}>bb</span>
                <span class={style.bc}>bc</span>
                <span class={style.bd}>bd</span>
                <span class={style.ca}>ca</span>
                <span class={style.cb}>cb</span>
                <span class={style.cc}>cc</span>
                <span class={style.cd}>cd</span>
                <span class={style.da}>da</span>
                <span class={style.db}>db</span>
                <span class={style.dc}>dc</span>
                <span class={style.dd}>dd</span>
            </div>
        );
    }
}
