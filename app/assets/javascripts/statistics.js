google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
	var data = google.visualization.arrayToDataTable(stats);

	var options = {
		title: 'Violations'
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

	chart.draw(data, options);
}
