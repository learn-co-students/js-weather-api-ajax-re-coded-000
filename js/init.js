
$(document).ready(function($) {
  var API_KEY = 'b8bd4abc5f3ddab1';
  var URL = "http://api.wunderground.com/api/" + 'b8bd4abc5f3ddab1' + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFarenheits(json));
new Chart(ctx).Line(data);  });
});
