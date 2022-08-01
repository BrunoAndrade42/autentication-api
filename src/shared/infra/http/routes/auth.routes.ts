import { Router } from 'express'

import { AuthenticateUserController } from '@modules/users/useCases/authenticateUser/AuthenticateUserController'
import { ensureAuthenticated } from '@middlewares/ensureAuthenticated'

const authenticateUserController = new AuthenticateUserController()

const fn = (req, res, next) => {
  console.log('authenticateUserController im here')
  next()
}

const authRoutes = Router()

authRoutes.post('/auth', authenticateUserController.handle)

authRoutes.get('/me', ensureAuthenticated, (req, res) =>
  res.status(200).json({ token: req.token, user: req.user })
)

export { authRoutes }
