import express from 'express'

const router = express.Router()

// Middleware
router.use(function (req, res, next) {
  
    //TODO: Add Auth check
     next()
})
export default router