import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    background-color: #fff;
    border: 2px solid ${Ilex.dragItem};
    color: ${Ilex.violeta2};
    display: inline-block;
    padding: 0.6em 0.6em;
    border-radius: 0.8em;
    box-shadow: 0 0.25em 0 0.1em ${Ilex.dragItem};
    cursor: move;
    font-size:0.75em;
    margin:0.5em 0.5em;
`


export const draggableBlock = css`
    width:${ props => props.w || 100}%;
    font-size:0.7em;
    background-color: ${Ilex.dragItem};
    padding:0.25em 0.5em;
    margin:0.25em 0;
    cursor:move;


`

export const draggableItemb = css`
    display: block;
    box-shadow:none;
    border:none;
    background-color: ${Ilex.violeta2};
    color: #fff;
    text-transform:uppercase;
    font-size:1.1em;
    font-weight:bold;
    padding-right: 1em;
    width: ${props => props.w ? props.w  + 'em' : 'auto' } ;
 
`

export const draggableClean = css`
    ${styles}
    display: block;
    color: ${Ilex.textos};
    text-align: center;
    font-size: 0.7em;
`

export default styles
