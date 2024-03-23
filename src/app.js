const { envs } = require('./config/env')
const { startServer } = require('./server.js/server')


const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//Funcion agnostica autoconvocada.
//Agnostica por que no tiene nombre
//Autoconvocada porque la ejecutamos con los parentesis
(async () => {
    main()
})()



