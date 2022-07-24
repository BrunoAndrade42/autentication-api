import { Router } from 'express'

import { authRoutes } from './auth.routes'
import { usersRoutes } from './users.routes'

const routes = Router()

routes.use('/user', usersRoutes)
routes.use(authRoutes)

export { routes }
