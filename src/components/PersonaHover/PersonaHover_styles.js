import { css } from 'styled-components'
// import Ilex from '../../App/variables'

const styles = css`
.person{
    width:21.875em;
    height:21.875em;
    background-image: url(./src/sprite.png);
    background-position: 0 0;
    cursor: pointer;
    transition: transform 0.15s ease-in-out


}
.person.francisco{
    background-position: 0 0;
    :hover{
        background-position-y:21.875em;
        transform: scale(1.1)
    }
}
.person.henrietta{
    background-position: 21.875em 0;
    :hover{
        background-position-y:21.875em;
        transform: scale(1.1)
    }
}
`

export default styles
    