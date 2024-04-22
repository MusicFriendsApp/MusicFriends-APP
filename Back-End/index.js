require('dotenv').config()
const { syncModels, checkConnection } = require('./database/index')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const checkAndSyncSQL = async () => {
  await checkConnection()
  await syncModels()
}

const port = 3000

const initAndListen = () => {
  const app = express()
  .use(cors())
  .use(express.json())
  .use(morgan('dev'))
  /* .use('/api', require('./api/routes')) */
  .listen(port, () => {
    console.log(`listening on port ${port}`)
  })
}

const startAPI = async () => {
  await checkAndSyncSQL()
  initAndListen()
}

startAPI()