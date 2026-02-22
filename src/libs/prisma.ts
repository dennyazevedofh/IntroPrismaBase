import { PrismaClient } from '@prisma/client';

// depois de explicar o problema das conexões e ajustar o código
// antes disso usar apenas a linha comentada abaixo.
// export const prisma = new PrismaClient();

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
