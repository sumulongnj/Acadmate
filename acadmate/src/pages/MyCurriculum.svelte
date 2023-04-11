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

    let semesters = [
        { name: '1st Semester', year: 2021, id: 1},
        { name: '2nd Semester', year: 2021, id: 2},
        { name: '1st Semester', year: 2022, id: 3},
        { name: '2nd Semester', year: 2022, id: 4}
    ]
    let numSemesters = semesters.length;

    const addSemester = (e) => {
        //console.log(e.detail);
        const newSemester = e.detail;

        if (newSemester.name && newSemester.year) {
            semesters = [...semesters, newSemester];
            // semesters = [newSemester, ...semesters];
            showPopup = false;
            numSemesters = numSemesters + 1;
        }
    };

    const deleteSemester = (e, id) => {
        semesters = semesters.filter(semester => semester.id != id);
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
        {#each semesters as semester (semester.id)}
            {#if semester.id % 3 == 1}
                <div class="SemesterItems1">
                    <button on:click={(e) => gotoSemester (e, semester.year, semester.name)} id="testButton"></button>
                    <h3><br/><br/><br/><br/>{semester.year}<br/>{semester.name}</h3>
                    <h3><br/><br/><br/><br/>
                    <button on:click={(e) => deleteSemester(e, semester.id)}>
                        <img src="./images/trash.png" alt="delete" class="icon">
                    </button></h3>
                </div>
            {:else if semester.id % 3 == 2}
                <div class="SemesterItems2">
                    <h3><br/><br/><br/><br/>{semester.year}<br/>{semester.name}</h3>
                    <h3><br/><br/><br/><br/>
                    <button on:click={(e) => deleteSemester(e, semester.id)}>
                        <img src="./images/trash.png" alt="delete" class="icon">
                    </button></h3>
                </div>
            {:else}
                <div class="SemesterItems3">
                    <h3><br/><br/><br/><br/>{semester.year}<br/>{semester.name}</h3>
                    <h3><br/><br/><br/><br/>
                    <button on:click={(e) => deleteSemester(e, semester.id)}>
                        <img src="./images/trash.png" alt="delete" class="icon">
                    </button></h3>
                </div>
            {/if}
        {/each}
        </div>
        {/if}
</main>

<Popup {showPopup} on:click={togglePopup}>
    <AddSemForm on:addSemester={addSemester} newid={numSemesters + 1}/>
    <!-- <h4>HII</h4> -->
</Popup>

<Semester {showSemester} semYear={currentSemYear} semName={currentSemName}></Semester>

<style>
    #testButton{
        margin-inline: 10px;
        margin-bottom: 20px;
        position: absolute;
        height: 170px;
        width: 380px;
		border-radius: 20px;
    }
    .trash {
        position: absolute;
    }
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
    .SemesterList button, img {
        width: 25px;
        height: 25px;
        background-color: transparent;
        outline: none;
        background-repeat: no-repeat;
        border: 0px;
        padding-left: 70px;
    }
    img:hover {
        width: 30px;
        height: 30px;
    }
    
    .SemesterList {
        position: absolute;
        margin-left: 280px;
        margin-top: 130px;
    }
    .SemesterItems1 h3 {
        color: #ffffff;
        font-weight: bold;
        margin: 20px;
    }
    .SemesterItems2 h3 {
        color: #ac4949;
        font-weight: bold;
        margin: 20px;
    }
    .SemesterItems3 h3 {
        color: #ffd9c3;
        font-weight: bold;
        margin: 20px;
    }
    .SemesterItems1 {
        margin-inline: 10px;
        margin-bottom: 20px;
        display: inline-flex;
        height: 170px;
        width: 380px;
        background-color: #e28f60;
		border-radius: 20px;
    }
    .SemesterItems2 {
        margin-inline: 10px;
        margin-bottom: 20px;
        display: inline-flex;
        height: 170px;
        width: 380px;
        background-color: #ffffff;
		border-radius: 20px;
    }
    .SemesterItems3 {
        margin-inline: 10px;
        margin-bottom: 20px;
        display: inline-flex;
        height: 170px;
        width: 380px;
        background-color: #ac4949;
		border-radius: 20px;
    }
</style>