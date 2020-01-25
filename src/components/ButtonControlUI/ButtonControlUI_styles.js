import { css } from 'styled-components'
import Ilex from '../../App/variables'
    const styles = css`

    button{

        position: relative;
        border:0.15em solid ${Ilex.violeta2};
        display: block;
        width: 2.6em;
        height: 2.6em;
        border-radius: 50%;
        color: ${Ilex.violeta2};
        font-weight:bolder;
        font-size:1.1em;
        line-height:0;
        cursor:pointer;
        &:hover ~ .tooltip{
            display:block;
        }
        &:hover::after{
            content:'${props => props.tooltip }';
            position:absolute;
            background-color: ${Ilex.violeta2};
            color: #fff;
            font-family:${Ilex.titulos};
            font-weight:normal;
            font-size:0.6em;
            padding:2em 1.8em 2em 1.8em;
            width:14.75em;
            border-radius:2.8em;
            text-align:center;
            line-height:initial;
            margin-left: -9.8em ;
            top: 4.2em;
        }
    }

    `

export default styles
 