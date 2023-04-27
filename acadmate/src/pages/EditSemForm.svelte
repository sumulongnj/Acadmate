<script>
    import { createEventDispatcher } from "svelte";
    
    export let semester;
  
    const dispatch = createEventDispatcher();
  
    let year = semester.year;
    let name = semester.name;
  
    const handleSubmit = () => {
      const updatedSemester = {
        ...semester,
        year,
        name,
      };
  
      dispatch("editSemester", updatedSemester);
    };
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <div style="color: #ac4949; font-size: 25px;">
      <h3>Edit Semester</h3>
    </div>
    <input type="text" placeholder="Year" bind:value={year}>
    <input type="text" placeholder="Semester" bind:value={name}>
    <button type="submit">Edit</button>
  </form>
  
<style>
    
</style>