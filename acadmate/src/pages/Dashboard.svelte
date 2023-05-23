<script>
    import Pie from './Pie.svelte';

    let totalOverallUnits = parseFloat(localStorage.getItem("TotalOverallUnits"));
    let percent = (totalOverallUnits / 148) * 100;
</script>

<main>
    <div class="dashboard">
        <div class="Title">
            <h2>Welcome, User!</h2>
        </div>
        <div class="tile">
            <div class="gwa-container">
                Sample tile.
            </div>
        </div>
        <div class="tile">
                <div class="chart">
                    <Pie size={200} percent={percent} />
                </div>
                <div class="legend">
                    <div class="legend-item">
                        <div class="legend-square" style="background-color: #ac4949;"></div>
                        <span>Completed Units - {totalOverallUnits}</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-square" style="background-color: #e28f60;"></div>
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
</style>
