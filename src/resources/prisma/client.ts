import { PrismaClient } from '../../../generated/client/deno/edge.ts';

export let prismaClient: PrismaClient | undefined;

export function prisma() {
    if (prismaClient) return prismaClient;
    prismaClient = new PrismaClient({
        log: ['query', 'warn', 'error'],
    });
    return prismaClient;
}
