import express from 'express'
import Debug from 'debug'
import www from '@emanuelmoraes-dev/www-express'

const debug = Debug('super-mega-senha:server')
const app = express()

app.get('/', (req, res, next) => {
    res.status(200).send('Iai')
})

www(app, debug)