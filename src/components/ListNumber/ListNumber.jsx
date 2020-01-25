
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ListNumber_styles'
import Ilex from '../../App/variables'

// Componente base
const ListNumber_base = ({...props}) => {
    return (
        <div {...props}>
            Creado el componente ListNumber
        </div>
    )
}
const ListNumber = styled(ListNumber_base)`${ styles }`

export const Olist = styled.ol`
    color:${Ilex.textos};
    text-align:center;
    list-style:none;
    counter-reset:contador;

`

export const Item = styled.li`
    font-weight:normal;
    counter-increment:contador;
    padding:0;
    margin:0.2em 0;
    &::before{
        content:counter(contador)')';
        font-weight:bold;
        margin-right:0.75em;
    }
`

export default ListNumber
