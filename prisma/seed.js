const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// (async function main() {
//   try {
//     const woopa = await prisma.explorer.upsert({
//       where: { name: 'Woopa' },
//       update: {},
//       create: {
//         name: 'Woopa',
// 				username: 'ajolonauta',
// 				mission: 'Node'
//       },
//     });

//     const woopa1 = await prisma.explorer.upsert({
//       where: { name: 'Woopa1' },
//       update: {},
//       create: {
//         name: 'Woopa1',
// 				username: 'ajolonauta1',
// 				mission: 'Node'
//       },
//     });

//     const woopa2 = await prisma.explorer.upsert({
//       where: { name: 'Woopa 2' },
//       update: {},
//       create: {
//         name: 'Woopa 2',
// 				username: 'ajolonauta2',
// 				mission: 'Java'
//       },
//     });

//     const woopa3 = await prisma.explorer.upsert({
//       where: { name: 'Woopa 3' },
//       update: {},
//       create: {
//         name: 'Woopa 3',
// 				username: 'ajolonauta3',
// 				mission: 'Node'
//       },
//     });

//     console.log('Create 3 explorers');
//   } catch(e) {
//     console.error(e);
//     process.exit(1);
//   } finally {
//     await prisma.$disconnect();
//   }
// })();

(async function main() {
  try {
    const woopa = await prisma.AdvancedExplorer.upsert({
      where: { id: 0 },
      update: {},
      create: {
        name: 'Woopa',
				lang: 'Test',
				missionCommander: 'CarloGilmar',
        enrollments: 0,
        hasCertifications: true
      },
    });

    const woopa1 = await prisma.advancedExplorer.upsert({
      where: { id: 0 },
      update: {},
      create: {
        name: 'Woopa1',
				lang: 'Python',
				missionCommander: 'CarloGilmar',
        enrollments: 1,
        hasCertifications: true
      },
    });

    const woopa2 = await prisma.advancedExplorer.upsert({
      where: { id: 0 },
      update: {},
      create: {
        name: 'Woopa 2',
				lang: 'Java',
				missionCommander: 'CarloGilmar',
        enrollments: 2,
        hasCertifications: true
      },
    });

    const woopa3 = await prisma.advancedExplorer.upsert({
      where: { id: 0 },
      update: {},
      create: {
        name: 'Woopa 3',
				lang: 'C#',
				missionCommander: 'CarloGilmar',
        enrollments: 3,
        hasCertifications: true
      },
    });

    console.log('Create 1 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();