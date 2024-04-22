const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
  port: process.env.DB_PORT,
  logging: false
})

const checkConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection successful')
  } catch (error) {
    console.log(error)
  }
}

const syncModels = async () => {
  const state = {
    alter: {alter: true},
    force: {force: true}
  }

  try {
    await sequelize.sync(state[value] || '')
    console.log(`All models synchronized using ${JSON.stringify(state[value] || '')}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { sequelize, checkConnection, syncModels }