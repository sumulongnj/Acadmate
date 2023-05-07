<script>
    import { createEventDispatcher } from "svelte";
    export let newid;
    let dispatch = createEventDispatcher();
    let name;
    let finalGrade;
    let units;
    let gradeOptions = ["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00", "4.00", "5.00", "DRP", "INC", "0.00"];
    
    const handleSubmit = () => {
        const Class = {
            id: newid,
            name,
            finalGrade,
            units,
            assessmentList: [],
        }
        dispatch('addClass', Class);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <h3 style="color: #ac4949">New Class</h3>
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
    <button>Add</button>
</form>

<style>
    .block {
        width: 115px;
    }
</style>