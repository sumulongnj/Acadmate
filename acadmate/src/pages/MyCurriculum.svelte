<script>
    import Popup from './popup.svelte';
    import AddSemForm from './AddSemForm.svelte';
    import EditSemForm from './EditSemForm.svelte';    
    import DelSemForm from './DelSemForm.svelte';
    import { semIdAllocator} from '../semStores.js';
    let showDelete = false;
    let showEdit = false;
    let showConfirm = false;
    let semDelID = 0;
    let semEditID = 0;
    let index = 0;

    let toggleDelete = () => {
        showDelete = !showDelete;
    };

    let toggleEdit = () => {
        showEdit = !showEdit;
    };

    let toggleConfirm = () => {
        showConfirm = !showConfirm;
    }
    
    if (localStorage.getItem("SemesterList") == null) {
        localStorage.setItem("SemesterList", "[]");
    }

    if (localStorage.getItem("SemID") == null) {
        localStorage.setItem("SemID", "0");
    }

    if (localStorage.getItem("OverallGWA") == null) {
        localStorage.setItem("OverallGWA", "0.00");
    }

    if (localStorage.getItem("TotalOverallUnits") == null) {
        localStorage.setItem("TotalOverallUnits", "0");
    }

    let SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
    let semKey = JSON.parse(localStorage.getItem("SemID"));

    const addSemester = (e) => {
        const newSemester = e.detail;
        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        const index = SemesterList.findIndex(semester => semester.name === newSemester.name && semester.year === newSemester.year);
        if (index === -1 && newSemester.name && newSemester.year) {
            semIdAllocator.increment();
            semKey = JSON.parse(localStorage.getItem("SemID"));
            SemesterList = [...SemesterList, newSemester];
            localStorage.setItem("SemesterList", JSON.stringify(SemesterList));
            showDelete = false;
            location.reload();
        }
    };

    const editSemester = (e, id) => {
        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        const index = SemesterList.findIndex(semester => semester.id === id);
        if (index !== -1) {
            const updatedSemester = e.detail;
            const checkIndex = SemesterList.findIndex(semester => semester.name === updatedSemester.name && semester.year === updatedSemester.year);
            if (checkIndex === -1) {
                SemesterList[index] = {
                    ...SemesterList[index], 
                    name: updatedSemester.name,
                    year: updatedSemester.year
                };
                localStorage.setItem("SemesterList", JSON.stringify(SemesterList));
                showEdit = false;
            }
        }
    };

    const deleteSemester = (e, id) => {
        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        SemesterList = SemesterList.filter(semester => semester.id != id);
        showConfirm = false;
        localStorage.setItem("SemesterList", JSON.stringify(SemesterList));
        computeOverallGWA();
        location.reload();
    };

    let gotoSemester = (e, semesterID) => {
        

        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        let semesterIndex = SemesterList.findIndex(object => {
            return object.id === semesterID;
            });
        localStorage.setItem("CurrentSemesterIndex", JSON.stringify(semesterIndex));
    };
    
    // console.log(SemesterList.length);
    // console.log(SemesterList);
    
    if (SemesterList.length === 0){
        // console.log("true");
        localStorage.setItem("SemID", "0");
        localStorage.setItem("ClassID", "0");
        let classKey = JSON.parse(localStorage.getItem("ClassID"));
        // console.log(classKey);
    }
    let computeMaxGWA = () => {
        let totalOverallUnits = parseFloat(localStorage.getItem("TotalOverallUnits"));
        let overallGWA = parseFloat(localStorage.getItem("OverallGWA")).toFixed(4);
        let remainingOverallUnits = 148 - totalOverallUnits;
        let maxGWA = ((totalOverallUnits * overallGWA) + (remainingOverallUnits * 1.00))/148;

        let latinStatus = "-";
        let scholarStatus = "-";
        if (1.20 >= maxGWA && maxGWA >= 1.00) {
            latinStatus = "Summa Cum Laude";
            scholarStatus = "University Scholar";
        }
        else if (1.45 >= maxGWA && maxGWA >= 1.21) {
            latinStatus = "Magna Cum Laude";
            scholarStatus = "University Scholar";
        }
        else if (1.75 >= maxGWA && maxGWA >= 1.46) {
            latinStatus = "Cum Laude";
            scholarStatus = "College Scholar";
        }

        localStorage.setItem("MaxGWA", JSON.stringify(maxGWA));
        localStorage.setItem("MaxLatinStatus", JSON.stringify(latinStatus));
        localStorage.setItem("MaxScholarStatus", JSON.stringify(scholarStatus));
    }

    let computeOverallGWA = () => {
        let totalOverallUnits = 0;
        let totalGWA = 0;
        for (let i = 0; i < SemesterList.length; i++){
            totalOverallUnits += parseFloat(SemesterList[i]["units"]);
            totalGWA += (parseFloat(SemesterList[i]["gwa"]) * parseFloat(SemesterList[i]["units"]));
        }
        // console.log("OverallGwa", totalGWA / totalOverallUnits);
        // console.log("Units", totalOverallUnits);
        let OverallGWA = totalGWA / totalOverallUnits;
        let latinStatus = "-";
        let scholarStatus = "-";
        if (1.20 >= OverallGWA && OverallGWA >= 1.00) {
            latinStatus = "Summa Cum Laude";
            scholarStatus = "University Scholar";
        }
        else if (1.45 >= OverallGWA && OverallGWA >= 1.21) {
            latinStatus = "Magna Cum Laude";
            scholarStatus = "University Scholar";
        }
        else if (1.75 >= OverallGWA && OverallGWA >= 1.46) {
            latinStatus = "Cum Laude";
            scholarStatus = "College Scholar";
        }
        localStorage.setItem("OverallGWA", JSON.stringify(OverallGWA));
        localStorage.setItem("TotalOverallUnits", JSON.stringify(totalOverallUnits));
        localStorage.setItem("CurrLatinStatus", JSON.stringify(latinStatus));
        localStorage.setItem("CurrScholarStatus", JSON.stringify(scholarStatus));
        computeMaxGWA();
    }

    computeOverallGWA();
    // location.reload();
    let overallGWA = parseFloat(localStorage.getItem("OverallGWA")).toFixed(4);
    let totalOverallUnits = parseFloat(localStorage.getItem("TotalOverallUnits"));
    // overallGWA = parseFloat(localStorage.getItem("OverallGWA")).toFixed(4);
    if (isNaN(overallGWA)){
        // console.log(true);
        overallGWA = (0.0).toFixed(4);
        localStorage.setItem("OverallGWA", overallGWA);
        // location.reload();
    }
    // console.log("OverallGwalol", overallGWA);

    
    
    

