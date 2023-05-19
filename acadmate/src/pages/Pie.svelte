<script>
    export let size = 400;
    export let totalOverallUnits = parseFloat(localStorage.getItem("TotalOverallUnits"));
    export let percent = (totalOverallUnits / 148) * 100;
    export let bgColor = '#e28f60';
    export let fgColor = '#ac4949';
    
    $: viewBox = `0 0 ${size} ${size}`;
    
    $: radius = size / 2;
    $: halfCircumference = Math.PI * radius;
    $: pieSize = halfCircumference * (percent / 100);
    $: dashArray = `0 ${halfCircumference - pieSize} ${pieSize}`;
</script>
  
<svg width={size} height={size} {viewBox}>
    <circle r={radius} cx={radius} cy={radius} fill={bgColor} />
    <circle
      r={radius / 2}
      cx={radius}
      cy={radius}
      fill={bgColor}
      stroke={fgColor}
      stroke-width={radius}
      stroke-dasharray={dashArray}
    />
</svg>