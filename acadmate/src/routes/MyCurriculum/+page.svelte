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
        <a href="/">Go to Dashboard</a>
        
    </div>
    
    <div class="AddDelete">
        <button on:click={togglePopup}>Add Semester</button>
    </div>
    <div class="SemesterList">
        {#each semesters as semester (semester.id)}
            <div class="SemesterItem">
                <h4>{semester.name} {semester.year}</h4>
                <button on:click={(e) => deleteSemester(e, semester.id)}>Delete Semester</button>
            </div>
        {:else}
            <p>There are no semester to show...</p>
        {/each}
    </div>
</main>

<Popup {showPopup} on:click={togglePopup}>
    <AddSemForm on:addSemester={addSemester} newid={numSemesters + 1}/>
    <!-- <h4>HII</h4> -->
</Popup>

<style>
    .Title{
        margin: auto;
        position: absolute;
        top: 10%;
        left: 20%;
    }
    .AddDelete{
        margin: auto;
        position: absolute;
        top: 10%;
        left: 50%;
    }
    .SemesterList{
        margin: auto;
        position: absolute;
        top: 20%;
        left: 50%;
        /* z-index: 0; */
    }

</style>