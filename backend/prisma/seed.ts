import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create a default tenant
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'default' },
    update: {},
    create: {
      name: 'Default Tenant',
      slug: 'default',
      domain: 'localhost',
      isActive: true,
    },
  });

  console.log('✅ Created tenant:', tenant.name);

  // Create an admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@intranet.local' },
    update: {},
    create: {
      email: 'admin@intranet.local',
      name: 'Admin User',
      tenantId: tenant.id,
      role: 'ADMIN',
      isActive: true,
    },
  });

  console.log('✅ Created admin user:', adminUser.email);

  // Create a regular user
  const regularUser = await prisma.user.upsert({
    where: { email: 'user@intranet.local' },
    update: {},
    create: {
      email: 'user@intranet.local',
      name: 'Regular User',
      tenantId: tenant.id,
      role: 'USER',
      isActive: true,
    },
  });

  console.log('✅ Created regular user:', regularUser.email);

  // Create an audit log entry
  await prisma.auditLog.create({
    data: {
      tenantId: tenant.id,
      userId: adminUser.id,
      action: 'SEED',
      entity: 'DATABASE',
      metadata: {
        message: 'Database seeded successfully',
      },
    },
  });

  console.log('✅ Created audit log entry');
  console.log('🎉 Database seed completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
