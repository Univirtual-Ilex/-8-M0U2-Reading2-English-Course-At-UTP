import { css } from 'styled-components'
import Ilex from '../../App/variables'
import {padding, margin} from '../Grid/Grid_styles'

const styles = css`
border: 0.2em solid ${Ilex.dragItem};
color: ${Ilex.color_gris};
border-radius: 1.2em;
text-align: ${props => props.align || 'center'};
padding: ${(props)=>(padding(props))};
box-shadow: 0 1em 0 0 ${Ilex.dragItem};
font-weight: lighter;
`

export const bubbleInfo = css`
display: inline-block;
color: ${Ilex.violeta2};
border-radius: 0.5em;
box-shadow: 0 0.5em 0 0 ${Ilex.dragItem};
font-size: 0.9em;
padding: ${(props)=>(padding(props))};
min-width: 7em;
margin: ${(props)=>(margin(props))};

`

export default styles
    