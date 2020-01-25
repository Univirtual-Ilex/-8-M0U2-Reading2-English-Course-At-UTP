
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './BocinaButton_styles'

// Componente base
const BocinaButton_base = ({type, className, audio ,...props}) => {

    return (

            <button className={ (type ? 'type2 ' : '') + 'btn-clean ' + className}> 
                <i className='ilx-bocina'></i>
            </button>

    )
}
const BocinaButton = styled(BocinaButton_base)`${ styles }`
export default BocinaButton
