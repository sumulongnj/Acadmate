<script>
    import { createEventDispatcher } from "svelte"; 
    let dispatch = createEventDispatcher();

    const handleSubmit = (e) => {
        dispatch('exitInstructions');
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div style="color: #ac4949">
        <h3>Instructions</h3>
    </div>
    <button>Done</button>
</form>

<style>
    form {
        height: 100vh;
    }

    h3 {
        color: #ac4949;
    }
</style>