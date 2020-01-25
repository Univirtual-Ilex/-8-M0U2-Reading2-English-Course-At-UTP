
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './PreguntaTF_styles'


// components
import ButtonTF from '../ButtonTF'

// Componente base
const PreguntaTF_base = ({...props}) => {
    return (
        <div {...props}>
            <div className='contador'> Question 1/10</div>
            <div className='pregunta'> { props.children } </div>
            <ButtonTF t />
            <ButtonTF f />
            <ButtonTF />

        </div>
    )
}
const PreguntaTF = styled(PreguntaTF_base)`${ styles }`
export default PreguntaTF
