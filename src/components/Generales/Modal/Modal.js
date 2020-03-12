import React from 'react'
import ReactDom from 'react-dom'
// Components
import { ButtonmodalTo } from '../../ButtonModal'
import styled from 'styled-components'
import styles from './Modal_styles'

const ModalBase = ( { w, ok, err, visible,nxtUrl,repeatUrl,finishUrl, ...props } ) => {
    const ModalType = () => {

        if( ok && err) {
            return props.children
        } else if( err && props.children ){
            // feedback malo
            return (
                <div className='content-error error-feedback'>
                    <p>Try Again</p>
                    <div>{props.children}</div>
                </div>
                
                )
        } else if( ok && props.children){
            // feedback bueno
            return (
                <div className='content-ok ok-feedback'>
                    <p> Great !</p>
                   <div>{props.children}</div>         
                </div>)

        } else if( ok ) {
            return (
            <div className='content-ok'>
                <img src='./src/ok.png' alt='Great Job'/>
                <p> Great !</p>
            </div>
            )
        } else if ( err ) {
            return (
            <div  className='content-error'> 
                <img src='./src/err.png' alt='Try Again'/>
                <p>Try Again</p>
            </div>)
        } else {
            return (
                <div className='content-ok'>
                    {props.children}
                </div>
                ) 
        }

    }

    // en la línea 29 se usa un operador ternario con else if para imprimir la clase ok o error
    // también se obtienen las clases de las props que vienen de los styled components
    // es un poco confuso
    return ReactDom.createPortal(
        
            <div className ={ `layout ${ ok ? 'ok': err ? 'err' : ''} ${{...props}.className}`  } >
                <div className={'ilx.modal-container'}>

                    <header className='ilx-modal-title'>
                        <h3> { props.title } </h3>
                    </header>

                    
                    <div className='ilx-modal-content'>
                        { ModalType() } 
                    </div>


                    <div className='ilx-modal-footer'>
                        <ButtonmodalTo inactivo href={repeatUrl}>Repeat</ButtonmodalTo>
                        { !err &&  <ButtonmodalTo href={nxtUrl}> {finishUrl ? 'Finish':'Next'} </ButtonmodalTo>  }
                        
                    </div>


                </div>
                
            </div>


,
        document.getElementById('app-modal')
    )
}

const Modal = styled(ModalBase)`
    ${ styles }
`

export default Modal