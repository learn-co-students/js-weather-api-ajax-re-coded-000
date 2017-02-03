
function getHours(result){
  // Your code goes here
   var hours=[] ;
  //console.log(result.hourly_forecast)
  $.each(result.hourly_forecast,function(i,obj){
     hours.push(obj.FCTTIME.hour) ;
  });
  return hours;
}

function getFarenheits(result){
  // Your code goes here
  var temps=[] ;
  $.each(result.hourly_forecast,function(i,obj){
     temps.push(obj.temp.english) ;
  });
  return temps;
}

function generateDataSet(labels, data) {
  // Your code goes here

  var data_ = {
    labels: labels,
    datasets: [
        {
            label: "Hourly Weather for New York",
            fillColor : 'rgba(220,220,220,0.2)',
            strokeColor : 'rgba(220,220,220,1)',
            pointColor : 'rgba(220,220,220,1)',
            pointStrokeColor : '#fff', pointHighlightFill : '#fff',
            pointHighlightStroke : 'rgba(220,220,220,1)',
            data: data,
        }
    ]
};

return data_
}



function makeAjaxRequest(endpoint, success) {
  // Your code goes here
   // $.ajax({url: endpoint,success: function(response) { success(response); }});
     $.ajax({ url : endpoint, dataType : "jsonp", success: success})
}


