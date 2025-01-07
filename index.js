import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.send('Hola mundo en Express')
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('Servidor funcionando en el puerto: ', port)
})