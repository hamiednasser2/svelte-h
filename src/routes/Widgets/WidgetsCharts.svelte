<script>
    import {onMount} from 'svelte';
	export let dataColors,id,seriesData;
	import { browser } from "$app/environment"

	function getChartColorsArray(colors) {
		if (browser) {
            colors = JSON.parse(colors);
			return colors.map(function (value) {
				var newValue = value.replace(" ", "");
				if (newValue.indexOf(",") === -1) {
					var color = getComputedStyle(
						document.documentElement
					).getPropertyValue(newValue);
					if (color.indexOf("#") !== -1)
						color = color.replace(" ", "");
					if (color) return color;
					else return newValue;
				} else {
					var val = value.split(",");
					if (val.length === 2) {
						var rgbaColor = getComputedStyle(
							document.documentElement
						).getPropertyValue(val[0]);
						rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
						return rgbaColor;
					} else {
						return newValue;
					}
				}
			});
		}
	}

    var areachartbitcoinColors = getChartColorsArray(dataColors);
    var options = {
        chart: {
            width: 140,
            type: "area",
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        series: [...seriesData],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 1.5,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
            },
        },
        colors: areachartbitcoinColors,
    };

    onMount(() => {
		const chart = new ApexCharts(document.querySelector("#otherwidget"+id), options)
  		chart.render()
	})

</script>


<div id={"otherwidget" + id} class="apex-charts" dir="ltr"></div>