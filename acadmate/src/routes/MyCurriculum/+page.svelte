<script>
    import Popup from './popup.svelte';
    import AddSemForm from './AddSemForm.svelte';

    let showPopup = false;

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
        semesters = [...semesters, newSemester];
        // semesters = [newSemester, ...semesters];
        showPopup = false;
        numSemesters = numSemesters + 1;
    };

    const deleteSemester = (e, id) => {
        semesters = semesters.filter(semester => semester.id != id);
    };
</script>

<main>
    <div class="Title">
        <h1>My Curriculum</h1>
        
    </div>
    
    <div class="AddButton">
        <button on:click={togglePopup}>+</button>
    </div>
    <div class="SemesterList">
        {#each semesters as semester (semester.id)}
            {#if semester.id % 3 == 1}
                <div class="SemesterItems1">
                    <h3><br/><br/><br/><br/>{semester.year}<br/>{semester.name}</h3>
                    <h3><br/><br/><br/><br/><button on:click={(e) => deleteSemester(e, semester.id)}>-</button></h3>
                </div>
            {:else if semester.id % 3 == 2}
                <div class="SemesterItems2">
                    <h3><br/><br/><br/><br/>{semester.year}<br/>{semester.name}</h3>
                    <h3><br/><br/><br/><br/><button on:click={(e) => deleteSemester(e, semester.id)}>-</button></h3>
                </div>
            {:else}
                <div class="SemesterItems3">
                    <h3><br/><br/><br/><br/>{semester.year}<br/>{semester.name}</h3>
                    <h3><br/><br/><br/><br/><button on:click={(e) => deleteSemester(e, semester.id)}>-</button></h3>
                </div>
            {/if}
        {/each}
        </div>
</main>

<Popup {showPopup} on:click={togglePopup}>
    <AddSemForm on:addSemester={addSemester} newid={numSemesters + 1}/>
    <!-- <h4>HII</h4> -->
</Popup>

<style>
    .AddButton{
        position: absolute;
        margin-left: 630px;
        margin-top: 60px;
    }
    .SemesterList {
        position: absolute;
        margin-left: 325px;
        margin-top: 100px;
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
        width: 400px;
        background-color: #e28f60;
		border-radius: 20px;
    }
    .SemesterItems2 {
        margin-inline: 10px;
        margin-bottom: 20px;
        display: inline-flex;
        height: 170px;
        width: 400px;
        background-color: #ffffff;
		border-radius: 20px;
    }
    .SemesterItems3 {
        margin-inline: 10px;
        margin-bottom: 20px;
        display: inline-flex;
        height: 170px;
        width: 400px;
        background-color: #ac4949;
		border-radius: 20px;
    }
</style>