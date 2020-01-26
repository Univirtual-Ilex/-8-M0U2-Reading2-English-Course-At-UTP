const ilex = {
  font_size: '16px',
  mdi:'Material Design Icons',
  titulos: `'Rubik', sans-serif `,
  font:  `'Open Sans', sans-serif`,
  violeta: `rgba(111,86,244,1)`,
  violeta2: `rgba(145,71,229,1)`,
  azul: `rgba(101,145,255,1)`,
  rosa: `rgba(208,127,207,1)`,
  morado: `rgba(75,36,119,1)`,
  textos: `rgba(128,128,128,1)`,
  dragItem: 'rgba(230,230,230,1)',
  color_grisMedio:'rgba(128,128,128,1)',
  verde:`rgba(84,236,194,1)`,
  iconos:`Ilex-Icons`,
  bordeGris:`rgba(102,102,102,1)`,
  grisOscuro:`rgba(77,77,77,1)`,
  barRelleno:`rgba(249,211,89,1)`,
  color_rojo:`rgba(221,84,123,1)`,
  color_gris:`rgba(128,128,128,1)`,
  color_gris_input:`#ccc`,
  color_gris_area:`rgb(200,200,200)`,
  color_amarilloClaro:`rgba(255,240,153,1)`,
  color_amarilloOscuro:`rgba(229,169,80,1)` ,
  color_azul_reading:'#4896FF',
  color_verde_reading:'#66FF99',
  color_rosa_radios:'#BA61FF',
  degradado:(rot, color1, color2, color3) => {
      return `linear-gradient(${rot},${color1},${color2},${color3})`
  },
  modal: (r,g,b,a) => {
      return `rgba(${r},${g},${b},${a})` 
  },
}

    export default ilex


