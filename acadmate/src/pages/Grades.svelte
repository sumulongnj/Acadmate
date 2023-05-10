<script>
    // OverallGWA
    if (localStorage.getItem("OverallGWA") == null) {
        localStorage.setItem("OverallGWA", "0.00");
    }
    let overallGWA = parseFloat(localStorage.getItem("OverallGWA")).toFixed(4);
    if (isNaN(overallGWA)){
        overallGWA = (0.0).toFixed(4);
    }

    // MaxGWA
    if (localStorage.getItem("MaxGWA") == null) {
        localStorage.setItem("MaxGWA", "0.00");
    }
    let maxGWA = parseFloat(localStorage.getItem("MaxGWA")).toFixed(4);
    if (isNaN(maxGWA)){
        maxGWA = (0.0).toFixed(4);
    }

    // CurrLatinStatus
    if (localStorage.getItem("CurrLatinStatus") == null) {
        localStorage.setItem("CurrLatinStatus", "-");
    }
    let currLatinStatus = JSON.parse(localStorage.getItem("CurrLatinStatus"));

    // CurrScholarStatus
    if (localStorage.getItem("CurrScholarStatus") == null) {
        localStorage.setItem("CurrScholarStatus", "-");
    }
    let currScholarStatus = JSON.parse(localStorage.getItem("CurrScholarStatus"));

    // MaxLatinStatus
    if (localStorage.getItem("MaxLatinStatus") == null) {
        localStorage.setItem("MaxLatinStatus", "-");
    }
    let maxLatinStatus = JSON.parse(localStorage.getItem("MaxLatinStatus"));

    // MaxScholarStatus
    if (localStorage.getItem("MaxScholarStatus") == null) {
        localStorage.setItem("MaxScholarStatus", "-");
    }
    let maxScholarStatus = JSON.parse(localStorage.getItem("MaxScholarStatus"));

    let SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
    console.log(SemesterList[0])
    // SemesterYears
    let SemesterYears = new Set([]);
    for (let i=0; i<SemesterList.length; i++) {
        SemesterYears.add(SemesterList[i].year);
    }
    SemesterYears = Array.from(SemesterYears).sort();
    if (localStorage.getItem("SelectedYear") == null) {
        localStorage.setItem("SelectedYear", JSON.stringify(SemesterYears[0]));
    }
    let selectedYear = localStorage.getItem("SelectedYear");

    let SemesterNames = getSemesterNames(selectedYear);
    if (localStorage.getItem("SelectedName") == null) {
        localStorage.setItem("SelectedName", JSON.stringify(SemesterNames[0]));
    }
    let selectedSemester = localStorage.getItem("SelectedName");
    
    function getSemesterNames(year) {
        let SemesterNames = new Set([]);
        SemesterList.forEach((semester) => {
            if (semester.year === year) {
                SemesterNames.add(semester.name);
            }
        });
        
        console.log(year, SemesterNames);
        return Array.from(SemesterNames).sort();
    }

    function yearHandler() {
        SemesterNames = getSemesterNames(selectedYear);
        selectedSemester = SemesterNames[0];
        searchSemester(selectedYear, selectedSemester);
    }
    function semesterHandler() {
        searchSemester(selectedYear, selectedSemester);
    }
    function searchSemester(searchYear, searchSemester) {
        let result = SemesterList.filter(function(semester) {
            return semester.name === searchSemester && semester.year === searchYear;
        });
        updateTable(result[0]);
    }
    function updateTable(semester) {
        console.log(semester);
        if (typeof semester === 'undefined'){
            return;
        }
        let classList = semester["classList"];
        console.log(classList)
        let gradesTable = document.getElementById("gradesTable");
        gradesTable.innerHTML = "<thead><tr><th>Class</th><th>Status</th><th>Units</th><th>Grade</th><th>Target Grade</th></tr></thead>";
        for (let i=0; i<classList.length; i++) {
            let row = gradesTable.insertRow(-1);
            let name = row.insertCell(0);
            let status = row.insertCell(1);
            let units = row.insertCell(2);
            let grade = row.insertCell(3);
            let targetGrade = row.insertCell(4);
            name.innerHTML = classList[i].name;
            grade.innerHTML = classList[i].finalGrade;
            units.innerHTML = classList[i].units;
        }
        let row = gradesTable.insertRow(-1);
        row.setAttribute("id", "lastRow");
        let name = row.insertCell(0);
        let status = row.insertCell(1);
        let units = row.insertCell(2);
        let grade = row.insertCell(3);
        let targetGrade = row.insertCell(4);
        units.innerHTML = semester.units.toFixed(2);
        grade.innerHTML = semester.gwa.toFixed(2);
    }

    window.onload = function() {
        yearHandler();
        let onTrackForList = document.getElementById("onTrackFor");
        let canStillAttainList = document.getElementById("canStillAttain");
        // location.reload();
    }
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
            <p class="numberGWA" id="maxGWA">{maxGWA}</p>
        </div>
    </div>
    <!-- Need to link Academic Statuses later on -->
    <div class="academicStatus">
        <h3>Academic Status</h3>
        <div>
            <p>On track for</p>
            <ul id="onTrackFor">
                <li class="latin">{currLatinStatus}</li>
                <li class="scholar">{currScholarStatus}</li>
            </ul>
            <span class="clear"></span>
        </div>
        <div>
            <p>Can still attain</p>
            <ul id="canStillAttain">
                <li class="latin">{maxLatinStatus}</li>
                <li class="scholar">{maxScholarStatus}</li>
            </ul>
            <span class="clear"></span>
        </div>
        
    </div>
    <div class="semestralGrades">
        <h3>Semestral Grades</h3>
        <label for="year">Academic Year&nbsp</label>
        <select name="year" id="year" bind:value={selectedYear} on:change={yearHandler}>
            {#each SemesterYears as year}
                <option value={year}>{year}</option>
            {/each}
        </select>
        <label for="semester"> &nbsp &nbsp Semester&nbsp</label>
        <select name="semester" id="semester" bind:value={selectedSemester} on:change={semesterHandler}>
            {#each SemesterNames as name}
                <option value={name}>{name}</option>
            {/each}
        </select>
        <table id="gradesTable">
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Status</th>
                    <th>Units</th>
                    <th>Grade</th>
                    <th>Target Grade</th>
                </tr>
            </thead>
        </table>
    </div>
    
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
</style>