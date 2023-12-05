import { Router } from 'express'
import Controller from '../controllers/sensores.controller'
import ensureAuth from '../middlewares/auth.middleware'

const router = Router()

router.get('/', Controller.getSensores)
router.post('/', Controller.createSensores)

export default router
