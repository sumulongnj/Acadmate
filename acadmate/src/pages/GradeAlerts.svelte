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
    <div class="alertTitle">  
        <h3>Underloading/Overloading</h3>
    </div>
    {#each SemesterList as semester}
        {#if semester["underload"]}
            <h3>Warning: {semester["year"]} {semester["name"]} is underloaded!<br></h3>
        {:else if semester["overload"]}
            <h3>Warning: {semester["year"]} {semester["name"]} is overloaded!<br></h3>
        {/if}
       
    {/each}
    </div>
</main>


<style>
    .alertTitle {
        background-color: #fce4e4;
        display: inline-block;
		border-radius: 20px;
    }
    .alertTitle h3 {
        margin: 5px 18px;
        font-weight: normal;
        color: #b25656;
    }
</style>