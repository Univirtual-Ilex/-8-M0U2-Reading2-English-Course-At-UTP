import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    text-align:center;
    button{
        font-weight:bold;
        font-family: ${Ilex.font};
        font-size: 1.2em;
        background-color: ${ Ilex.grisOscuro };
        color: #fff;
        padding: 0.5em 1.4em;
        min-width:6em;
        border-radius:0.3em;
        margin:0.2em;
        cursor: pointer;
        &:hover{ 
            background-color: ${Ilex.violeta};
        }
        &.c-true{
            background-color: ${ Ilex.verde };
            &:hover{
                background-color: ${Ilex.barRelleno};
            }
        }
        &.c-false{
            background-color: ${ Ilex.color_rojo};
            &:hover{
                background-color: ${Ilex.rosa};
            }
        }
    }

`

// Button TF lined es una versión reducida y inlineblock
export const buttonLined = css`
    display: inline-block;
    button {
        font-size: 0.88em;
        font-weight: medium;
        text-transform: uppercase;
    }
`

export default styles
    