
//Import
import React, { useRef } from 'react'
import styled from 'styled-components'
import styles from './Video_styles'
import ButtonMedia from '../ButtonMedia/ButtonMedia'

/**
 * PROPS
 * w = ancho
 * h= alto
 * videoSrc = url video
 */

// Componente base
const Video_base = ({ h, w, videoSrc, radius, ...props}) => {
    const ilxVideo = useRef()
    const vplay = () => {
        ilxVideo.current.play()
        ilxVideo.current.controls = true
    }
    const pause = () => {
        ilxVideo.current.pause()
    }
    const repeat =() => {
        ilxVideo.current.load()
        vplay()
    }
    return (
        <div {...props}>
            <video width={ 1280 } height={ 720 } ref={ilxVideo} >
                <source src={ videoSrc } type='video/mp4' poster='src/poster.png'/>
                <p> Este navegador no soporta la etiqueta video </p>
            </video>
            <div className="controls">
                <ButtonMedia onClick={vplay} play> play </ButtonMedia>
                <ButtonMedia onClick={pause} pause> pause </ButtonMedia>
                <ButtonMedia onClick={repeat} repeat>repeat</ButtonMedia>
            </div>

        </div>
    )
}
const Video = styled(Video_base)`${ styles }`
export default Video
