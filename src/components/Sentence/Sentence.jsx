
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Sentence_styles'
import Ilex from '../../App/variables'

//Components
import DraggableItem from '../Draggable'
import ButtonEval from '../ButtonEval'


// Componente base
const Sentence_base = ({basename, words, ...props}) => {
    return (
        <div {...props}>
            <article className='container'>
                <div className='d-line field'>{basename}</div>
                <div className='d-line words'>
                    { words.map((word, index) => {

                        return(
                            <DraggableItem name={word} key={index} />
                        )
                    }) }
                </div>
                <div className='d-line eval'>
                    <span className='ok'><img src='./src/ok.svg' alt='Ok'/></span>
                    <span className='wrong'><img src='./src/wrong.svg' alt='Error'/></span>
                    <ButtonEval color={Ilex.color_amarilloClaro} mx={0.2} txtcolor={Ilex.morado}>Hint</ButtonEval>
                    <ButtonEval color={Ilex.morado} mx={0.2}>Check</ButtonEval>
                </div>
            </article>
        </div>
    )
}
const Sentence = styled(Sentence_base)`${ styles }`
export default Sentence
