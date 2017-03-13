function getFarenheits(json){
  // Your code goes here
  return $.map(json.hourly_forecast,function(obj){
  	return obj.temp.english
  })
}

function getHours(json){
  // Your code goes here
  return $.map(json.hourly_forecast,function(obj){
  	return obj.FCTTIME.hour
  })}

  function generateDataSet(labels, data) {
  // Your code goes here
  return {
  	labels: labels,
  	datasets : [ { label : 'Hourly Weather for New York', fillColor : 'rgba(220,220,220,0.2)', strokeColor : 'rgba(220,220,220,1)', pointColor : 'rgba(220,220,220,1)', pointStrokeColor : '#fff', pointHighlightFill : '#fff', pointHighlightStroke : 'rgba(220,220,220,1)',
  	data: data
  }
  ]
};
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
		url:endpoint,
        dataType:'jsonp',
        success: success
})
}
