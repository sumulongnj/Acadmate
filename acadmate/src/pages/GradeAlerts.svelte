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
        <div class="alert">
            {#if semester["underload"]}
                <p>Warning: {semester["year"]} {semester["name"]} is underloaded!</p>
            {:else if semester["overload"]}
                <p>Warning: {semester["year"]} {semester["name"]} is overloaded!</p>
            {/if}
        </div>
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
        font-size: 15px;
        color: #b25656;
    }

    .alert {
        display: block;
        background-color: white;
		text-decoration: none;
		border-radius: 20px;
        box-shadow: 0px 4px 7px lightgray;
        width: calc(100vw - 400px);
    }
    .alert p {
        margin: 10px 10px;
        padding: 20px 5px;
    }

</style>