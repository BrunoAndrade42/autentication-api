import { Router } from 'express'

import { ChangeUserPasswordController } from '@modules/users/useCases/changeUserPassword/ChangeUserPasswordController'
import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController'
import { ListAllUsersController } from '@modules/users/useCases/listAllUsers/ListAllUsersController'
import { ListUserByIdController } from '@modules/users/useCases/listUserById/ListUserByIdController'

import { ensureAuthenticated } from '@middlewares/ensureAuthenticated'

const createUsersController = new CreateUserController()

const changeUserPasswordController = new ChangeUserPasswordController()
const listAllUsersController = new ListAllUsersController()
const listUserByIdController = new ListUserByIdController()

const usersRoutes = Router()

usersRoutes.post('/register', createUsersController.handle)
usersRoutes.get('/all', ensureAuthenticated, listAllUsersController.handle)
usersRoutes.get('/byId/:id', ensureAuthenticated, listUserByIdController.handle)
usersRoutes.put(
  '/change-password',
  ensureAuthenticated,
  changeUserPasswordController.handle
)

export { usersRoutes }
