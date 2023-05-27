<script>
  import { createEventDispatcher } from "svelte";
  export let newid;
  let dispatch = createEventDispatcher();
  let year;
  let name;
  const handleSubmit = () => {
    const semester = {
      id: newid,
      name,
      year,
      gwa: 0.00,
      units: 0,
      classList: [],
      // underload: true,
      // overload: false,
      load: 0.0
    };
    dispatch('addSemester', semester);
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <h3 style="color: #ac4949">New Semester</h3>
  <div>
  <input type="text" placeholder="Year" bind:value={year}>
  <button>Add</button>
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
