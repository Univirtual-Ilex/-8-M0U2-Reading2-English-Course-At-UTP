import { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`
    display: inline-block;
    padding:0.1em 0.6em 0.1em 0.4em;
    color: ${Ilex.violeta2};
    
    &.type2{
        color: #fff;
        i.ilx-bocina{
            font-size:1.2em;
        }
    }
    
    &:hover{
        color: ${Ilex.verde};
    }

`
    // crear el template string
    export default styles
    