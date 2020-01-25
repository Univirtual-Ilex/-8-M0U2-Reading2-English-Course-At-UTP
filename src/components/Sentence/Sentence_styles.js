import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
text-align:center;

.d-line{
    display: inline-block;
    font-size:0.87em;
    span{
        display:inline-block;
        padding: 0;
        img{
            display: block;
            width:1.5em;
            height: 1.5em;
            padding:0.2em;
            margin:0 0.3em;
        }
    }
    .ok{}

    .wrong{}

}

.field{
    font-weight:bold;
    color:${Ilex.textos};
}

`

export default styles
    