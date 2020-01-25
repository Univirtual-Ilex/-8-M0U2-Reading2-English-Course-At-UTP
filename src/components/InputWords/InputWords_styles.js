import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`
display: inline-block;
margin: ${props => props.m || 0}em;
width:${props => props.w ? props.w+'em' : 'auto'};

`

export const Input = styled.input`
border:2px dashed ${Ilex.color_gris_input};
padding: 0.1em 0.6em;
box-sizing:border-box;
display: block;
border-radius: 0.5em;
box-shadow:0 0.3em 0 0 ${Ilex.color_gris_input};
font-family:${Ilex.font};
font-size:1em;
color:${Ilex.textos};
font-weight:bold;
width:100%;


`

export default styles
    