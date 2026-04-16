import 'dotenv/config';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '@prisma/client';

const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL || 'file:./dev.db',
});

const prisma = globalThis.__prisma || new PrismaClient( { adapter });

if (process.env.NODE_ENV !== 'production') {
    globalThis.__prisma = prisma;
}

export { prisma };
