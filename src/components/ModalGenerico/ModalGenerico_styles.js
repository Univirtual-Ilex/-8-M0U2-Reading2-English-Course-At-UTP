import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
position:absolute;
width:100%;
height:100%;
top:0%;
bottom:0;
right:0;
bottom:0;
background-color:${props => props.bg || 'rgba(255,255,255,0.6)'};
display:${props => props.visible ? 'block' : 'none'};
.modal-container{
    background-color:#fff;
    border-radius:1em;
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.1);
}
.modal-body{
    color: ${Ilex.textos};
    text-align: justify;
}
`

export default styles
    