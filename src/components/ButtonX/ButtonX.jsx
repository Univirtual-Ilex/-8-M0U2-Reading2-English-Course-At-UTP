import React from 'react'
import styled from 'styled-components'
import Ilex from '../../App/variables'

const ButtonX_base = (props) => {
    return (
        <button {...props}>
            {props.children}
        </button>
    )
}

const ButtonX = styled(ButtonX_base)`
    border:none;
    font-family:${Ilex.font};
    font-weight:bold;
    text-transform:uppercase;
    font-size:1.5em;
    display:block;
    margin:1.5em 0;
    padding: 0.4em 1.1em;
    border-radius: 1em 1em 1em 1em;
    background: ${Ilex.degradado('90deg', Ilex.rosa, Ilex.azul, Ilex.violeta)};
    color:#fff;
    outline:none;
    cursor: pointer;
    box-shadow:0 0.2em 0 0 rgba(0,0,0,0.1);
    /* Hovers*/
    &:hover{
        background: #000
    }
`

export default ButtonX