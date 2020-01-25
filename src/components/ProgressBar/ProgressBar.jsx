import React from 'react'
import styled from 'styled-components'
//Estilos
import styles from './ProgressBar_styles'

const ProgressBar_base = ({progress,...props}) => {

    return (
        <div {...props}>
            <div className={'barContainer' }>
                <span className={'dot pos0'}></span>
                <span className={'dot pos50'}></span>
                <span className={'dot pos100'}></span>
                <div className='bar'>
                    <div className={ progress >= 100 ? 'fill fill100' : 'fill' }></div>
                </div>
            </div>
        </div>
    )
}

const ProgressBar = styled(ProgressBar_base)`
    ${ styles }
`

export default ProgressBar