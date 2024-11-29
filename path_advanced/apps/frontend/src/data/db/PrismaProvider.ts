import { safeError } from '@/lib/utils'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function PrismaProvider<T>(
    statement: (prisma: PrismaClient) => Promise<T>
): Promise<T | null> {
    try {
        await prisma.$connect()
        return await statement(prisma)
    } catch (e: any) {
        safeError(e)
        return null
    } finally {
        try {
            await prisma.$disconnect()
        } catch (e: any) {
            safeError(e)
        }
    }
}
