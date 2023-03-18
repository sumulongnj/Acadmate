<script>
    import { createEventDispatcher } from "svelte";
    export let newid;

    let dispatch = createEventDispatcher();
    let year;
    let name;

    const handleSubmit = () => {
        console.log(year, name, newid);
        const semester = {
            year,
            name, 
            id: newid 
        }
        dispatch('addSemester', semester);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <h3>New Semester</h3>
    <input type="number" placeholder="Year" bind:value={year}>
    <input type="text" placeholder="Semester" bind:value={name}>
    <button>Add</button>

</form>

<style>

</style>