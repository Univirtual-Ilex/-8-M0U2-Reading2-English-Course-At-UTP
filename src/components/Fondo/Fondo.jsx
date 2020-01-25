import React from 'react'
import styled from 'styled-components'

const Fondo_base = ({ degradado ,...props}) => { // con styled components Toca pasar las props desestructuradas para que no se renderice Importante
    console.log({...props})
    return(
        <section {...props}>
            { props.children }
        </section>
    )
}

const Fondo = styled(Fondo_base)`
    background: ${({degradado}) => degradado} ;
    width:100%;
    height:100%;
`


export default Fondo