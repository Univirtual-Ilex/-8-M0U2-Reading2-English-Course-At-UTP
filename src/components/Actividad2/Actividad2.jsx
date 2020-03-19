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
import { useState } from 'react'
import Modal from '../Generales/Modal'
import PreguntaResultado from '../PreguntaResultado'
// Componente base
const Actividad2_base = ({staticContext, ...props}) => {
    const [answers, setAnswers ] = useState([])
    const [results, setResults] = useState(false)
    const [visible, setVisible] = useState(false)

    const sendFeedback = (feedback, id) => {
        let collection = [...answers]
        collection[id-1] = feedback
        setAnswers(collection)
        console.log(answers)
    }

    const check = (feedback) => {
        let result = feedback.indexOf(false)
        let result2 = feedback.indexOf()
        if (result === -1 && result2 === -1 && feedback.length === data.length) {
            setVisible(true)
            setResults(true)
        } else {
            setVisible(true)
            setResults(false)
        }
    }

    return (
        <Container bgImage='./src/bg_actividad1.png' h={35} {...props}>

            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Read the next email and answer the comprehension questions and choose A, B, C or D.' />
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
                                    indexpregunta={pregunta.id}
                                    send={(evaluation, questionNumber) => sendFeedback(evaluation, questionNumber) }
                                    />
                                    </li>
                                )
                            })
                        }
                        </ol>
                    </ICol>

                    
                </IRow>

                <IRow>
                    <ICol pt={3}><ButtonCheck onClick={() => check(answers)} /></ICol>
                </IRow>
            </IRow>

            <Modal visible={visible} ok={results} err={!results} w={30} nxtUrl='/' repeatUrl='/actividad2' finishUrl={results}>
                {

                answers.map((value, index) => {
                    return(
                    <PreguntaResultado key={'id'+index} ok={value} err={!value} > {index+1} </PreguntaResultado>
                    )
                })
                
                }
            
            </Modal>



        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
