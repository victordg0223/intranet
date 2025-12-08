import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Create a demo tenant
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'demo' },
    update: {},
    create: {
      name: 'Demo Tenant',
      slug: 'demo',
      domain: 'demo.localhost',
      active: true,
      planId: 'plan_basic',
      subscriptionStatus: 'active',
    },
  });

  console.log('Created tenant:', tenant);

  // Create a demo user
  const user = await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: {
      email: 'demo@example.com',
      name: 'Demo User',
      tenantId: tenant.id,
      role: 'admin',
      active: true,
    },
  });

  console.log('Created user:', user);

  // Create an audit log entry
  const auditLog = await prisma.auditLog.create({
    data: {
      tenantId: tenant.id,
      userId: user.id,
      action: 'user.created',
      entity: 'User',
      entityId: user.id,
      metadata: {
        email: user.email,
        name: user.name,
      },
    },
  });

  console.log('Created audit log:', auditLog);

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
