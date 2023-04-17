<script>
    import Popup from './popup.svelte';
    import AddClassForm from './AddClassForm.svelte';
    import DelClassForm from './DelClassForm.svelte';
    import { idAllocator } from '../stores.js';

    let showPopup = false;
    let showConfirm = false;
    let showCurriculum = false;
    let classDelID = 0;

    export let semYear;
    export let semName;
    export let showSemester = false;

    let togglePopup = () => {
        showPopup = !showPopup;
    };

    let toggleConfirm = () => {
        showConfirm = !showConfirm;
    }
    
    if (localStorage.getItem("ClassList") == null) {
        localStorage.setItem("ClassList", "[]");
    }

    if (localStorage.getItem("ClassID") == null) {
        localStorage.setItem("ClassID", "0");
    }

    let ClassList = JSON.parse(localStorage.getItem("ClassList"));
    let classKey = JSON.parse(localStorage.getItem("ClassID"));

    const addClass = (e) => {
        const newClass = e.detail;
        ClassList = JSON.parse(localStorage.getItem("ClassList"));
        if (newClass.name) {
            idAllocator.increment();
            classKey = JSON.parse(localStorage.getItem("ClassID"));
            ClassList = [...ClassList, newClass];
            localStorage.setItem("ClassList", JSON.stringify(ClassList));
            showPopup = false;
        }
    };

    const deleteClass = (e, id) => {
        ClassList = JSON.parse(localStorage.getItem("ClassList"));
        ClassList = ClassList.filter(Class => Class.id != id);
        showConfirm = false;
        localStorage.setItem("ClassList", JSON.stringify(ClassList));
    };
    
</script>

<main>
    {#if showSemester}
        <div class="Title">
            <div class="AddButton">
                <button on:click={togglePopup}>
                    <strong>+</strong>
                </button>
            </div>
            <h2>{semYear}, {semName}</h2>
            <h3> GWA: 1.71 </h3>
        </div>
        <div class="ClassList">
            <ul>
                {#each ClassList as Class}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div class="ClassItems">
                        <h3><br/><br/><br/><br/>{Class.name}<br/>GWA: {Class.classGWA}</h3>
                        <h3><br/><br/><br/><br/>
                        <button on:click={() => { toggleConfirm(); classDelID = Class.id}}>
                            <img src="./images/trash.png" alt="delete" class="icon trash">
                        </button></h3>
                    </div>
                {/each}
            </ul>
        </div>
    {/if}
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
        margin-top: 130px;
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
        width: 380px;
        background-color: #e28f60;
		border-radius: 20px;
    }
    .trash {
        position: absolute;
    }
</style>