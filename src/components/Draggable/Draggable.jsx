
//Import
import React from 'react'
import styled from 'styled-components'
//Components
import BocinaButton from '../BocinaButton'
import styles, {draggableBlock, draggableItemb, draggableClean} from './Draggable_styles'
// import BocinaButton from '../BocinaButton'

export const DraggableBlock = styled.div`
    ${draggableBlock}
`

export const DraggableClean = styled.div`
    ${draggableClean}
`

// Componente base
const Draggable_base = ({audio, name, ...props }) => {
    return (
        <div {...props}>
            <BocinaButton audio={ audio } type />
            <span>{ name }</span>
        </div>
    )
}
const Draggable = styled(Draggable_base)`${ styles }`


export const DraggableItemb =styled(Draggable)`
    ${draggableItemb}

`


export default Draggable
