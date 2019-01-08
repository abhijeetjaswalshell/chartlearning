var chart = new CanvasJS.Chart("chartContainer1",
    {
        animationEnabled: true,
        title: {
            text: "Spline Area Chart"
        },
        axisY: {
            interval: 10,
        },
        data: [
        {
            type: "splineArea",
            color: "rgba(255,12,32,.3)",
            type: "splineArea",
            xValueFormatString: "nav",
            dataPoints: datapoints
}]
});
$.getJSON("https://api.mfapi.in/mf/118989", addData);
function addData(data) {
	data = data.data 
	for (var i = 0; i < data.length; i++) 
	{ var m_date = new Date(data[i].date.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")); 
	dataPoints.push({x: m_date, y: parseFloat(data[i].nav)}); }
	chart.render();

}
var chart = new CanvasJS.Chart("chartContainer2",
    {
        animationEnabled: true,
        title: {
            text: "COlumn Chart"
        },
        axisY: {
            interval: 10,
        },
        data: [
        {
            type: "column",
            type: "splineArea",
            xValueFormatString: "nav",
            dataPoints: datapoints
}]
});
$.getJSON("https://api.mfapi.in/mf/118989", addData);
function addData(data) {
	data = data.data 
	for (var i = 0; i < data.length; i++) 
	{ var m_date = new Date(data[i].date.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")); 
	dataPoints.push({x: m_date, y: parseFloat(data[i].nav)}); }
	chart.render();

}
var chart = new CanvasJS.Chart("chartContainer3",
    {
        animationEnabled: true,
        title: {
            text: "Line Chart"
        },
        axisY: {
            interval: 10,
        },
        data: [
        {
            type: "line",
            type: "splineArea",
            xValueFormatString: "nav",
            dataPoints: datapoints
}]
});
$.getJSON("https://api.mfapi.in/mf/118989", addData);
function addData(data) {
	data = data.data 
	for (var i = 0; i < data.length; i++) 
	{ var m_date = new Date(data[i].date.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")); 
	dataPoints.push({x: m_date, y: parseFloat(data[i].nav)}); }
	chart.render();

}
