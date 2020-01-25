//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
import Ilex from '../../App/variables'
// styles from styled
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Data
import data from './Actividad2_data'
// Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import { IRow, ICol } from '../Grid'
import ButtonUi from '../ButtonControlUI'
import ButtonCheck from '../ButtonCheck'
import SentenceTF from '../SentenceTF'
// Componente base
const Actividad2_base = ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props}>

            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Click on the image to see the information of each student' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>
            <IRow pt={2}>
                <ICol py={ 2 }>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    READ EACH STUDENT'S EXPERIENCES THEN ANSWER IF THE SENTENCES ARE TRUE OR FALSE
                    </MainTitle>  
                </ICol>
            </IRow>
            <IRow justify='center' gutters={1}>

                <IRow w={85} align='center' py='2'>
                    <ICol className='bloque-columnas'>
                        <ol>
                            { data.map(item => {
                                return(
                                    <li key={item.id}>
                                        <SentenceTF> {item.pregunta} </SentenceTF>
                                    </li>
                                )
                            }) }
                        </ol>
                    </ICol>

                    
                </IRow>

                <IRow>
                    <ICol pt={3}><ButtonCheck /></ICol>
                </IRow>
            </IRow>



        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
