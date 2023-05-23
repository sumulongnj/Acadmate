<script>
    import { createEventDispatcher } from "svelte";
    
    export let sub;
  
    const dispatch = createEventDispatcher();
  
    let units = sub.units;
    let name = sub.name;
    let finalGrade = sub.finalGrade;
    let isCredited = sub.isCredited;
    let gradeOptions = ["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00", "4.00", "5.00", "DRP", "INC", "0.00"];
    const handleSubmit = () => {
      const updatedClass = {
        ...sub,
        name,
        units,
        finalGrade,
        isCredited
      };
  
      dispatch("editClass", updatedClass);
    };
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <h3 style="color: #ac4949">Edit Class</h3>
    <input type="text" class="class" placeholder="Class" bind:value={name}>
    <input type="text" class="units" placeholder="Units" bind:value={units}>
    <label>
      Final Grade:
      <select bind:value={finalGrade}>
        {#each gradeOptions as grade}
          <option value={grade}>{grade}</option>
        {/each}
      </select>
    </label>    
    <button>Edit</button>
    <input type="checkbox" class="check" bind:checked={isCredited}> <span class="credit"> Credit </span> 
</form>

<style>
    .class {
        width: 120px;
    }
    .units {
        width: 90px;
    }
    .check {
        width: 18px;
        height: 18px;
        accent-color: #ac4949;
        margin-top: 5px;
        float: right;
    }
    .credit {
      float: right;
      padding-top: 6px;
      padding-right: 0.5em;
      font-size: 12px;
      font-weight: 600;
      color:#ac4949;
    }
</style>