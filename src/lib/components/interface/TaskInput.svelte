<script>
   //@ts-nocheck
   import { createEventDispatcher } from "svelte";

   export let placeholder;
   export let disabled;

   let dispatch = createEventDispatcher();

   function focus(input) {
      input.focus();
   }

   function dispatchTask(task) {
      dispatch('create', task);
      document.getElementById("taskName").value = "";
   }
</script>

<form class="input" on:submit|preventDefault={(e) => dispatchTask(e.target)}>
   <nav>
      <input
         id="taskName"
         type="text"
         name="task"
         {placeholder}
         {disabled}
         use:focus
      />
      <button type="submit" hidden={true} />
   </nav>
</form>

<style>
   .input {
		position: sticky;
		bottom: 0;
      margin-top: 1rem;
	}
</style>