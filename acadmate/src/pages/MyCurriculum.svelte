<script>
    import Popup from './popup.svelte';
    import AddSemForm from './AddSemForm.svelte';
    import DelSemForm from './DelSemForm.svelte';
    import Semester from './Semester.svelte';
    import { idAllocator } from '../stores.js';

    let showPopup = false;
    let showConfirm = false;
    let showSemester = false;
    let showCurriculum = true;
    let semDelID = 0;

    let togglePopup = () => {
        showPopup = !showPopup;
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

    let SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
    let semKey = JSON.parse(localStorage.getItem("SemID"));

    const addSemester = (e) => {
        const newSemester = e.detail;
        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        if (newSemester.name && newSemester.year) {
            idAllocator.increment();
            semKey = JSON.parse(localStorage.getItem("SemID"));
            SemesterList = [...SemesterList, newSemester];
            localStorage.setItem("SemesterList", JSON.stringify(SemesterList));
            showPopup = false;
        }
    };

    const deleteSemester = (e, id) => {
        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        SemesterList = SemesterList.filter(semester => semester.id != id);
        showConfirm = false;
        localStorage.setItem("SemesterList", JSON.stringify(SemesterList));
    };

    let gotoSemester = (e, semesterYear, semesterName) => {
        showSemester = !showSemester;
        showCurriculum = !showCurriculum;
        currentSemYear = semesterYear;
        currentSemName = semesterName;
    };

    let currentSemYear;
    let currentSemName;
    
</script>

<main>
    {#if showCurriculum}
    <div class="Title">
        <h2>My Curriculum</h2>
    </div>
    
    <div class="AddButton">
        <button on:click={togglePopup}>
            <strong>+</strong>
        </button>
    </div>
    <div class="SemesterList">
        <ul>
            {#each SemesterList as semester}
                <div class=SemesterItems>
                    <h3><br/><br/><br/><br/>{semester.year}<br/>{semester.name} Semester</h3>
                    <h3><br/><br/><br/><br/>
                    <button on:click={() => { toggleConfirm(); semDelID = semester.id}}>
                        <img src="./images/trash.png" alt="delete" class="icon trash">
                    </button></h3>
                </div>
            {/each}
        </ul>
    </div>
    {/if}
</main>

<Popup {showPopup} on:click={togglePopup}>
    <AddSemForm on:addSemester={addSemester} newid={semKey}/>
    <!-- <h4>HII</h4> -->
</Popup>

<Popup {showConfirm} on:click={toggleConfirm}>
    <DelSemForm on:deleteSemester={() => {deleteSemester({}, semDelID)}}/>
</Popup>

<Semester {showSemester} semYear={currentSemYear} semName={currentSemName}></Semester>

<style>
    /* #testButton{
        margin-inline: 10px;
        margin-bottom: 20px;
        position: absolute;
        height: 170px;
        width: 380px;
		border-radius: 20px;
    }
    */
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
        margin-top: 130px;
    }
    .SemesterList h3 {
        color: #ffffff;
        font-weight: bold;
        margin: 20px;
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
        margin-bottom: 20px;
        display: inline-flex;
        height: 170px;
        width: 380px;
        background-color: #e28f60;
		border-radius: 20px;
    }
    .trash {
        position: absolute;
        margin-left: 130px;
    }
</style>