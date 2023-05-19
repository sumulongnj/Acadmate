<script>
    import Pie from './Pie.svelte';

    let totalOverallUnits = parseFloat(localStorage.getItem("TotalOverallUnits"));
    let percent = (totalOverallUnits / 148) * 100;
</script>
<main>
    <div class="chart-container">
        <Pie size={500} percent={percent} />
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
    </div>
    <div class="text">
        You are {percent}% complete!
    </div>
</main>

<style>
    .text {
        display: flex;
        justify-content: center;
        font-size: 30px;
    }
    .chart-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .legend {
        justify-content: right;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }

    .legend-item {
        display: flex;
        align-items: center;
        margin-right: 10px;
        margin-bottom: 5px;
    }

    .legend-square {
        width: 25px;
        height: 25px;
        margin-left: 100px;
        margin-right: 5px;
    }
  </style>
