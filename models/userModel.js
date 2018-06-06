import db from '../db'
import Sequelize from 'sequelize'

// Create Model
const User = db.define('user', {
    firstName: {
        type: Sequelize.STRING
    }, 
    lastName: {
        type: Sequelize.STRING
    }
})

export default User