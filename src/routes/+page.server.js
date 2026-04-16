import { prisma } from '$lib/server/prisma';

export async function load() {
    const todos = await prisma.todo.findMany({
        orderBy: { createdAt: 'desc' }
    });
    return { todos };
}

