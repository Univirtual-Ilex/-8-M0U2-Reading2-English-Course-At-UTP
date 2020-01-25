import { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`

    display: inline-block;
    button{
        background: ${Ilex.degradado('90deg', Ilex.rosa, Ilex.azul, Ilex.violeta)};
        border-radius:0.5em;
        padding:0.4em 1.5em;
        font-family: ${ Ilex.font};
        display:block;
        font-size: 1em;
        font-weight: bold;
        text-transform: uppercase;
        color:#fff;
        margin:0.1em;
        cursor: pointer;
        &:hover{
            background: ${Ilex.verde};
        }
    }
    button.inactivo{
        background: ${Ilex.color_grisMedio};
        &:hover{
            background: ${Ilex.azul};
        }
    }
`

export default styles
    