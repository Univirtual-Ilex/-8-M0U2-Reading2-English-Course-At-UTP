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
import ButtonCheck from '../ButtonCheck'







const Actividad_base =  ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={32}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Read the text carefully to answer the following questions correctly' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>
            <IRow pt={1.5}>
                <ICol py={ 0.5 }>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    READ EACH STUDENT'S EXPERIENCES THEN ANSWER IF THE SENTENCES ARE TRUE OR FALSE
                    </MainTitle>  
                </ICol>
            </IRow>

            <IRow justify='center' align='center' w={70}>
                <div className="fondo-correo">
                    <div className="to">
                        <span className="label">To</span> 
                        <span className="mail">gerardo88@yahoo.com</span>
                    </div>
                    <div className="subject">
                        <span className="label">Subject Field:</span> 
                        <span>My English Course at UTP</span>
                    </div>
                    <div className="content">
                    Dear Gerardo,
                    How are you? I am sending you this message to let you know that I am studying English at UTP. I am in Course 4 at ILEX, the foreign language institute of UTP. I am part of the university as an extension student. Next semester I plan to be part of UTP. My English teacher is Patricia. She’s very intelligent. She’s always attentive, and we do a lot of fun activities in every lesson. I love her lessons because I learn a lot.
                    I am happy with my English course but I hope to study veterinary or medicine. I need to decide which program.
                    I hope you are doing well in Canada with your wife and children. Send my regards to them, please. By the way, our mother is better now after the surgery.
                    See you next month.

                    <span className="label">
                    <br/><br/>Love, Jennifer
                    </span>


                    </div>
                </div>
            </IRow>
            <IRow>
                <ICol >
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