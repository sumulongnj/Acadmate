<script>
    export let semYear;
    export let semName;
    export let showSemester = false;
</script>

<main>
    {#if showSemester}
        <div class="Title">
            <h2>{semYear} {semName} Page</h2>
            
        </div>
    {/if}
</main>

<style>

</style>