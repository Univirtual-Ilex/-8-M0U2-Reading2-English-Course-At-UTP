
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './PreguntaRadio_styles'

// Componente base
const PreguntaRadio_base = ({pregunta, opciones, correcta,...props}) => {
    console.log('la correcta es la ', correcta)
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
                                    <input type="radio" name="opcion" value={opcion} />
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
