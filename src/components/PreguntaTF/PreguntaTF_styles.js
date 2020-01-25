import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`

    .contador{
        font-size:0.8em;
        color: ${ Ilex.bordeGris };
        padding: 1em;
        text-align:center;
    }

    .pregunta{
        padding: 1em;
        color: ${ Ilex.color_gris};
        font-weight:bolder;
        font-size: 1.3em;
        background-color: #fff;
        border:0.15em solid ${ Ilex.dragItem };
        text-align:center;
        border-radius: 0.5em;
        margin:1em auto;
        max-width:80%;

    }

`

export default styles
    