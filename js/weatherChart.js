function getFarenheits(result){
  return  $.map(result.hourly_forecast,function(itm){
  	return itm.temp.english
  })
}

function getHours(result){
  return  $.map(result.hourly_forecast,function(itm){
  	return itm.FCTTIME.hour
  })
}

function generateDataSet(labels, data) {
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
   $.ajax({
  	url:endpoint,
  	dataType:"jsonp",
  	success:success
  })
}
