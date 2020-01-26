import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    font-size:0.7em;
.opcion-individual{
    margin:.4em 0;

}
label{
    display: block;
    position: relative;

    input {
        opacity:0;
        position: absolute;
    }
    .mark::before{
        content: '';
        width:1em;
        height:1em;
        border-radius:100%;
        display: block;
        border: 0.2em solid ${Ilex.color_rosa_radios};
        position: absolute;
        top:0;
    }
    input:checked ~ .mark::after{
        content:'';
        width:1em;
        height:1em;
        border-radius:100%;
        display: block;
        border: 0.2em solid #fff;
        background-color: ${Ilex.color_rosa_radios};
        position: absolute;
        top:0;
        left:0;
        transform: scale(0.8)
    }
    .value{
        margin-left: 2em;
    }
}


`

export default styles
    