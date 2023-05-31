<script>
    import Pie from './Pie.svelte';

    let totalOverallUnits = parseFloat(localStorage.getItem("TotalOverallUnits"));
    let percent = Math.min((totalOverallUnits / 148) * 100, 100); // min to cap percent to 100
    
    let overallGWA = parseFloat(localStorage.getItem("OverallGWA")).toFixed(4);
    if (isNaN(overallGWA)){
        overallGWA = (0.0).toFixed(4);
    }
    
    let maxGWA = parseFloat(localStorage.getItem("MaxGWA")).toFixed(4);
    if (isNaN(maxGWA)){
        maxGWA = (0.0).toFixed(4);
    }
</script>

<main>
    <div class="dashboard">
        <div class="Title">
            <h2>Welcome, User!</h2>
        </div>
        <div class="tile red">
            <div class="gwa-container">
                <img src="./images/dashstudy.png" alt="Dashboard Study" class="dashstudy">
                <div class="gwa-col">
                <h3 class="gwa-header">CURRENT GWA<br><span class="gwa-value">{overallGWA}</span></h3> 
                <h3 class="gwa-header">MAXIMUM GWA<br><span class="gwa-value">{maxGWA}</span></h3>
                </div>
            </div>
        </div>
        <div class="tile">
                <div class="chart">
                    <Pie size={200} percent={percent} />
                </div>
                <div class="legend">
                    <div class="legend-item">
                        <div class="legend-square" style="background-color: #e28f60;"></div>
                        <span>Completed Units - {totalOverallUnits}</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-square" style="background-color: #ccc;"></div>
                        <span>Remaining Units - {148 - totalOverallUnits}</span>
                    </div>
            </div>
            <div class="text">
                You are <b>{percent.toFixed(2)}%</b> complete!
            </div>
        </div>
    </div>
</main>

<style>
    .dashboard {
        display: flex;
        align-items: left;
        padding-left: 300px;
        padding-top: 130px;
    }

    .tile {
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 2em;
    }

    .gwa-container {
        width: 800px;
        display: flex;
        align-items: right;
    }

    /* .chart-container {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    } */

    .chart {
        margin-right: 20px;
    }

    .legend {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .legend-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .legend-square {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    .text {
        font-size: 18px;
        text-align: center;
    }

    .dashstudy {
        height: 320px;
        width: 800px;
        margin-bottom: -20px;
        margin-left: -150px;
        object-fit: cover;
    }
    .gwa-header {
        font-size: 12px;
    
    }
    .gwa-value {
        font-weight: 400;
        font-size: 22px;
    
    }
    .gwa-col {
        display: flex;
        flex-direction: column;
    }
    .red {
        background-color: #ac4949;
        color: white;
    }
</style>
