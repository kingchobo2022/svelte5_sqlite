<script>
    import { invalidateAll } from "$app/navigation";

    let { data } = $props();
    let newTitle = $state('');

    async function addTodo() {

        if(!newTitle.trim()) return;

        const res = await fetch('/api/todos', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({ title: newTitle })
        });
        
        if(res.ok) {
            newTitle = '';
            await invalidateAll();
        }
    }
</script>

<h1>Todo List</h1>
<input bind:value={newTitle} placeholder="할 일 입력..." />
<button onclick={addTodo}>추가</button>

<ul>
    {#each data.todos as todo}
    <li>{todo.title} - {todo.done ? '완료' : '미완료'}</li>
    {/each}
</ul>