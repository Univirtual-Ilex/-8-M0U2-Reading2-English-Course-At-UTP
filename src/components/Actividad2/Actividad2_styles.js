import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    color: ${Ilex.color_grisMedio};
    .bloque-columnas{
        column-count: 2;
        column-gap: 3.5em;
        li{
            margin: 1em 0;
        }
    }
`

export default styles
    