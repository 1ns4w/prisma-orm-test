import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
    const user = await prisma.test.create({
        data: {
        },
    })
}

main().catch((e) => {
    console.error(e)
}).finally(async () => {
    await prisma.$disconnect()
})