import type { PrismaClient } from '../../../generated/client/index.d.ts';
import * as Prisma from '../../../generated/client/index.cjs';

export const prisma: PrismaClient = new Prisma.PrismaClient({
    log: ['query', 'warn', 'error'],
});

export default prisma;