</script>

<main>
    <!-- {#if showCurriculum} -->
    <div class="Title">
        <h2>My Curriculum</h2>
        <div class="block"> Overall GWA <br> <h3> {overallGWA} </h3>
            Total Units <br> <h3> {totalOverallUnits} </h3> </div>
    </div>
    
    <div class="AddButton">
        <button on:click={toggleDelete}>
            <strong>+</strong>
        </button>
    </div>
    <div class="SemesterList">
        <ul>
            {#each SemesterList as semester}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="SemesterContainer">
                    <a href = "#/my-curriculum/semester" class="SemesterLink">
                        <div class="SemesterItems" on:click={(e) => {gotoSemester(e, semester.id)}}>
                            <h3>
                                <span class="heading">{semester.year}</span>
                                <span class="subheading"><br/>{semester.name}</span>
                              </h3>
                          </div>
                    </a>
                    <button on:click={() => {toggleEdit(); semEditID = semester.id; index = SemesterList.findIndex(semester => semester.id === semEditID)}}>
                        <img src="./images/edit.png" alt="edit">
                    </button>
                    <button id="deleteBtn" on:click={() => { toggleConfirm(); semDelID = semester.id}}>
                        <img src="./images/trash.png" alt="delete">
                    </button>
                </div>
            {/each}
        </ul>
    </div>
</main>

<Popup {showDelete} on:click={toggleDelete}>
    <AddSemForm on:addSemester={addSemester} newid={semKey}/>
</Popup>

<Popup {showEdit} on:click={toggleEdit}>
    <EditSemForm on:editSemester={updatedSemester => editSemester(updatedSemester, semEditID)} semester={SemesterList[index]} />
</Popup>  

<Popup {showConfirm} on:click={toggleConfirm}>
    <DelSemForm on:deleteSemester={() => {deleteSemester({}, semDelID)}}/>
</Popup>

<!-- <Semester {showSemester} semYear={currentSemYear} semName={currentSemName}></Semester> -->

<style>
    .AddButton{
        position: absolute;
        margin-left: 460px;
        margin-top: 78px;
    }
    .AddButton button {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background-color: #ac4949;
        border: 0px;
        font-size: 30px;
        line-height: 0px;
        display: flex;
        justify-content: center;
        color: #ffe5e5;
        cursor: pointer;
    }
    .SemesterList {
        display: flex;
        flex-direction: row;
        position: absolute;
        margin-left: 225px;
        margin-top: 170px;
    }
    .SemesterList h3 {
        color: #ffffff;
        margin-left: 24px;
        font-weight: 500;
    }
    .SemesterList button, img {
        width: 25px;
        height: 25px;
        background-color: transparent;
        outline: none;
        background-repeat: no-repeat;
        border: 0px;
    }

    img:hover {
        width: 30px;
        height: 30px;
    }
    .SemesterItems {
        margin-inline: 10px;
        margin-bottom: 25px;
        display: flex;
        align-items: flex-end;
        height: 170px;
        width: 330px;
        background-color: #e28f60;
		border-radius: 20px;
        z-index: 0;
    }
    .SemesterList button {
        position: relative;
        right: 80px;
        top: 5px;
    }
    .block {
        column-count: 2;
        column-gap: 2em;
        line-height:2px;
    }
    .SemesterContainer {
        width: 400px;
        display: inline-flex;
    }
    a {
        text-decoration: none;
    }
    .heading {
        font-size: 22px;
    }
    .subheading {
        font-size: 17px;
    }
</style>