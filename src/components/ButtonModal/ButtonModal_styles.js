import { css } from 'styled-components'
import Ilex from '../../App/variables'

const properties = css`
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
`
const styles = css`

    display: inline-block;
    button{
        ${properties}
    }
    button.inactivo{
        background: ${Ilex.color_grisMedio};
        cursor: initial;
        opacity:0.5;
    }
`

export const stylesa = css`
${properties}
display: inline-block;
padding:0.6em 1.7em;
text-decoration: none;
&.inactivo{
    background: ${Ilex.color_grisMedio};
    &:hover{
        background: ${Ilex.azul};
    }
}
`

export default styles
    