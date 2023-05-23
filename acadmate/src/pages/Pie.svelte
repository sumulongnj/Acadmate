<script>
  export let size = 400;
  export let totalOverallUnits = parseFloat(localStorage.getItem("TotalOverallUnits"));
  export let percent = (totalOverallUnits * 100 / 148) ;
  export let strokeColor = '#e28f60';

  $: viewBox = `0 0 ${size} ${size}`;

  $: radius = size / 2 - 10;
  $: halfCircumference = Math.PI * radius;
  $: pieSize = 2*halfCircumference * (percent / 100);
  $: dashArray = `${pieSize} ${halfCircumference*2-pieSize}`;

</script>

<svg width={size} height={size} {viewBox}>
  <circle cx={radius + 10} cy={radius + 10} r={radius} fill="transparent" stroke="#ccc" stroke-width="20" />
  <circle cx={radius + 10} cy={radius + 10} r={radius} fill="transparent" stroke={strokeColor} stroke-width="20" stroke-dasharray={dashArray} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
  <text x="50%" y="50%" text-anchor="middle" alignment-baseline="central" font-size="34" fill="#333">
    {percent.toFixed(2)}%
  </text>
</svg>
