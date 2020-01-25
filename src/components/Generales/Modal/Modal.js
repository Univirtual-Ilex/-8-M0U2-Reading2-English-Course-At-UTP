import React from 'react'
import ReactDom from 'react-dom'
// Components
import ButtonModal from '../../ButtonModal'
import styled from 'styled-components'
import styles from './Modal_styles'

const ModalBase = ( { w, ok, err, visible, ...props } ) => {
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
                <img src='./src/ok.png' alt='Try Again'/>
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
                        <ButtonModal inactivo>Repeat</ButtonModal>
                        { !err &&  <ButtonModal>Next</ButtonModal>  }
                        
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