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
    <div style="color: #ac4949; font-size: 25px;">
        <h3>New Class</h3>
    </div>
    <input type="text" placeholder="Class" bind:value={name}>
    <input type="text" placeholder="Units" bind:value={units}>
    <input type="text" placeholder="Final Grade" bind:value={finalGrade}>
    <button>Add</button>
</form>

<style>
    
</style>