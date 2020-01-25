import React from 'react'
import styled from 'styled-components'
import styles, {subtitle} from './MainTitle_styles'

const MainTitle_base = ({size, children, color, ...props}) => {
    return (
        <h1 {...props}>
            { children }
        </h1>
    )
}

const MainTitle = styled(MainTitle_base)`
    ${ styles }
`

export const Subtitle = styled(MainTitle)`
    ${ subtitle }
`

export default MainTitle