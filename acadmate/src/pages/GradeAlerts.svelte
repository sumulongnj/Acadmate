<script>
    let SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
    for (let i = 0; i < SemesterList.length; i++) {
    let element = SemesterList[i];
    // Do something with each element
    if (SemesterList[i]["name"] == "Midyear"){
        SemesterList[i]["underload"] = false;
    }
    console.log(element);
    }
    localStorage.setItem("SemesterList", JSON.stringify(SemesterList));
</script>
<main>
    <div class="Title">
        <h2>Grade Alerts</h2>
        <!-- <a href="/">Go to Dashboard</a> -->
    
    {#each SemesterList as semester}
        {#if semester["underload"]}
            <h3>Warning: {semester["year"]} {semester["name"]} is underload!<br></h3>
        {:else if semester["overload"]}
            <h3>Warning: {semester["year"]} {semester["name"]} is overload!<br></h3>
        {/if}
       
    {/each}
    </div>
</main>


<style>

</style>