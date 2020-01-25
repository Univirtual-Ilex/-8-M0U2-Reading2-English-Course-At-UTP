
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad2A_styles'
import Container from '../Container'
import Video from '../Video'

// Components
import PreguntaTF from '../PreguntaTF'


// Componente base
// 530 517 video player

const Actividad2A_base = ({...props}) => {
    return (
        <Container  { ...props } bgImage='./src/bg_actividad1.png'>
            <div className='row'>
                <div className='bloque-izquierdo'>
                    <Video w={530} h={318} videoSrc='./media/m0u1l1/actividad2.mp4' controls/>
                </div>
                <div className='bloque-derecho'>
                    <PreguntaTF>  Antonio Introduces Marcela to Johnny. </PreguntaTF>
                </div>
            </div>
            <div className='row'>
                <div className='bloque-controles'>
                </div>
            </div>



        </Container>

    )
}
const Actividad2A = styled(Actividad2A_base)`${ styles }`
export default Actividad2A
