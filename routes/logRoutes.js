import router from '../router'
/**
 * Log Routes 
 */
const logRoutes = () => {    
    router.get('/api/log/create', (req, res) => {
        res.send('Log Create Route')
    })
} 
export default logRoutes