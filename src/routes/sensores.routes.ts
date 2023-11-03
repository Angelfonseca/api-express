import { Router } from 'express'
import controller from '../controllers/sensores.controller'
import ensureAuth from '../middlewares/auth.middleware'

const router = Router()

router.get('/', ensureAuth, controller.getSensores)
router.post('/', controller.createSensores)

export default router