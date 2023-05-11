<script>
	// @ts-nocheck

   import { createEventDispatcher } from 'svelte';
   import Fa from 'svelte-fa';
   import { faTrash } from '@fortawesome/free-solid-svg-icons';

	export let title;
	export let tasks;
   export let clearable;

	let dispatch = createEventDispatcher();

	function emitTaskStatus(task, status) {
		dispatch('toggle', { task, completed: status });
	}

   function emitClear() {
      dispatch('clear', {tasks});
   }
</script>

{#if tasks}
   <nav>
      <ul>
         <li class="heading">
            {title ? title : ''}
         </li>
      </ul>
   </nav>
	<section class="tasks">
		<ul>
			{#each tasks as task}
				<label 
            class={task.completed ? 'completed' : ''} 
            for={task.id} checked={task.completed} 
            on:keydown={e => emitTaskStatus(task, !task.completed)}
            on:click={e => emitTaskStatus(task, !task.completed)}>
					<input
						type="checkbox"
						name={task.id}
						value={task.completed}
						on:change={(e) => emitTaskStatus(task, !task.completed)}
						bind:checked={task.completed}
					/>
					{task.name}
				</label>
			{/each}
		</ul>
	</section>
   <button class="danger outline" on:click={emitClear} hidden={!clearable}>
      <Fa icon={faTrash} /> Clear Completed
   </button>
{/if}

<style>
	li.heading {
		color: var(--secondary);
      margin-top: 0;
      margin-bottom: 1rem;
	}

   button.danger {
      color: var(--danger);
      border: thin solid var(--danger);
   }

   button.danger:hover {
      color: var(--secondary);
      border-color: var(--secondary)
   }

   .tasks ul {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      text-transform: capitalize;
   }

   .tasks label {
      font-size: x-large;
      padding-bottom: 1em;
      animation: slide-left 0.5s;
   }

   .tasks label:hover {
      cursor: pointer;
   }

	.completed {
		color: var(--secondary);
		text-decoration: line-through;
      font-style: italic;
	}
</style>
