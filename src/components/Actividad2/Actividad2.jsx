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
import PreguntaRadio from '../PreguntaRadio/PreguntaRadio'
// Componente base
const Actividad2_base = ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' h={33} {...props}>

            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='After reading, answer which of the following answers to the questions is correct' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>
            <IRow pt={2}>
                <ICol pt={ 2 } pb={0.5}>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    READ THE NEXT EMAIL AND ANSWER THE COMPREHENSION QUESTIONS
                    </MainTitle>  
                </ICol>
            </IRow>
            <IRow justify='center' gutters={1}>

                <IRow w={85} align='center' py='0.5'>
                    <ICol>
                        <ol className="lista-preguntas">
                            
                        {
                            data.map(pregunta => {
                                return (
                                    <li key={pregunta.id}>
                                    <PreguntaRadio 
                                    pregunta={pregunta.pregunta}
                                    opciones={pregunta.respuestas}
                                    correcta= {pregunta.correcta}
                                    />
                                    </li>
                                )
                            })
                        }
                        </ol>
                    </ICol>

                    
                </IRow>

                <IRow>
                    <ICol pt={1}><ButtonCheck /></ICol>
                </IRow>
            </IRow>



        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
