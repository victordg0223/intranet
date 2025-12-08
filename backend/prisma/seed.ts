import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create default tenant
  const defaultTenant = await prisma.tenant.upsert({
    where: { slug: 'default-tenant' },
    update: {},
    create: {
      name: 'Default Tenant',
      slug: 'default-tenant',
      plan: 'free',
      status: 'active',
    },
  });

  console.log('✅ Created default tenant:', defaultTenant);

  // Create default admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'SUPER_ADMIN',
      tenantId: defaultTenant.id,
    },
  });

  console.log('✅ Created admin user:', adminUser);

  // Create default regular user
  const regularUser = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      name: 'Regular User',
      role: 'USER',
      tenantId: defaultTenant.id,
    },
  });

  console.log('✅ Created regular user:', regularUser);

  // Create audit log entry
  await prisma.auditLog.create({
    data: {
      action: 'SEED',
      entity: 'Database',
      entityId: 'initial-seed',
      userId: adminUser.id,
      tenantId: defaultTenant.id,
      metadata: {
        description: 'Initial database seed',
        timestamp: new Date().toISOString(),
      },
    },
  });

  console.log('✅ Created audit log entry');

  console.log('🎉 Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
