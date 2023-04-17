<script>
    import { createEventDispatcher } from "svelte"; 
    let dispatch = createEventDispatcher();

    const handleSubmit = (e, semDelID) => {
        dispatch('deleteSemester', '{}', semDelID);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div style="color: #ac4949">
        <h3>Delete Semester?</h3>
    </div>
    <button>Continue</button>
</form>

<style>
</style>