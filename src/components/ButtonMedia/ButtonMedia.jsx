
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonMedia_styles'

// Componente base
const ButtonMedia_base = ({play, pause, repeat, ...props}) => {
    console.log(props)
    const btn= () => {
        switch(true){
            case play:
                return (
                    <div className='btn vplay'>                        
                    </div>
                )
            case pause:
                return (
                    <div className='btn vpause'>
                        
                    </div>
                )
            case repeat:
                return (
                    <div className='btn vrepeat'>

                    </div>
                )
            default:
                return (
                    <div>
                    {props.children}
                    </div>
                    )
            }
    }
    
    return (
        <div {  ...props } >
            <button className='btn-clean'>
                { btn() }
            </button>
        </div>
    )
}
const ButtonMedia = styled(ButtonMedia_base)`${ styles }`
export default ButtonMedia
