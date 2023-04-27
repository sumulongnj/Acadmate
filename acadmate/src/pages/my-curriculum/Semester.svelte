<script>
    import Popup from '../popup.svelte';
    import AddClassForm from './AddClassForm.svelte';
    import DelClassForm from './DelClassForm.svelte';
    import { classIdAllocator } from '../../classStores.js';
    import { params } from 'svelte-spa-router';

    let showPopup = false;
    let showConfirm = false;
    let classDelID = 0;

    let togglePopup = () => {
        showPopup = !showPopup;
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
    let semUnits = parseInt(SemesterList[CurrentSemesterIndex]["units"]);
    if (isNaN(semGWA)){
        semGWA = (0.0).toFixed(4);
    }

    console.log(ClassList);


    const addClass = (e) => {
        const newClass = e.detail;
        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        CurrentSemesterIndex = JSON.parse(localStorage.getItem("CurrentSemesterIndex"));
        ClassList = SemesterList[CurrentSemesterIndex]["classList"];
        if (newClass.name) {
            classIdAllocator.increment();
            classKey = JSON.parse(localStorage.getItem("ClassID"));
            console.log(classKey);
            ClassList = [...ClassList, newClass];
            SemesterList[CurrentSemesterIndex]["classList"] = ClassList;
            SemesterList[CurrentSemesterIndex]["units"] = parseInt(SemesterList[CurrentSemesterIndex]["units"]) + parseInt(newClass.units);
            let totalGWA = 0;
            for (let i = 0; i < ClassList.length; i++){
                totalGWA += (parseFloat(ClassList[i]["finalGrade"]) * parseInt(ClassList[i]["units"]));
            }
            console.log(totalGWA);
            SemesterList[CurrentSemesterIndex]["gwa"] = totalGWA / SemesterList[CurrentSemesterIndex]["units"];
            localStorage.setItem("SemesterList", JSON.stringify(SemesterList));
            showPopup = false;
            location.reload();
        }
        
    };

    const deleteClass = (e, id) => {
        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        CurrentSemesterIndex = JSON.parse(localStorage.getItem("CurrentSemesterIndex"));
        ClassList = SemesterList[CurrentSemesterIndex]["classList"];
        ClassList = ClassList.filter(Class => Class.id != id);
        showConfirm = false;
        SemesterList[CurrentSemesterIndex]["classList"] = ClassList;
        let totalGWA = 0;
        let totalUnits = 0;
        for (let i = 0; i < ClassList.length; i++){
            totalUnits += parseInt(ClassList[i]["units"]);
            totalGWA += (parseFloat(ClassList[i]["finalGrade"]) * parseInt(ClassList[i]["units"]));
        }
        // console.log(totalGWA);
        let GWA = totalGWA / totalUnits;
        if (isNaN(GWA)){
            GWA = (0.0).toFixed(4);
        }
        SemesterList[CurrentSemesterIndex]["gwa"] = GWA;
        SemesterList[CurrentSemesterIndex]["units"] = totalUnits;
        localStorage.setItem("SemesterList", JSON.stringify(SemesterList));
        location.reload();

    };
    
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
        <h3> GWA: {semGWA} Total Units: {semUnits}</h3>
    </div>
    <div class="ClassList">
        <ul>
            {#each ClassList as Class}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="ClassItems">
                    <h3><br/><br/><br/><br/>{Class.name}<br/>Final Grade: {parseFloat(Class.finalGrade).toFixed(2)}</h3>
                    <h3><br/><br/><br/><br/>
                    </h3>
                </div>
                <button on:click={() => { toggleConfirm(); classDelID = Class.id}}>
                    <img src="./images/trash.png" alt="delete" class="icon trash">
                </button>
            {/each}
        </ul>
    </div>
    <!-- {/if} -->
</main>

<Popup {showPopup} on:click={togglePopup}>
    <AddClassForm on:addClass={addClass} newid={classKey}/>
    <!-- <h4>HII</h4> -->
</Popup>

<Popup {showConfirm} on:click={toggleConfirm}>
    <DelClassForm on:deleteClass={() => {deleteClass({}, classDelID)}}/>
</Popup>

<style>
    .AddButton{
        position: absolute;
        margin-left: 260px;
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
        display: flex;
        flex-direction: row;
        position: absolute;
        margin-left: 225px;
        margin-top: 160px;
    }
    .ClassList h3 {
        color: #ffffff;
        font-weight: bold;
        margin: 20px;
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
        margin-bottom: 20px;
        display: inline-flex;
        height: 170px;
        width: 340px;
        background-color: #e28f60;
		border-radius: 20px;
        z-index: 0;
    }
    .trash {
        position: relative;
        left: -70px;
    }
</style>