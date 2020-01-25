import React from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
import PersonaHover from '../PersonaHover/PersonaHover'
import ButtonCheck from '../ButtonCheck'







const Actividad_base =  ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={32}>
            
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

            <IRow justify='center' align='center' w={80} gutters={1}>
                <ICol w={40}>
                    <PersonaHover persona='francisco'/>
                </ICol>
                <ICol w={40}>
                    <PersonaHover persona='henrietta'/>
                </ICol>
            </IRow>
            <IRow>
                <ICol pt={1}>
                    <ButtonCheck>Next</ButtonCheck>
                </ICol>
            </IRow>

        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad