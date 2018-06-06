import router from '../router'
import db from '../db'
import User from '../models/userModel'
/**
 * User Routes 
 */
const userRoutes = () => {    
    router.get('/', (req, res) => {        
        res.send('Route')
    })
    //TODO: Make POST
    router.get('/api/register', (req, res) => {
        User.create({
            firstName: 'Billy', 
            lastName: 'Aryan'
        })
        res.send('register')
    })
    router.get('/api/login', (req, res) => {
        res.send('login')
    })
    router.get('/api/logout', (req, res) => {
        res.send('logout')
    })
} 
export default userRoutes