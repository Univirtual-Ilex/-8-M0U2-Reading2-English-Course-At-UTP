
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './SentenceTF_styles'
import {ButtonTF2 as ButtonTF} from '../ButtonTF'
import { IRow, ICol } from '../Grid'

// Componente base
const SentenceTF_base = ({...props}) => {
    return (
        <div {...props}>
            <div className="pregunta">
                <IRow justify='space-between' className='ItemsFilaTop'>
                    <ICol w={60} px={1}> {props.children} </ICol>
                    <ICol w={40}> 
                        <ButtonTF t /> 
                        <ButtonTF f /> 
                    </ICol>
                </IRow>

            </div>

        </div>
    )
}
const SentenceTF = styled(SentenceTF_base)`${ styles }`
export default SentenceTF
