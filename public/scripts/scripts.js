// VARIABLES
var peopleVisit = document.getElementById('people-visit-slider'),
    eventAttendeeSlider = document.getElementById('event-attendees-slider'),
    attendeeSlider = document.getElementById('attendees-slider'),
    uniqueVisitors = document.getElementById('unique-visitors-slider'),
    outOfTown = document.getElementById('outof-town-slider'),
    nightStay = document.getElementById('nights-stay-slider');
    engagement = document.getElementById('engagement-slider');

/***************
Create noUISlider's
****************/
//Global Tooltip Variable
var tooltip = [ wNumb({ decimals: 0, thousand: ',' }) ];

//People Visit Per Year (Company and Event)
var range_company = {
	'min': [     0, 100 ],
  '15%': [   100,  100 ],
  '30%': [   500,  100 ],
  '45%': [   1000,  1000 ],
  '60%': [   5000,  1000 ],
  '75%': [   10000,  1000 ],
	'max': [ 25000 ]
};
var range_company_values = [0, 100, 500, 1000, 5000, 10000, 25000];

//Event
var range_event = {
	'min': [     0, 100 ],
  '15%': [   100,  100 ],
  '30%': [   500,  100 ],
  '45%': [   1000,  1000 ],
  '60%': [   5000,  1000 ],
  '75%': [   10000,  1000 ],
	'max': [ 25000 ]
};
var range_event_values = [0, 100, 500, 1000, 5000, 10000, 25000];

//Event Ticketing Company
var event_ticketing_range = {
  'min': [     0, 1000 ],
  '10%': [   25000,  1000 ],
  '20%': [   50000,  1000 ],
  '30%': [   75000,  1000 ],
  '40%': [   100000,  10000 ],
  '50%': [   1000000,  100000 ],
  '65%': [   5000000,  100000 ],
  '80%': [   10000000,  100000 ],
	'max': [ 25000000 ]
};
var event_ticketing_values = [0, 25000, 50000, 75000, 100000, 1000000, 5000000, 10000000, 25000000];


// Venue listing and slider
var venue_range = {
	'min': [     0, 1000 ],
  '15%': [   100000,  1000 ],
  '30%': [   500000,  1000 ],
  '45%': [   1000000,  100000 ],
  '60%': [   5000000,  100000 ],
  '75%': [   10000000,  100000 ],
	'max': [ 25000000 ]
};
var venue_values = [0, 100000, 500000, 1000000, 5000000, 10000000, 25000000];



//Out of town container and slider
var outoftown_range = {
	'min': [     0, 1 ],
  '10%': [   5,  1 ],
  '20%': [   10,  1 ],
  '30%': [   25,  1 ],
  '50%': [   50,  1 ],
  '75%': [   75,  1 ],
	'max': [ 100 ]
};
var outoftown_values = [0, 5, 10, 25, 50, 75, 100];


