
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ImageArea_styles'

// Componente base
const ImageArea_base = ({dropzone, img, ...props}) => {
    return (
        <div {...props}>
            <figure>
                <img src={ img } alt='zone' />
            </figure>

            <div className='droparea'>
                
            </div>

        </div>
    )
}
const ImageArea = styled(ImageArea_base)`${ styles }`
export default ImageArea
