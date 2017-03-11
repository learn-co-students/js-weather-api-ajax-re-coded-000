function getFarenheits(result){
  // Your code goes here
  return  $.map(result.hourly_forecast,function(itm){
  	return itm.temp.english
  })
}

function getHours(result){
  // Your code goes here
  return  $.map(result.hourly_forecast,function(itm){
  	return itm.FCTTIME.hour
  })
}

function generateDataSet(labels, data) {
  // Your code goes here
  var d= {
  	labels: labels

  };
  d['datasets']= [
  {
  	label : 'Hourly Weather for New York',
  	fillColor : 'rgba(220,220,220,0.2)',
  	strokeColor : 'rgba(220,220,220,1)',
  	pointColor : 'rgba(220,220,220,1)',
  	pointStrokeColor : '#fff', 
  	pointHighlightFill : '#fff', 
  	pointHighlightStroke : 'rgba(220,220,220,1)',
  	data: data
  }
  ];
  return d;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
  	url:endpoint,
  	dataType:"jsonp",
  	success:success
  })
}
