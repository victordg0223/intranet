import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class UsersService {
  private prisma = new PrismaClient()

  async findAll() {
    return this.prisma.user.findMany({
      include: {
        tenant: true,
      },
    })
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        tenant: true,
      },
    })
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        tenant: true,
      },
    })
  }

  async create(data: { email: string; name: string; tenantId: string }) {
    return this.prisma.user.create({
      data,
      include: {
        tenant: true,
      },
    })
  }

  async update(id: string, data: { name?: string; email?: string }) {
    return this.prisma.user.update({
      where: { id },
      data,
      include: {
        tenant: true,
      },
    })
  }

  async delete(id: string) {
    return this.prisma.user.delete({
      where: { id },
    })
  }
}
