import React from 'react'
import styled from 'styled-components'

/**
 * 
 * Props del componente
 * ## row: Sirve para convertir el contenedor en un grid flex
 * 
 */

const Container_base = ({ h, w, bgImage, row,...props}) => { // se traen los props con el spread y además se desestructura para evitar problemas de render https://www.styled-components.com/docs/faqs#why-am-i-getting-html-attribute-warnings
    return (
        <section {...props}>
            <div className={`viewport ${ row ? 'row': '' } ${ bgImage ? 'bgImage': ''}`}>
                { props.children }
            </div>
        </section>
    )
}

const Container = styled(Container_base)`

    display: flex;
    justify-content: center;
    align-items:center;
    height:100%;

    .viewport{
        box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.15);
        width:${ props => props.w ? props.w : 68.8125 }em;
        height:${ props => props.h ? props.h : 32.625 }em;
        min-width:${ props => props.w ? props.w : 68.8125 }em;
        min-height:${ props => props.h ? props.h : 32.625 }em;
        border-radius: 0.5em;
        background-color: #fff;
        box-sizing: border-box;
        position:relative;
    }


    .row{
        display: flex;
    }

    .bgImage{
        background-image: url(${(props)=> props.bgImage });
        background-position:right top;
        background-repeat:no-repeat;
        background-size: cover;
    }

`

export default Container