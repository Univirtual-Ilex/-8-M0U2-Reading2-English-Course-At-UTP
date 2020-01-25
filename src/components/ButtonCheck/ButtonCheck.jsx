
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonCheck_styles'

// Componente base
const ButtonCheck_base = ({...props}) => {
    return (
        <div {...props}>
            <button className='btn-clean'>
                { props.children ? props.children : 'Check'}
            </button>
        </div>
    )
}
const ButtonCheck = styled(ButtonCheck_base)`${ styles }`
export default ButtonCheck
