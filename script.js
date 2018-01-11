
// MM/DD/YYYY date format
var startLine = '6/1/2015';
var endLine = '6/30/2015';

var currentDate = '6/10/2015';

var timeLineData = [
  ['6/2/2015', 'Lorem ipsum dolor sit', '<i class="medium material-icons icons">place</i>'],
  ['6/11/2015', 'Lorem ipsum dolor sit', '<i class="medium material-icons icons">cloud_queue</i>'],
  ['6/23/2015', 'Lorem ipsum dolor sit', '<i class="medium material-icons icons">monetization_on</i>'],
  ['6/30/2015', 'Lorem ipsum dolor sit', '<i class="medium material-icons icons">motorcycle</i>']
]

var start = new Date(startLine);
var target = new Date(endLine);
var today;
var percentForEvents = [];
var percentForActiveLine = (new Date(currentDate)-start)/(target-start)*100;

for(i=0; i<timeLineData.length; i++) {
  today = new Date(timeLineData[i][0]);
  percentForEvents[i] = (today-start)/(target-start)*100 - 2;
}


function drawEvents() {
  for(i=0; i<timeLineData.length; i++) {
    $('#line').append('<div class="circle tooltip" id="circle' + i + '" style="left:' + percentForEvents[i] + '%;"></div>');

    if(percentForEvents[i] < percentForActiveLine) {
      $('.circle').css('background', '#000');
    }
    $('#circle' + i).append('<span class="tooltiptext">' + timeLineData[i][0] + '<hr>' + timeLineData[i][1] + '</span>');
    $('#circle' + i).append(timeLineData[i][2]);
  }
}

drawEvents();

function drawResponsive() {
  for(i=0; i<timeLineData.length; i++) {
    $('#responsive').append('<div class="responsiveElement"><div class="circleR" id="circleR' + i + '"></div>' + '<span class="responsiveDate">' + timeLineData[i][0] + '</span>' + '<br>' + timeLineData[i][1] + '</div>');
    
    if(percentForEvents[i] < percentForActiveLine) {
      $('.circleR').css('background', '#000');
    }
    $('#circleR' + i).append(timeLineData[i][2]);
  }
}

drawResponsive();

$('#activeLine').css('width', percentForActiveLine + '%');