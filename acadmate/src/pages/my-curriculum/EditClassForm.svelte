<script>
    import { createEventDispatcher } from "svelte";
    
    export let sub;
  
    const dispatch = createEventDispatcher();
  
    let units = sub.units;
    let name = sub.name;
    let finalGrade = sub.finalGrade;
    let gradeOptions = ["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00", "4.00", "5.00", "DRP", "INC", "0.00"];
    
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
    <label>
      Final Grade:
      <select bind:value={finalGrade}>
        {#each gradeOptions as grade}
          <option value={grade}>{grade}</option>
        {/each}
      </select>
    </label>
    <button>Edit</button>
</form>

<style>
    .block {
        width: 115px;
    }
</style>