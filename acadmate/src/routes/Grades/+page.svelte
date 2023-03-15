
<main>
    <div class="title">
        <h1>Grades</h1>
    </div>
    <div class="GWA">
        <div style="background-color: #e28f60; color: #ffffff">
            <p class="titleGWA">Overall GWA</p>
            <p class="numberGWA" id="overallGWA"></p>
        </div>
        <div style="background-color: #ffd9c3; color: #9b5f3d">
            <p class="titleGWA">Max. Attainable GWA</p>
            <p class="numberGWA" id="maxGWA"></p>
        </div>
    </div>
    <div class="academicStatus">
        <h3>Academic Status</h3>
        <p>On track for</p>
        <ol id="onTrackFor"></ol>
        <p>Can still attain</p>
    </div>

    <script>
        let overallGWA = 1.00; // change later on
        let maxGWA = 1.00; // change later on
        overallGWA = overallGWA.toFixed(2);
        maxGWA = maxGWA.toFixed(2);
        document.getElementById("overallGWA").innerHTML = overallGWA;
        document.getElementById("maxGWA").innerHTML = maxGWA;
        
        let onTrackFor = [];
        let canStillAttain = [];
        if (overallGWA < 1.25) {
            onTrackFor[onTrackFor.length] = "Summa Cum Laude";
            onTrackFor[onTrackFor.length] = "Magna Cum Laude";
            onTrackFor[onTrackFor.length] = "Cum Laude";
        }
        for (var i=0; i<onTrackFor.length; i++) {
            document.getElementById("onTrackFor").innerHTML += "<li>" + onTrackFor[i] + "</li>";
        }
    </script>
</main>



<style>
    /* GWA */
    .GWA {
        position: absolute;
        top: 130px;
	    left: 265px;
    }
    .GWA div {
        display: block;
        height: 50px;
        width: 300px;
		text-decoration: none;
		border-radius: 20px;
        margin: 10px;
        box-shadow: 0px 4px 7px lightgray;
    }
    .GWA p {
        margin: 12px;
        font-size: 18px;
    }
    .titleGWA {
        float: left;
    }
    .numberGWA {
        float: right;
        font-weight: bold;
    }

    /* Academic Status */
    .academicStatus {
        position: absolute;
        height: 200px;
        width: 800px;
        overflow: auto;
        top: 130px;
	    left: 600px;
        background-color: #ffffff;
        text-decoration: none;
		border-radius: 20px;
        margin: 10px;
        box-shadow: 0px 4px 7px lightgray;
    }
    .academicStatus h3 {
        font-weight: bold;
        margin: 20px;
    }
    .academicStatus p {
        margin: 20px;
    }
</style>