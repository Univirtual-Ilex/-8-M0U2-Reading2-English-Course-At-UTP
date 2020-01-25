
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './AreaDrop_styles'

// Componente base
const AreaDrop_base = ({title, w, h, p, py, px, pl, pt, pr, pb, ml, mt, mr, mb, my, mx, ...props}) => {
    return (
        <div {...props}>
            <h3>{title}</h3>
        </div>
    )
}
const AreaDrop = styled(AreaDrop_base)`${ styles }`
export default AreaDrop
