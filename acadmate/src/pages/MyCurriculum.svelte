<script>
    import Popup from './popup.svelte';
    import AddSemForm from './AddSemForm.svelte';
    import Semester from './Semester.svelte';

    let showPopup = false;
    let showSemester = false;
    let showCurriculum = true;

    let togglePopup = () => {
        showPopup = !showPopup;
    };
    
    if (localStorage.getItem("SemesterList") == null) {
        let emptyArr = [];
        localStorage.setItem("SemesterList", JSON.stringify(emptyArr));
    }
    let SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
    let numSemester = SemesterList.length;
    console.log(SemesterList);

    const addSemester = (e) => {
        const newSemester = e.detail;
        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        numSemester = SemesterList.length;
        if (newSemester.name && newSemester.year) {
            SemesterList = [...SemesterList, newSemester];
            showPopup = false;
            numSemester = SemesterList.length;
            localStorage.setItem("SemesterList", JSON.stringify(SemesterList));
        }
    };

    const deleteSemester = (e, id) => {
        SemesterList = JSON.parse(localStorage.getItem("SemesterList"));
        SemesterList = SemesterList.filter(semester => semester.id != id);
        numSemester = SemesterList.length;
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
                    <button on:click={(e) => deleteSemester(e, semester.id)}>
                        <img src="./images/trash.png" alt="delete" class="icon trash">
                    </button></h3>
                </div>
            {/each}
        </ul>
    </div>
    {/if}
</main>

<Popup {showPopup} on:click={togglePopup}>
    <AddSemForm on:addSemester={addSemester} newid={numSemester + 1}/>
    <!-- <h4>HII</h4> -->
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