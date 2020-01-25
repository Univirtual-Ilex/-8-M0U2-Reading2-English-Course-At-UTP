import { css } from 'styled-components'

const styles = css`
    video{
        width: ${ props => props.w }em;
        height: ${ props => props.h? props.h + 'em' : 'auto'};
        display: block;
        border-radius: ${ props => ( props.radius ? '1.2em'  :'none')};
    }
`

export default styles
    