
//Import
import React from 'react'
import styled from 'styled-components'
import styles,{stylesCol, stylesRow} from './Grid_styles'

/**
 * Irow props
 * justify = center flex-start flex-end space-between space-around space-evenly
 * cols (default 12)
 * w ancho en porcentaje
 * valign alinea el grupo de items verticalmente
 * align alinea el contenedor (default left) center right
 * gutters ancho de medianil (default 0) se mide en unidades de EM (revisar variables el tamaño del font)
 * p (padding) pr pt pb pl px py 
 * 
 */
export const IRow = styled.div`
    ${stylesRow}
`

export const ICol = styled.div`
    ${stylesCol}
`
// Componente base
const Grid_base = ({w, h, p, py, px, pl, pt, pr, pb, ml, mt, mr, mb, my, mx, gutters, align, valign, justify, cols, ...props}) => {
    return (
        <section { ...props }> props.children </section>
    )
}
const Grid = styled(Grid_base)`${ styles }`
export default Grid
