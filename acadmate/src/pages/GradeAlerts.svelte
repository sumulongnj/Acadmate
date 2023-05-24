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
                <p style="display: inline-block; margin-left: 30px;">
                    <span class="bellSpan">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill=white class="bi bi-bell-fill" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                        </svg>
                    </span>
                </p>
                <p>{semester["year"]} {semester["name"]} is underloaded!</p>
            {:else if semester["overload"]}
                <p style="display: inline-block; margin-left: 30px;">
                    <span class="bellSpan">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill=white class="bi bi-bell-fill" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                        </svg>
                    </span>
                </p>
                <p>{semester["year"]} {semester["name"]} is overloaded!</p>
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
        display: flex;
        align-items: center;
        background-color: white;
		text-decoration: none;
		border-radius: 20px;
        box-shadow: 0px 4px 7px lightgray;
        width: calc(100vw - 400px);
        margin: 15px 0px;
    }
    .alert p {
        display: inline-block;
        margin: 10px 0px;
        padding: 10px 5px;
        font-weight: 500;
    }

    .bellSpan {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #e48c64;
        margin-right: 8px;
    }

</style>