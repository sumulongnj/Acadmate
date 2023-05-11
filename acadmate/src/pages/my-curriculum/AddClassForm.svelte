<script>
    import { createEventDispatcher } from "svelte";
    export let newid;
    let dispatch = createEventDispatcher();
    let name;
    let finalGrade;
    let units;
    let isCredited = true;
    let gradeOptions = ["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00", "4.00", "5.00", "DRP", "INC", "0.00"];
    
    const handleSubmit = () => {
        const Class = {
            id: newid,
            name,
            finalGrade,
            units,
            isCredited,
        }
        dispatch('addClass', Class);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <h3 style="color: #ac4949">New Class</h3>
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
    <button>Add</button>
    <input type="checkbox" class="check" bind:checked={isCredited}> 
</form>

<style>
    .class {
        width: 120px;
    }
    .units {
        width: 90px;
    }
    .check {
        width: 15px;
        height: 15px;
        accent-color: #ac4949;
        float: right;
    }
</style>