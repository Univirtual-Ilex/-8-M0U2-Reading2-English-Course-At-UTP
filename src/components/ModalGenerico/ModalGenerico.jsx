
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ModalGenerico_styles'
import ReactDom from 'react-dom'
import { IRow, ICol } from '../Grid'

/**
 * visible true o false : Controla la visibilidad del modal
 * w : ancho del contenedor
 * h: alto del contenedor por defecto tiene alto mínimo
 * bg: color del fondo, usar el valor rgba para definir la transparencia
 * 
 */

// Componente base
const ModalGenerico_base = ({visible, bg, w, ...props}) => {

    return ReactDom.createPortal(
        <div {...props}>
            <IRow w={ w } h={100} justify='center' align='center' valign='center'>
                <ICol className='modal-container' p={3}>
                    <div className='modal-body'>
                        { props.children }
                    </div>
                </ICol>
            </IRow>
        </div>
    , document.getElementById('app-modal'))
}
const ModalGenerico = styled(ModalGenerico_base)`${ styles }`
export default ModalGenerico
