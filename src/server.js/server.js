const express = require('express')
const path = require('path')

const startServer = (options) => {
    const { port, public_path = 'public'} = options
   
    const app = express()

    //app.use(express.json())
    // Para poder usar middlewars se usa la palabara use  (express)
    app.use(express.static(public_path)) // contenido estatico que ponemos disponible

    /*app.get('/clientes', (req, res) =>{
        res.send('ruta clientes')
    })

    app.post('/clientes', (req, res) => {
        console.log(req.body)
        res.send('se creo el cliente')
    })*/

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    
    })

    app.listen (port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    })


}


module.exports = {
    startServer
}