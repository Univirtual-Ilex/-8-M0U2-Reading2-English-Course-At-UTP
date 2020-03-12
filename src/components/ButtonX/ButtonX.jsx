import React from 'react'
import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'
import {Link} from 'react-router-dom'

const styles = css`
    border:none;
    font-family:${Ilex.font};
    font-weight:bold;
    text-transform:uppercase;
    font-size:1.5em;
    display:block;
    margin:0.25em 0;
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

const ButtonX_base = ({link ,...props}) => {
    return (

        <button {...props}>
            
                {props.children}

        </button>

    )
}

export const ButtonLink = styled(Link)`
    ${styles}
    display:inline-block;
    text-decoration:none;
`

const ButtonX = styled(ButtonX_base)`
    ${styles}
`

export default ButtonX