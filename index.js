// Import stylesheets
import './style.css';

var visualization = d3plus
  .viz()
  .container('#viz1')
  .data([
    { id: 'FRUTALES', value: 50236 },
    { id: 'CEREALES', value: 36045 },
    { id: 'HORTALIZAS', value: 32032 },
    { id: 'TUBÉRCULOS Y PLÁTANOS', value: 30664 },
    { id: 'LEGUMINOSAS', value: 26368 },
    { id: 'OTROS PERMANENTES', value: 21813 },
    { id: 'FIBRAS', value: 1977 },
    { id: 'OLEAGINOSAS', value: 1967 },
    { id: 'PLANTAS AROMÁTICAS, CONDIMENTARIAS Y MEDICINALES', value: 1686 },
    { id: 'FORESTALES', value: 1327 },
    { id: 'FLORES Y FOLLAJES', value: 981 },
    { id: 'OTROS TRANSITORIOS', value: 956 },
    { id: 'HONGOS', value: 16 },
  ])
  .type('tree_map')
  .id('id')
  .size('value')
  .draw();
