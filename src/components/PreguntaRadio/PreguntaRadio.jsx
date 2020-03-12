
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './PreguntaRadio_styles'

// Componente base
const PreguntaRadio_base = ({send, indexpregunta, pregunta, opciones, correcta,...props}) => {
    const sendAnswer = (value, name) => {
        let evaluation = value+1 === correcta
        let questionNumber = indexpregunta
        send && send(evaluation, questionNumber)
        //console.log(evaluation, questionNumber)
        // console.log('la correcta es la ', correcta)
        // console.log('Has marcado', value + 1, name)
    }
    return (
        <div {...props}>
            <div> { pregunta } </div>
            <form>

                    {
                        opciones.map((opcion, index) => {
                            return (
                                <div className="opcion-individual" key={ index }>
                                <label>                 
                                <span className="value"> {opcion} </span>
                                    <input type="radio" name="opcion" value={opcion}  onClick={() => sendAnswer(index,opcion)}/>
                                <span className="mark"></span>
                                </label>                  
                                </div>)
                        })
                    }

            </form>
        </div>
    )
}
const PreguntaRadio = styled(PreguntaRadio_base)`${ styles }`
export default PreguntaRadio
