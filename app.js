const express = require('express');
const logger = require('morgan');
const cors = require('cors')

//importamos las rutas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mathsRouter = require('./routes/maths');
const listRouter = require('./routes/list');
const apiRouter = require('./routes/api')

//Connect
const {connect} = require('./db/db')


//importamos express
const app = express()

//Usos con Express
app.use(logger('ejecutar'))
app.use(express.json())
app.use(cors())

//Colocamos las rutas
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/maths', mathsRouter)
app.use('/list', listRouter)
app.use('/api', apiRouter)

//
connect()

module.exports = app