function getFarenheits(json){
	return $.map(json.hourly_forecast, function(itm){
		return itm.temp.english

	})
}

function getHours(json){
	return $.map(json.hourly_forecast, function(itm){
		return itm.FCTTIME.hour

	})
}

function generateDataSet(labels, data) {
	return {
    labels: labels,
    datasets: [
        {
        label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: data,
        }
     
    ]
};
	// var myLineChart= new Chart(ctx).Line(data);
	
}

function makeAjaxRequest(endpoint, success) {
	$.ajax({
		url: endpoint,
		dataType: "jsonp",
		success: success
	})

  // Your code goes here
}
