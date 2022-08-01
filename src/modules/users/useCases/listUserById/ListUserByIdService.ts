import { Users } from '@prisma/client'
import { AppError } from '@shared/errors/AppError'
import { prismaClient } from '@shared/prisma'

class ListUserByIdService {
  async execute({ id }): Promise<Users> {
    const user = await prismaClient.users.findUnique({
      where: { id },
    })

    console.log(user)

    if (!user) {
      throw new AppError('User not found', 404)
    }

    return user
  }
}

export default new ListUserByIdService()
