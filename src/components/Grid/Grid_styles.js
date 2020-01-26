import { css } from 'styled-components'

export const padding = (tipo) => {
    switch(true){
        case tipo.p && tipo.p>=0:
            return `${ tipo.p || 0 }em`
        case tipo.pt && tipo.pt>=0:
        case tipo.pr && tipo.pr>=0:
        case tipo.pb && tipo.pb>=0:
        case tipo.pl && tipo.pl>=0:
           return `${tipo.pt || 0 }em ${tipo.pr || 0}em ${tipo.pb || 0}em ${tipo.pl || 0}em`
        case tipo.px && tipo.px>=0:
        case tipo.py && tipo.py>=0:
            return `${tipo.py||0}em ${tipo.px||0}em ${tipo.py||0}em ${tipo.px||0}em`
        default:
            return '0em'
    }

}

export const margin = (tipo) => {
    switch(true){
        case tipo.m && tipo.m>=0:
            return `${ tipo.m || 0 }em`
        case tipo.mt && tipo.mt>=0:
        case tipo.mr && tipo.mr>=0:
        case tipo.mb && tipo.mb>=0:
        case tipo.ml && tipo.ml>=0:
           return `${tipo.mt || 0 }em ${tipo.mr || 0}em ${tipo.mb || 0}em ${tipo.ml || 0}em`
        case tipo.mx && tipo.mx>=0:
        case tipo.my && tipo.my>=0:
            return `${tipo.my||0}em ${tipo.mx||0}em ${tipo.my||0}em ${tipo.mx||0}em`
        default:
            return '0em'
    }
}

const styles = css``

export const stylesRow = css`
    display: flex;
    flex-wrap:wrap;
    justify-content: ${ props => props.justify || 'flex-start' };
    align-items: ${ props=> props.valign || 'flex-start'};
    width:${ (props) => ( props.w || 100 ) }%;
    height:${ (props) => ( props.h ? props.h + '%' : 'auto' ) };
    margin: ${
        (props)=>{
            switch (props.align) {
                case 'center':
                    return '0 auto'
                case 'left':
                    return '0'
                case 'right':
                    return '0 0 0 auto'
                default:
                    return 0
            }
        }
    };
    padding:${ (props) => (padding(props)) };

    &>div{
        margin-left:${props => props.gutters || 0}em;
        margin-right:${props => props.gutters || 0}em;
    }
`
export const stylesCol = css`
    padding: ${ (props)=> (padding(props))  };
    width:${props=> props.w || 100}%;
    margin:${ (props)=> (margin(props))  };

`

export default styles
