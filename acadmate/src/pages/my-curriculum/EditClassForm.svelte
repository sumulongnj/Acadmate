<script>
    import { createEventDispatcher } from "svelte";
    
    export let sub;
  
    const dispatch = createEventDispatcher();
  
    let units = sub.units;
    let name = sub.name;
    let finalGrade = sub.finalGrade;
  
    const handleSubmit = () => {
      const updatedClass = {
        ...sub,
        name,
        units,
        finalGrade
      };
  
      dispatch("editClass", updatedClass);
    };
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <h3 style="color: #ac4949">Edit Class</h3>
    <input type="text" placeholder="Class" bind:value={name}>
    <input type="text" class="block" placeholder="Units" bind:value={units}>
    <input type="text" class="block" placeholder="Final Grade" bind:value={finalGrade}>
    <button>Edit</button>
</form>

<style>
    .block {
        width: 115px;
    }
</style>