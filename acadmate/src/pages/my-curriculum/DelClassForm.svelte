<script>
    import { createEventDispatcher } from "svelte"; 
    let dispatch = createEventDispatcher();

    const handleSubmit = (e, classDelID) => {
        dispatch('deleteClass', '{}', classDelID);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div style="color: #ac4949">
        <h3>Delete Class?</h3>
    </div>
    <button>Continue</button>
</form>

<style>
</style>