import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async findAll(tenantId: string) {
    // TODO: Add pagination, filtering, and sorting
    return prisma.user.findMany({
      where: { tenantId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findOne(id: string, tenantId: string) {
    return prisma.user.findFirst({
      where: { id, tenantId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async create(data: {
    email: string;
    name: string;
    tenantId: string;
    role?: string;
  }) {
    // TODO: Hash password, send welcome email
    return prisma.user.create({
      data: {
        ...data,
        role: data.role || 'USER',
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async update(
    id: string,
    tenantId: string,
    data: { name?: string; role?: string },
  ) {
    return prisma.user.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        updatedAt: true,
      },
    });
  }

  async delete(id: string, tenantId: string) {
    // Verify user belongs to tenant
    const user = await this.findOne(id, tenantId);
    if (!user) {
      throw new Error('User not found or unauthorized');
    }

    return prisma.user.delete({
      where: { id },
    });
  }
}
