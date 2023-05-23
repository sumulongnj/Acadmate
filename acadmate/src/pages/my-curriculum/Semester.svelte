<script>
    import Popup from '../popup.svelte';
    import AddClassForm from './AddClassForm.svelte';
    import DelClassForm from './DelClassForm.svelte';
    import EditClassForm from './EditClassForm.svelte';
    import { classIdAllocator } from '../../classStores.js';
    import { params } from 'svelte-spa-router';
    // import {computeOverallGWA} from '../MyCurriculum.svelte';

    let showDelete = false;
    let showConfirm = false;
    let showEdit = false;
    let classDelID = 0;
    let classEditID = 0;
    let index = 0;
    
    let togglePopup = () => {
        showDelete = !showDelete;
    };

    let toggleEdit = () => {
        showEdit = !showEdit;
    };

    let toggleConfirm = () => {
        showConfirm = !showConfirm;
    }
    
    // if (localStorage.getItem("ClassList") == null) {
    //     localStorage.setItem("ClassList", "[]");
    // }

    if (localStorage.getItem("ClassID") == null) {
        localStorage.setItem("ClassID", "0");
    }

    let SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
    let CurrentSemesterIndex = JSON.parse(localStorage.getItem("CurrentSemesterIndex"));
    let ClassList = SemesterList[CurrentSemesterIndex]["classList"];
    let classKey = JSON.parse(localStorage.getItem("ClassID"));

    let semYear = SemesterList[CurrentSemesterIndex]["year"];
    let semName = SemesterList[CurrentSemesterIndex]["name"];
    let semGWA = parseFloat(SemesterList[CurrentSemesterIndex]["gwa"]).toFixed(4);
    let semUnits = parseFloat(SemesterList[CurrentSemesterIndex]["units"]);
    if (isNaN(semGWA)){
        semGWA = (0.0).toFixed(4);
    }

    console.log(ClassList);


    const addClass = (e) => {
        const newClass = e.detail;
        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        CurrentSemesterIndex = JSON.parse(localStorage.getItem("CurrentSemesterIndex"));
        ClassList = SemesterList[CurrentSemesterIndex]["classList"];
        const index = ClassList.findIndex(sub => sub.name === newClass.name);
        if (index === -1 && newClass.name) {
            classIdAllocator.increment();
            classKey = JSON.parse(localStorage.getItem("ClassID")); 
            ClassList = [...ClassList, newClass];
            SemesterList[CurrentSemesterIndex]["classList"] = ClassList;
            // if (SemesterList[CurrentSemesterIndex]["isCredited"] === true) {
            //     SemesterList[CurrentSemesterIndex]["units"] = parseFloat(SemesterList[CurrentSemesterIndex]["units"]) + parseFloat(newClass.units);
            // }
            // let totalGWA = 0;
            // for (let i = 0; i < ClassList.length; i++){
            //     if (ClassList[i]["isCredited"]) {
            //         if (ClassList[i]["finalGrade"] == 'DRP'){
            //             continue;
            //         }
            //         if (ClassList[i]["finalGrade"] == 'INC'){
            //             continue;
            //         }
            //         totalGWA += (parseFloat(ClassList[i]["finalGrade"]) * parseFloat(ClassList[i]["units"]));
            //     }
            // }
            // SemesterList[CurrentSemesterIndex]["gwa"] = totalGWA / SemesterList[CurrentSemesterIndex]["units"];
            localStorage.setItem("SemesterList", JSON.stringify(SemesterList));
            showDelete = false;
            computeGWA();
        }
        
    };


    const editClass = (e, id) => {
        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        CurrentSemesterIndex = JSON.parse(localStorage.getItem("CurrentSemesterIndex"));
        ClassList = SemesterList[CurrentSemesterIndex]["classList"];
        const index = ClassList.findIndex(sub => sub.id === id);
        if (index !== -1) {
            const updatedClass = e.detail;
            const checkIndex = ClassList.findIndex(sub => sub.name === updatedClass.name && sub.id !== updatedClass.id);
            if (checkIndex === -1) {
                ClassList[index] = {
                    ...ClassList[index], 
                    name: updatedClass.name,
                    units: updatedClass.units,
                    finalGrade: updatedClass.finalGrade,
                    isCredited: updatedClass.isCredited,
                };
                SemesterList[CurrentSemesterIndex]["classList"] = ClassList;
                localStorage.setItem("SemesterList", JSON.stringify(SemesterList));
                showEdit = false;
            }
        }
        computeGWA();
    };

    const deleteClass = (e, id) => {
        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        CurrentSemesterIndex = JSON.parse(localStorage.getItem("CurrentSemesterIndex"));
        ClassList = SemesterList[CurrentSemesterIndex]["classList"];
        ClassList = ClassList.filter(Class => Class.id != id);
        showConfirm = false;
        SemesterList[CurrentSemesterIndex]["classList"] = ClassList;
        // let totalGWA = 0;
        // let totalUnits = 0;
        // for (let i = 0; i < ClassList.length; i++){
        //     totalUnits += parseFloat(ClassList[i]["units"]);
        //     totalGWA += (parseFloat(ClassList[i]["finalGrade"]) * parseFloat(ClassList[i]["units"]));
        // }
        // // console.log(totalGWA);
        // let GWA = totalGWA / totalUnits;
        // if (isNaN(GWA)){
        //     GWA = (0.0).toFixed(4);
        // }
        // SemesterList[CurrentSemesterIndex]["gwa"] = GWA;
        // SemesterList[CurrentSemesterIndex]["units"] = totalUnits;
        localStorage.setItem("SemesterList", JSON.stringify(SemesterList));
        // location.reload();
        computeGWA();

    };
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

    const computeGWA = () => {
        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        CurrentSemesterIndex = JSON.parse(localStorage.getItem("CurrentSemesterIndex"));
        ClassList = SemesterList[CurrentSemesterIndex]["classList"];
        // ClassList = ClassList.filter(Class => Class.id != id);
        // showConfirm = false;
        SemesterList[CurrentSemesterIndex]["classList"] = ClassList;
        let totalGWA = 0;
        let totalUnits = 0;
        for (let i = 0; i < ClassList.length; i++){
            if (ClassList[i]["isCredited"]) {
                if (ClassList[i]["finalGrade"] == 'DRP' || ClassList[i]["finalGrade"] == '4.00'){
                    continue;
                }
                if (ClassList[i]["finalGrade"] == 'INC' || ClassList[i]["finalGrade"] == '0.00'){
                    continue;
                }
                totalUnits += parseFloat(ClassList[i]["units"]);
                totalGWA += (parseFloat(ClassList[i]["finalGrade"]) * parseFloat(ClassList[i]["units"]));
            }
        }
        console.log(totalGWA);
        let GWA = totalGWA / totalUnits;
        if (isNaN(GWA)){
            GWA = (0.0).toFixed(4);
        }
        SemesterList[CurrentSemesterIndex]["gwa"] = GWA;
        SemesterList[CurrentSemesterIndex]["units"] = totalUnits.toFixed(1);
        localStorage.setItem("SemesterList", JSON.stringify(SemesterList));
        computeOverallGWA();
        location.reload();
    }
    
