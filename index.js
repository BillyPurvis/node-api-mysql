import env from 'dotenv'
import express from 'express'
import router from './router'
import routes from './routes/routes'

import Sequelize from 'sequelize'
import db from './db'

// Get .env
env.config()


const app = express()


// Call routes
routes()

// Check DB Connection is okay
db.authenticate()
.then(() => {
    console.log('Connection has been successful')
})
.catch(() => {
    console.log('Connection has been unsuccessful')
})
// Define router to use 
app.use('/', router)

// Start Server
app.listen(process.env.APP_PORT, () => {
    console.log('Server Online...')
})