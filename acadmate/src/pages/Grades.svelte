<script>
    import Semester from "./my-curriculum/Semester.svelte";

    // OverallGWA
    if (localStorage.getItem("OverallGWA") == null) {
        localStorage.setItem("OverallGWA", "0.00");
    }
    let overallGWA = parseFloat(localStorage.getItem("OverallGWA")).toFixed(4);
    if (isNaN(overallGWA)){
        overallGWA = (0.0).toFixed(4);
    }

    let SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
    
    // SemesterYears
    let SemesterYears = new Set([]);
    for (let i=0; i<SemesterList.length; i++) {
        SemesterYears.add(SemesterList[i].year);
    }
    SemesterYears = Array.from(SemesterYears).sort();
    console.log(SemesterYears);

</script>

<main>
    <div class="Title">
        <h2>Grades</h2>
    </div>
    <div class="GWA">
        <div style="background-color: #e28f60; color: #ffffff">
            <p class="titleGWA">Overall GWA</p>
            <p class="numberGWA" id="overallGWA">{overallGWA}</p>
        </div>
        <div style="background-color: #ffd9c3; color: #9b5f3d">
            <p class="titleGWA">Max. Attainable GWA</p>
            <p class="numberGWA" id="maxGWA">1.41</p>
        </div>
    </div>
    <!-- Need to link Academic Statuses later on -->
    <div class="academicStatus">
        <h3>Academic Status</h3>
        <p>On track for</p>
        <ul id="onTrackFor">
            <li class="latin">Cum Laude</li>
            <li class="scholar">College Scholar</li>
        </ul>
        <p>Can still attain</p>
        <ul id="canStillAttain">
            <li class="latin">Summa Cum Laude</li>
            <li class="latin">Magna Cum Laude</li>
            <li class="scholar">University Scholar</li>
        </ul>
    </div>
    <div class="semestralGrades">
        <h3>Semestral Grades</h3>
        <label for="year">Academic Year&nbsp</label>
        <select name="year" id="year" onchange="yearHandler(this.value)">
            {#each SemesterYears as year}
                <option value={year}>{year}</option>
            {/each}
        </select>
        <label for="semester"> &nbsp &nbsp Semester&nbsp</label>
        <select name="semester" id="semester" onchange="semesterHandler(this.value)">
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="Midyear">Midyear</option>
        </select>
        <table>
            <tr>
                <th>Class</th>
                <th>Status</th>
                <th>Units</th>
                <th>Grade</th>
                <th>Target Grade</th>
            </tr>
            <tr>
                <td>CS 191</td>
                <td>65%</td>
                <td>3.0</td>
                <td>1.00</td>
                <td>1.00</td>
            </tr>
            <tr>
                <td>CS 138</td>
                <td>57%</td>
                <td>3.0</td>
                <td>2.25</td>
                <td>1.25</td>               
            </tr>
            <tr>
                <td>CS 165</td>
                <td>89%</td>
                <td>4.0</td>
                <td>1.25</td>
                <td>1.00</td>               
            </tr>
            <tr>
                <td>CS 140</td>
                <td>89%</td>
                <td>4.0</td>
                <td>1.75</td>
                <td>1.25</td>               
            </tr>
            <tr>
                <td>CS 150</td>
                <td>89%</td>
                <td>3.0</td>
                <td>2.75</td>
                <td>2.75</td>               
            </tr>
            <tr>
                <td>CS 133</td>
                <td>100%</td>
                <td>3.0</td>
                <td>1.25</td>
                <td>1.25</td>               
            </tr>
            <tr id="lastRow">
                <td></td>
                <td>83%</td>
                <td>20.0</td>
                <td>1.71</td>
                <td>1.45</td>               
            </tr>
        </table>
    </div>

    <!-- <script>
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
            if (i == onTrackFor.length - 1) {
                document.getElementById("onTrackFor").innerHTML += "<li class='status'>" + onTrackFor[i] + "</li>";
            }
            document.getElementById("onTrackFor").innerHTML += "<li class='status' style='float: left;'>" + onTrackFor[i] + "</li>";
        }
    </script> -->
    <script>
        function yearHandler(value) {
            console.log(value);
        }
        function semesterHandler(value) {
            console.log(value);
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
        height: 230px;
        width: 770px;
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
        float: left;
    }
    .academicStatus ul {
        list-style-type: none;
    }
    .academicStatus li {
        display: inline-block;
        height: 50px;
		border-radius: 20px;
        margin: 7px;
        padding: 0px 15px;
        box-shadow: 0px 4px 7px lightgray;
        text-decoration: none;
        text-align: center;
        line-height: 50px;
        color: white;
        font-weight: bold;
        font-size: 17px;
    }
    .latin {
        background-color: #e28f60;
    }
    .scholar {
        background-color: #898989;
    }

    /* Semestral Grades Table */
    .semestralGrades {
        position: absolute;
        overflow: auto;
        top: 400px;
	    left: 265px;
        text-decoration: none;
    }
    .semestralGrades h3 {
        font-weight: bold;
        margin: 20px;
        display: inline-block;
    }
    .semestralGrades label {
        display: inline-block;
    }
    .semestralGrades select {
        background-color: white;
        border: none;
        box-shadow: 0px 4px 7px lightgray;
        font-size: 17px;
        text-align: center;
    }
    table {
        margin: 20px;
    }
    .semestralGrades td {
        height: 20px;
        width: 180px;
        padding: 10px;
        background-color: #ffd9c3;
        text-decoration: none;
        text-align: center;
        line-height: 20px;
        font-size: 20px;
    }
    .semestralGrades th {
        height: 20px;
        width: 190px;
        padding: 10px;
        background-color: #ac4949;
        text-decoration: none;
        text-align: center;
        color: white;
        line-height: 20px;
        font-size: 20px;
        font-weight: 600;
    }
    #lastRow td {
        background-color: #e28f60;
        color: white;
        font-weight: 600;
    }
</style>