//Number of nights a someone stays and slider
var nights_range = {
  'min': [     1, 1 ],
  '1%': [   1.1,  1 ],
  '2%': [   1.2,  1 ],
  '3%': [   1.3,  1 ],
  '4%': [   1.4,  1 ],
  '5%': [   1.5,  1 ],
  '6%': [   1.6,  1 ],
  '7%': [   1.7,  1 ],
  '8%': [   1.8,  1 ],
  '9%': [   1.9,  1 ],
  '10%': [   2,  1 ],
  '11%': [   2.1,  1 ],
  '12%': [   2.2,  1 ],
  '13%': [   2.3,  1 ],
  '14%': [   2.4,  1 ],
  '15%': [   2.5,  1 ],
  '16%': [   2.6,  1 ],
  '17%': [   2.7,  1 ],
  '18%': [   2.8,  1 ],
  '19%': [   2.9,  1 ],
  '20%': [   3,  1 ],
  '21%': [   3.1,  1 ],
  '22%': [   3.2,  1 ],
  '23%': [   3.3,  1 ],
  '24%': [   3.4,  1 ],
  '25%': [   3.5,  1 ],
  '26%': [   3.6,  1 ],
  '27%': [   3.7,  1 ],
  '28%': [   3.8,  1 ],
  '29%': [   3.9,  1 ],
  '30%': [   4,  1 ],
  '31%': [   4.1,  1 ],
  '32%': [   4.2,  1 ],
  '33%': [   4.3,  1 ],
  '34%': [   4.4,  1 ],
  '35%': [   4.5,  1 ],
  '36%': [   4.6,  1 ],
  '37%': [   4.7,  1 ],
  '38%': [   4.8,  1 ],
  '39%': [   4.9,  1 ],
  '40%': [   5,  1 ],
  '41%': [   5.1,  1 ],
  '42%': [   5.2,  1 ],
  '43%': [   5.3,  1 ],
  '44%': [   5.4,  1 ],
  '45%': [   5.5,  1 ],
  '46%': [   5.6,  1 ],
  '47%': [   5.7,  1 ],
  '48%': [   5.8,  1 ],
  '49%': [   5.9,  1 ],
  '50%': [   6,  1 ],
  '51%': [   6.1,  1 ],
  '52%': [   6.2,  1 ],
  '53%': [   6.3,  1 ],
  '54%': [   6.4,  1 ],
  '55%': [   6.5,  1 ],
  '56%': [   6.6,  1 ],
  '57%': [   6.7,  1 ],
  '58%': [   6.8,  1 ],
  '59%': [   6.9,  1 ],
  '60%': [   7,  1 ],
  '80%': [   14,  2 ],
  'max': [ 30 ]
};
var nights_values = [1, 2, 3, 4, 5, 6, 7, 14, 30];


//Engagement Percentage and slider
var engagement_range = {
	'min': [     0, 1 ],
	'10%': [     1, 1 ],
  '20%': [   2,  1 ],
  '30%': [   5,  1 ],
  '40%': [   10,  1 ],
  '50%': [   15,  1 ],
  '60%': [   20,  1 ],
  '70%': [   25,  1 ],
  '80%': [   50,  1 ],
  '90%': [   75,  1 ],
	'max': [ 100 ]
};
var engagement_values = [0, 1, 2, 5, 10, 15, 20, 25, 50, 75, 100];



//Create all sliders
createNewSlider(peopleVisit, 100, range_company, range_company_values, 2, tooltip, '+', ',');
createNewSlider(eventAttendeeSlider, 100, range_event, range_event_values, 2, tooltip, '+', ',');
createNewSlider(attendeeSlider, 25000, event_ticketing_range, event_ticketing_values, 1, tooltip);
createNewSlider(uniqueVisitors, 100000, venue_range, venue_values, 1, tooltip);
createNewSlider(outOfTown, 25, outoftown_range, outoftown_values, 1, tooltip, '%', '');
createNewSlider(nightStay, 1, nights_range, nights_values, 1, [wNumb({ decimals: 1, thousand: ',' })]);
createNewSlider(engagement, 1, engagement_range, engagement_values, 1, tooltip, '%', '');

/***************
Call Event Listeners
****************/
addEngagementEventListeners(document.getElementById('homepage'), 1)
addEngagementEventListeners(document.getElementById('navigation'), 3)
addEngagementEventListeners(document.getElementById('placements'), 2)
addEngagementEventListeners(document.getElementById('registration'), 5)
addEngagementEventListeners(document.getElementById('email'), 3)
addEngagementEventListeners(document.getElementById('integrated'), 5)

$(function(){
  calculateEstimation();
  updateNumbers(peopleVisit);
  updateNumbers(eventAttendeeSlider);
  updateNumbers(attendeeSlider);
  updateNumbers(uniqueVisitors);
  updateNumbers(outOfTown);
  updateNumbers(nightStay);
  updateNumbers(engagement);
});

$(function() {
  $('.noUi-value.noUi-value-horizontal.noUi-value-large').each(function(){
      var val = $(this).html();
      val = recountVal(parseInt(val));
      $(this).html(val);
  });
});

