<script>
	import {onMount} from 'svelte';
	export let dataColors;
	import { browser } from "$app/environment"

	function getChartColorsArray(colors) {
		if (browser) {
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

	var chartStackedBar100Colors = getChartColorsArray(dataColors);

	const options = {
		chart: {
			type: "bar",
			height: 350,
			stacked: !0,
			stackType: "100%",
			toolbar: {
				show: !1,
			},
		},
		series: [
			{
				name: "Marine Sprite",
				data: [44, 55, 41, 37, 22, 43, 21],
			},
			{
				name: "Striking Calf",
				data: [53, 32, 33, 52, 13, 43, 32],
			},
			{
				name: "Tank Picture",
				data: [12, 17, 11, 9, 15, 11, 20],
			},
			{
				name: "Bucket Slope",
				data: [9, 7, 5, 8, 6, 9, 4],
			},
			{
				name: "Reborn Kid",
				data: [25, 12, 19, 32, 25, 24, 10],
			},
		],
		plotOptions: {
			bar: {
				horizontal: !0,
			},
		},
		stroke: {
			width: 1,
			colors: ["#fff"],
		},
		title: {
			text: "100% Stacked Bar",
			style: {
				fontWeight: 600,
			},
		},
		xaxis: {
			categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return val + "K";
				},
			},
		},
		fill: {
			opacity: 1,
		},
		legend: {
			position: "top",
			horizontalAlign: "left",
			offsetX: 40,
		},
		colors: chartStackedBar100Colors,
	};
	onMount(() => {
		const chart = new ApexCharts(document.querySelector("#stackedchart2"), options)
  		chart.render()
	})
</script>

<div id="stackedchart2" class="apex-charts" dir="ltr"></div>
