import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    color: ${Ilex.color_grisMedio};
    .bloque-columnas{
        column-count:4;
        column-gap: 3.5em;
        orphans:0;
        widows: 0;
        
        li{
            margin: 0.5em 0.5em;


            &:first-child{
                margin: 0em 0;
            }
        }
    }
    .lista-preguntas {
        display:flex;
        flex-direction: column;
        align-items:stretch;
        align-content:space-between;
        flex-wrap:wrap;
        height:25.4em;
        li{
            margin: 0.5em 0.5em;
            width: 10em ;
        }
    }
`

export default styles
    