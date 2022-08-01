import { Users } from '.prisma/client'
import { prismaClient } from '@shared/prisma'

interface IRequest {
  name: string
  created_at: string
}

class ListAllUsersService {
  async execute({ name, created_at }: IRequest): Promise<Users[]> {
    const users = await prismaClient.$queryRaw`SELECT * FROM users`

    return users
  }
}

export default new ListAllUsersService()
