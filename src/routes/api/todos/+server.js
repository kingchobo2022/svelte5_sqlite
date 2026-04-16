import { json } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

// 전체 조회, findMany()
export async function GET() {
    const todos = await prisma.todo.findMany({
        orderBy: { createdAt: 'desc' }
    });
    return json(todos);
}

// 새로운 할 일 추가
export async function  POST({ request }) {
    const { title } = await request.json();
    const todo = await prisma.todo.create( { data: {title} });  
    return json(todo, { status: 201 });  
}

