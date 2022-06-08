const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.missionCommander.upsert({
      where: { id: 0 },
      update: {},
      create: {
        name: 'Woopa 0',
        username: 'Woopa0',
				mainStack: 'Java',
				currentEnrollment: false,        
        hasAzureCertification: true
      },
    });

    const woopa1 = await prisma.missionCommander.upsert({
       where: { id: 0 },
      update: {},
      create: {
        name: 'Woopa 1',
        username: 'Woopa1',
				mainStack: 'Node',
				currentEnrollment: false,        
        hasAzureCertification: true
      },
    });

    const woopa2 = await prisma.missionCommander.upsert({
      where: { id: 0 },
      update: {},
      create: {
        name: 'Woopa 2',
        username: 'Woopa2',
				mainStack: 'Erlang',
				currentEnrollment: false,        
        hasAzureCertification: true
      },
    });

    const woopa3 = await prisma.missionCommander.upsert({
      where: { id: 0 },
      update: {},
      create: {
        name: 'Woopa 3',
        username: 'Woopa3',
				mainStack: 'DotNet',
				currentEnrollment: false,        
        hasAzureCertification: true
      },
    });

    console.log('Create 5 missionComanders');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();