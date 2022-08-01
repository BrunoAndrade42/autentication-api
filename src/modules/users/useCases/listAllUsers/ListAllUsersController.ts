import { Users } from '@prisma/client'
import { Request, Response } from 'express'

import ListAllUsersService from './ListAllUsersService'

class ListAllUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, created_at } = req.query
    const users = await ListAllUsersService.execute({
      name,
      created_at,
    })

    return res.status(200).json(users)
  }
}

export { ListAllUsersController }
