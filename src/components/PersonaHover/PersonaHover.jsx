//Import
import React from 'react'
import styled from 'styled-components'
import styles from './PersonaHover_styles'
import { useState } from 'react'
import Modal from '../ModalGenerico/ModalGenerico'

// Componente base
const PersonaHover_base = ({persona, ...props}) => {
    const francisco = `
    I am Francisco Montero and I come from Tijuana. I am an exchange student from the “Instituto Tecnológico de Puebla”. I study Industrial Engineering at UTP because my university in Mexico has an alliance with this university.  I miss the food from my country, especially tacos but Colombian cuisine is also very good. I love arepas. My classmates are collaborative and responsible. The UTP campus has a lot of natural places to relax and study and I love this. Everything here is nice and I’m having a wonderful experience.`
    const henrietta = `
    My name is Henrietta Fenstermacher  and right now I am an exchange student at UTP. I am originally from Brandenburg in Germany. I come from The Brandenburg University of Technology Cottbus – Senftenberg. I study Environmental Administration. I study in Colombia because I am fascinated with its culture and I also want to learn more Spanish.The UTP has many professors and they are very helpful. Students are friendly and support me when I have problems. I want to learn new things every day here.  
    `
    const [activo, mostrarModal] = useState(false)
    const handleModal = () => {
        activo ? mostrarModal(false) : mostrarModal(true)
    }
    return (
        <div {...props}>
                <div className={'person ' + persona } onClick={handleModal}>
                </div>
                <Modal visible={activo} onClick={handleModal} w={40} bg="rgba(160,255,162,0.7)">
                    <div className='description'>
                        { persona === 'francisco' ? francisco : persona === 'henrietta' ? henrietta : '' }                    
                    </div>
                </Modal>

        </div>
    )
}
const PersonaHover = styled(PersonaHover_base)`${ styles }`
export default PersonaHover
