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
        }
        dispatch('addSemester', semester);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div style="color: #ac4949; font-size: 25px;">
        <h3>New Semester</h3>
    </div>
    <input type="text" placeholder="Year" bind:value={year}>
    <input type="text" placeholder="Semester" bind:value={name}>
    <button>Add</button>
</form>

<style>
    
</style>