</script>

<main>
    <!-- {#if showSemester} -->
    <div class="Title">
        <div class="AddButton">
            <button on:click={togglePopup}>
                <strong>+</strong>
            </button>
        </div>
        <h2>{semYear}, {semName}</h2>
        <div class="block"> Semestral GWA <br> <h3> {semGWA} </h3>
        Total Units <br> <h3> {semUnits} </h3> </div>
    </div>
    <div class="ClassList">
        <ul>
            {#each ClassList as Class}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="ClassContainer">
                    <div class="ClassItems">
                        <h3>
                            <span class="heading">{Class.name}</span>
                            <span class="subheading"><br/>Final Grade: {Class.finalGrade}</span>
                        </h3>
                    </div>
                    <button on:click={() => {toggleEdit(); classEditID = Class.id; index = ClassList.findIndex(sub => sub.id === classEditID)}}>
                        <img src="./images/edit.png" alt="edit">
                    </button>
                    <button on:click={() => { toggleConfirm(); classDelID = Class.id}}>
                        <img src="./images/trash.png" alt="delete">
                    </button>
                </div>
            {/each}
        </ul>
    </div>
    <!-- {/if} -->
</main>

<Popup {showDelete} on:click={togglePopup}>
    <AddClassForm on:addClass={addClass} newid={classKey}/>
    <!-- <h4>HII</h4> -->
</Popup>

<Popup {showEdit} on:click={toggleEdit}>
    <EditClassForm on:editClass={updatedClass => editClass(updatedClass, classEditID)} sub={ClassList[index]} />
</Popup>  

<Popup {showConfirm} on:click={toggleConfirm}>
    <DelClassForm on:deleteClass={() => {deleteClass({}, classDelID)}}/>
</Popup>

<style>
    .AddButton{
        position: absolute;
        margin-left: 250px;
        margin-top: 20px;
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
    .ClassList {
        flex-direction: row;
        position: absolute;
        margin-left: 225px;
        margin-top: 170px;
    }
    .ClassList h3 {
        color: #ffffff;
        margin-left: 24px;
        font-weight: 600;
    }
    .ClassList button, img {
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
    .ClassItems {
        margin-inline: 10px;
        margin-bottom: 35px;
        display: flex;
        align-items: flex-end;
        height: 170px;
        width: 350px;
		border-radius: 20px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
        z-index: 0;
    }
    .ClassList button {
        position: relative;
        right: 80px;
        top: 5px;
    }

    .ClassContainer:nth-child(9n-8) .ClassItems {
        background-color: #e28f60; /* ORANGE */
    }

    .ClassContainer:nth-child(9n-7) .ClassItems {
        background-color: white;
    }

    .ClassContainer:nth-child(9n-7) h3 {
        color: #ac4949;
    }

    .ClassContainer:nth-child(9n-6) .ClassItems {
        background-color: #ac4949; /* RED */
    }

    .ClassContainer:nth-child(9n-5) .ClassItems {
        background-color: white;
    }

    .ClassContainer:nth-child(9n-5) h3 {
        color: #ac4949;
    }

    .ClassContainer:nth-child(9n-4) .ClassItems {
        background-color: #ac4949; /* RED */
    }

    .ClassContainer:nth-child(9n-3) .ClassItems {
        background-color: #e28f60; /* ORANGE */
    }

    .ClassContainer:nth-child(9n-2) .ClassItems {
        background-color: #ac4949; /* RED */
    }

    .ClassContainer:nth-child(9n-1) .ClassItems {
        background-color: #e28f60; /* ORANGE */
    }

    .ClassContainer:nth-child(9n) .ClassItems {
        background-color: white;
    }

    .ClassContainer:nth-child(9n) h3 {
        color: #ac4949;
    }
    .block {
        column-count: 2;
        column-gap: 2em;
        line-height:2px;
    }
    .ClassContainer {
        width: 400px;
        display: inline-flex;
    }
    .heading {
        font-size: 22px;
    }
    .subheading {
        font-size: 17px;
    }
</style>