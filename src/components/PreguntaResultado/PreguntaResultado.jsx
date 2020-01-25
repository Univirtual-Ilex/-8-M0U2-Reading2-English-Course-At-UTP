
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './PreguntaResultado_styles'

// Componente base
const PreguntaResultado_base = ({ err, ok, ...props}) => {
    return (
        <div {...props}>
            <div className={ ok ? 'ok' : err ? 'err' : ''}>
                {props.children}
            </div>

        </div>
    )
}
const PreguntaResultado = styled(PreguntaResultado_base)`${ styles }`
export default PreguntaResultado
