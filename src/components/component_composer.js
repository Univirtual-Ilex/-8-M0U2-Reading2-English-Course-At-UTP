const fs = require('fs')
const path = require('path')
const dir = path.resolve(__dirname)
const ComponentName = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const tpstring = "``"
const template = (name) => {
    const comp_tpstring = "`${ styles }`"
    return `
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './${name}_styles'

// Componente base
const ${name}_base = ({...props}) => {
    return (
        <div {...props}>
            Creado el componente ${name}
        </div>
    )
}
const ${name} = styled(${name}_base)${comp_tpstring}
export default ${name}
`
}

crear_Componente(template)


function crear_Componente (t) {



ComponentName.question('Nombre del componente: ', function(name){
    createFile(name)
    ComponentName.close()
})

 function createFile(filename) {
// Crar el directorio
    fs.mkdirSync(filename);
// Estructura del componente

const structure = {
    archivo_main: ['index.js', `export { default } from './${filename}'` ],
    archivo_component: [`${filename}.jsx`, t(filename) ],
    archivo_styles:[`${filename}_styles.js`,`import { css } from 'styled-components'

const styles = css${tpstring}

export default styles
    `],
    archivo_interactions:[`${filename}_interactions.js`,''],
    archivo_animations:[`${filename}_animations.js`,'']
}



    const keys = Object.keys(structure)



    keys.map((key, index, ob) => {

        // itera los indices
        // itera el objeto console.log(ob)
        // key console.log(key)
        // valor 
        const file = path.resolve(dir, filename ,structure[key][0])
        const content = structure[key][1]
        // 
        fs.appendFile(file, content, function(err){
            if(err) throw err
            if (index === keys.length-1){
               console.log(`Se ha creado el componente ${filename} satisfactoriamente`)
            }

        })
    })


/*

    let file_content = {
        header: `import ${filename} from ./${filename}`
    }



    fs.appendFile(`${filename}.js`, `${file_content.header}`, function (err) {
        if (err) throw err
        console.log(`Se ha creado el componente ${filename}`)
    })


    if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

*/


 } // ends createfile


}

