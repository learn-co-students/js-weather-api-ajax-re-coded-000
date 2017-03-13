
function getFarenheits(result){
  return result.hourly_forecast.map(function(item){
    return item.temp.english
  })
}

function getHours(result){
  return result.hourly_forecast.map(function(item){
    return item.FCTTIME.hour
  })
}

function generateDataSet(labels, data) {
  return {
    labels: labels,
    datasets: [
    {
      label: "Hourly Weather for New York",
      fillColor: "rgba(200,200,200,0.2)",
      strokeColor: "rgba(225,225,225,1)",
      pointColor: "rgba(222,222,222,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: data
    }
    ]
  };
}

function makeAjaxRequest(url, success) {
  $.ajax({ 
  	url: url,
  	 dataType: "jsonp",
  	  success: success
  	});
}
