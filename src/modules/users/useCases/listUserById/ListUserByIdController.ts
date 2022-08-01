import { Request, Response } from 'express'

import ListUserByIdService from './ListUserByIdService'

class ListUserByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const users = await ListUserByIdService.execute({
      id,
    })

    return res.status(200).json(users)
  }
}

export { ListUserByIdController }
