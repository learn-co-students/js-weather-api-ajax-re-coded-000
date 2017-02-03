
jQuery(document).ready(function($) {
  var API_KEY = "edd1872e01f81ec7";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
  	
    var data = generateDataSet(getHours(json), getFarenheits(json));
    //   console.log(data);
     var x=new Chart(ctx)
     x.Line(data);
   //var tempChart = new Chart.Line(ctx, {data: data, options: { bezierCurve: true}});

  });
});
//   http://api.wunderground.com/api/edd1872e01f81ec7/hourly/q/NY/New_York.json