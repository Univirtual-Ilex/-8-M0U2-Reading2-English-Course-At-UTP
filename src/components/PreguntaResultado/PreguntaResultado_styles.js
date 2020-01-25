import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
display: inline-block;
border: 0.2em solid ${Ilex.dragItem};
padding: 0.4em  0;
font-weight:800;
border-radius: 0.5em;
text-align:center;
color:${Ilex.violeta2};
box-shadow: 0.1em 0.3em 0 0em ${Ilex.dragItem};
width:2.6em;
margin: 0.4em;
&>div{
    position: relative;
    &::after{
        content:'';
        width:0.9em;
        height:0.9em;
        background-color: #000;
        display:block;
        position: absolute;
        top:-0.7em;
        right:-0.5em;
        border-radius:50%;
 
    }
    &.ok::after{
        background-color: ${Ilex.verde};
    }
    &.err::after{
        background-color: ${Ilex.color_rojo};
    }
}

`

export default styles
    