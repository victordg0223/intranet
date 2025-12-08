import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create default tenant
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'default' },
    update: {},
    create: {
      name: 'Default Tenant',
      slug: 'default',
      domain: 'localhost',
    },
  })

  console.log('✅ Created tenant:', tenant.name)

  // Create default admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'admin',
      tenantId: tenant.id,
    },
  })

  console.log('✅ Created admin user:', adminUser.email)

  // Create default regular user
  const regularUser = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      name: 'Regular User',
      role: 'user',
      tenantId: tenant.id,
    },
  })

  console.log('✅ Created regular user:', regularUser.email)

  // Create sample audit log
  await prisma.auditLog.create({
    data: {
      action: 'seed',
      entity: 'database',
      metadata: {
        message: 'Database seeded with default data',
      },
      tenantId: tenant.id,
      userId: adminUser.id,
    },
  })

  console.log('✅ Created audit log')

  console.log('🎉 Seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