$(function() {
  $('#earnings-form input[name="who"]').click(function() {
    var selectWho = $('input[name=who]:checked', '#earnings-form').val();
    if (selectWho == 1) {
      $('#attendees-container').hide();
      $('#event-attendees-container').hide();
      $('#unique-visitors-container').hide();
      $('#people-visit-container').show();

    }
    else if (selectWho == 2) {
      $('#people-visit-container').hide();
      $('#unique-visitors-container').hide();
      $('#attendees-container').hide();
      $('#event-attendees-container').show();

    }
    else if (selectWho == 3) {
      $('#people-visit-container').hide();
      $('#unique-visitors-container').hide();
      $('#event-attendees-container').hide();
      $('#attendees-container').show();
    }
    else {
      $('#people-visit-container').hide();
      $('#attendees-container').hide();
      $('#event-attendees-container').hide();
      $('#unique-visitors-container').show();
    }
    calculateEstimation()
  });
});

$(function() {
  $('#earnings-form input[name="provide"]').click(function() {
    calculateEstimation()
  });
});


/***************
Event Listener Functions
****************/

function addEngagementEventListeners(element, number) {
  element.addEventListener('click', function(){
    if(this.checked){
      engagement.noUiSlider.set(parseInt(engagement.noUiSlider.get())+number);
    }
    else {
      engagement.noUiSlider.set(parseInt(engagement.noUiSlider.get())-number)
    }
    calculateEstimation();
  });
}

function updateNumbers(slider) {
  slider.noUiSlider.on('change', function(){
  	calculateEstimation();
  });
}

//function to calculate the new estimate
function calculateEstimation() {
  var ADR = 133.21;
  var ACR = 10.13;
  // radio slection sliders
  var travelers = peopleVisit.noUiSlider.get()/12;
  var eventAttendees = eventAttendeeSlider.noUiSlider.get()/12;
  var attendees = attendeeSlider.noUiSlider.get()/12;
  var uniques = uniqueVisitors.noUiSlider.get();
  var travelingPercentage = outOfTown.noUiSlider.get()/100;
  var nights = nightStay.noUiSlider.get();
  var engagementPercentage = engagement.noUiSlider.get()/100;

  var selectWho = $('input[name=who]:checked', '#earnings-form').val();
  var visitors = selectWho == 1 ? travelers : selectWho == 2 ? eventAttendees : selectWho == 3 ? attendees : uniques;
  var royaltyMultiplier = parseFloat($('input[name=provide]:checked', '#earnings-form').val());

  //Start Calculation
  var numTravelers = visitors*travelingPercentage*12*engagementPercentage;
  var grossSales = numTravelers*nights*ADR;
  console.log('grossSales', grossSales);
  var grossRevenue = grossSales*(ACR/ADR);
  var royalty = grossRevenue * 0.1;
  royalty = royaltyMultiplier > 0 ? (royalty * royaltyMultiplier) : royalty; // estimate should be doubled
  var split = (""+royalty.toFixed(0)).split("");

  var html = '';
  var commaCounter = 0;
  for (var i = split.length-1; i >= 0; i--) {
    commaCounter += 1;
    html = '<div class="number">'+split[i]+'</div>' + html;
    if (commaCounter == 3 && i > 0){
      html = '<div class="coma">,</div>' + html;
      commaCounter = 0;
    }
  }
   html = '<div class="number-alt">$</div>'+html;
  $('.earnings-figure').html(html);
}

//Function to create a new slider
function createNewSlider(element, start, range, values, density, tooltip, postfix, thousand) {
  noUiSlider.create(element, {
    start: start,
    tooltips: tooltip,
  	connect: 'lower',
  	range: range,
    pips: {
      mode: 'values',
      values: values,
      density: density,
      format: wNumb({
        postfix: postfix,
        thousand: thousand
      })
    }
  });
}
function recountVal(val){
    switch(val){
        case 25000: return '25k';break;
        case 50000:return '50k';break;
        case 75000:return '75k';break;
        case 100000:return '100k';break;
        case 500000:return '500k';break;
        case 1000000:return '1M';break;
        case 5000000:return '5M';break;
        case 10000000:return '10M';break;
        case 25000000:return '25M+';break;
    }
}
