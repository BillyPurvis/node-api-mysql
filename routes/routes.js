import userRoutes from './userRoute'
import logRoutes from './logRoutes'

/**
 * Call all our routes
 */
const initRoutes = () => {
    userRoutes()
    logRoutes()
}

export default initRoutes