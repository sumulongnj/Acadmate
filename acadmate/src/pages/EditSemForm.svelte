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
    <h3 style="color: #ac4949">Edit Semester</h3>
    <div>
    <input type="text" placeholder="Year" bind:value={year}>
    <button>Edit</button>
    <div>
      <button on:click|preventDefault={() => name = "1st Semester"} class:selected={name === "1st Semester"}>1st</button>
      <button on:click|preventDefault={() => name = "2nd Semester"} class:selected={name === "2nd Semester"}>2nd</button>
      <button on:click|preventDefault={() => name = "Midyear"} class:selected={name === "Midyear"}>Midyear</button>
    </div>
    </div>
  </form>
  
<style>
  .selected {
    background-color: #ac4949;
    color: white;
  }
  input {
    width: 160px;
  }
</style>