//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad3_styles'
import Container from '../Container'
import Ilex from '../../App/variables'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import InputWords from '../InputWords'

// styles from styled
import { ProgressbarContainer } from '../Actividad1/Actividad_styles'
import {Olist} from './Actividad3_styles'
import {Item}from './Actividad3_styles'
import ButtonModal from '../ButtonModal'
import { IRow, ICol } from '../Grid'


// Componente base
const Actividad3_base = ({...props}) => {
    return (
        <Container {...props} bgImage='./src/bg_actividad1.png' w={69} h={38.8}>
            <ProgressbarContainer>
                <ProgressBar progress={75} />
            </ProgressbarContainer>
            <div className='container-content'>
                <MainTitle color={Ilex.violeta2}> COMPLETE THE SENTENCES WITH THE CORRECT WORDS FROM THE CONVERSATION </MainTitle>
            </div>

            <IRow>                
                <ICol py={1.5}>
                    <Olist>
                        <Item> The  person who writes the message is  <InputWords />.</Item>
                        <Item> The person who sends the message is   <InputWords /> </Item>
                        <Item> The student is in <InputWords /> semester </Item>
                        <Item> The student is studying  <InputWords /> </Item>
                        <Item> The student needs to leave  the university campus because he has classes at   <InputWords  w={10} /> </Item>
                        <Item> He has to do a lot of <InputWords/></Item>
                        <Item> The majority of the students’ classmates are <InputWords /> </Item>
                        <Item> The most difficult subject for the student is  <InputWords /> </Item>
                        <Item> The student feels <InputWords /> with his program.</Item>
                        <Item> The student wants to contribute to <InputWords /></Item>
                    </Olist>

                    <div className='contenedorButton'>
                    <ButtonModal>Ready</ButtonModal> 
                    </div>

                </ICol>
            </IRow>

        </Container>

    )
}
const Actividad3 = styled(Actividad3_base)`${ styles }`

export default Actividad3
