/*const argv = require('yargs')
    .command('listar', 'Imprime en consola la tablar de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;*/

const argv = require('./config/yargs').argv;
var colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./mutiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'Listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}


//requireds
//const fs = require('fs');
//const fs = require('express');
//const fs = require('./');  archivos propios


//console.log(process.argv);
//let argv2 = process.argv;

//console.log('limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];



//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${archivo}`))
//    .catch(e => console.log(e));