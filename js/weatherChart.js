function getFarenheits(result){
  // Your code goes here
  return $.map(result.hourly_forecast,function(obj){
  return obj.temp.english
})
}

function getHours(result){
  // Your code goes here
  return $.map(result.hourly_forecast,function(obj){
  return obj.FCTTIME.hour
})
}

function generateDataSet(labels, data) {
  // Your code goes here
  var info={
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
      data: data
    }
    ]
  };
  return info
}

function makeAjaxRequest(URL, success) {
  // Your code goes here
  $.ajax({
  url: URL,
  dataType: 'jsonp',
  success: success
})
}
