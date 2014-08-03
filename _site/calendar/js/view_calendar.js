/* Wait for DOM to load etc */
$(document).ready(function(){

	//Initialisations
	initialise_calendar();

});

/* Initialises calendar */
function initialise_calendar(){

	//Initialise calendar
	$('#calendar').fullCalendar({
		theme: true,
		firstDay: 1,
		header: {
			left: 'today prev,next',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		defaultView: 'month',
		minTime: '8:00am',
		maxTime: '6:00pm',
		allDaySlot: false,
		columnFormat: {
			month: 'ddd',
			week: 'ddd dd',
			day: 'dddd M/d'
		},
		events: eventarray,
		droppable: true,
		drop: function(date, all_day){
			external_event_dropped(date, all_day, this);
		},
		eventClick: function(cal_event, js_event, view){
			calendar_event_clicked(cal_event, js_event, view);
		},
		editable: true
	});	

	//Initialise external events
	initialise_external_event('.external-event');
}

