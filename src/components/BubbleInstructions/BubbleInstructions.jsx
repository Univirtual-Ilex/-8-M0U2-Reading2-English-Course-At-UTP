
//Import
import React from 'react'
import styled from 'styled-components'
import styles, {bubbleInfo} from './BubbleInstructions_styles'

// Componente base
const BubbleInstructions_base = ({align, w, h, p, py, px, pl, pt, pr, pb, ml, mt, mr, mb, my, mx, ...props}) => {
    return (
        <div {...props}>
            <div className='message'>
                { props.children }
            </div>
        </div>
    )
}
const BubbleInstructions = styled(BubbleInstructions_base)`${ styles }`
export const BubbleInfo = styled(BubbleInstructions)`
    ${ bubbleInfo }
`
export default BubbleInstructions
