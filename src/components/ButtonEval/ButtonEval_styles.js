import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
display: inline-block;
button{
    text-transform:uppercase;
    background-color:${props => props.color ? props.color : 'black' };
    padding: 0.5em 1em ;
    font-size:0.9em;
    font-weight:bold;
    cursor: pointer;
    color:${ props=> props.txtcolor || 'white'};
    border-radius:0.5em;
    margin: 0 ${props => props.mx || 0}em 0 ${props => props.mx || 0}em;
    &:hover{
        background-color: ${Ilex.color_amarilloOscuro};
    }
}
`

export default styles
    