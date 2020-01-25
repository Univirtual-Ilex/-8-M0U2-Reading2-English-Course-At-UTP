import { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`
    padding:1.5em 0;
    .barContainer{
        position: relative;
        height:1em;
        span.dot {
            width: 1.3em;
            height: 1.3em;
            position:absolute;
            display: inline-block;
            background-color:#fff;
            border: 0.37em solid ${Ilex.dragItem};
            border-radius:100%;
            z-index:10;
        }
        .dot.bg{
            background-color:${Ilex.barRelleno};
            border-color: ${Ilex.barRelleno};
        }
        .dot.pos0.bgV{
            background-color:${Ilex.verde};
            border-color: ${Ilex.verde};
        }
        .dot.pos0{
            left: 0;
        }
        .dot.pos50{
            left:calc(50% - 0.65em)

        }

        .dot.pos100{
            right:0
        }
        .bar{
            height: 0.5em;
            background-color: ${Ilex.dragItem};
            border-radius:0.2em;
            width: 100%;
            top:0.406299em;
            position: absolute;
            z-index:8;
            .fill{
                height:100%;
                width:${ props => props.progress<100 ? props.progress : 100}%;
                background-color: ${Ilex.barRelleno};
            }
            .fill.fill100{
                background-color: ${Ilex.verde};
            }

        }
    }


`

export default styles