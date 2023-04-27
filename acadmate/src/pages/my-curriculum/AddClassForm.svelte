<script>
    import { createEventDispatcher } from "svelte";
    export let newid;
    let dispatch = createEventDispatcher();
    let name;
    let finalGrade;
    let units;
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
    <input type="text" class="block" placeholder="Final Grade" bind:value={finalGrade}>
    <button>Add</button>
</form>

<style>
    .block {
        width: 115px;
    }
</style>