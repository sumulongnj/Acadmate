<script>
    import { createEventDispatcher } from "svelte";
    export let newid;
    let dispatch = createEventDispatcher();
    let name;
    let classGWA;
    const handleSubmit = () => {
        const Class = {
            id: newid,
            name,
            classGWA,
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
    <input type="text" placeholder="GWA" bind:value={classGWA}>
    <button>Add</button>
</form>

<style>
    
</style>