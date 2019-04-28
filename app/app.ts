
interface CalendarTime {
    dateTime: string;
    timeZone: string;
}

interface CalendarDate {
	date: string;
}

interface CalendarEvent {
	summary: string;
	start: CalendarTime | CalendarDate;
	end: CalendarTime | CalendarDate;
	recurrence: any;
	htmlLink: string;
}

class CalendarEvents {
    items: CalendarEvent[];
}

window.onload = () =>  {
	let app : App = new App;

	app.loadCalendar();
}

class App {

	private calendarURL : string = "https://www.googleapis.com/calendar/v3/calendars/sahdeafo8sgihvvjjkh9qg6ut0@group.calendar.google.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY"; 

	constructor() {
		

	}

	private orderNonReoccuringEvents(events: CalendarEvents) : CalendarEvents {
		// Sort by start time
		events.items.sort((a: CalendarEvent, b: CalendarEvent) => {
			let startA = this.getDate(a.start);
			let startB = this.getDate(b.start);

			return  startA.getTime() - startB.getTime();
		});

		// Remove reoccuring events
		events.items = events.items.filter(event => event.recurrence === undefined);		

		return events;
	}
   
	private getMonthName(month : number) : string {
		var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		return monthNames[month];
	}

	private getDayName(day : number) : string {
		var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		return dayNames[day];
	}

	private isSameDay( start : Date, end : Date) : boolean {
		return start.toDateString() === end.toDateString();
	}

	private formatTimeString( date : Date) : string {
		let hour = date.getHours();
		let min = date.getMinutes();
		let am = 'AM';
		let min_pad = '';

		if( hour > 12 ) {
			hour -= 12;
			am = 'PM';
		}

		if( min < 10 ) {
			min_pad = '0';
		}

		return `${hour}:${min_pad}${min} ${am}`;
	}

	private getDate( value : any) : Date {
		return new Date( (value.date != undefined) ? value.date : value.dateTime);
	}

	private formatEventDate( event : CalendarEvent ) : string {
		let formattedDate : string;

		let start = this.getDate( event.start );
		let end = this.getDate( event.end );		
		let startDay = this.getDayName( start.getDay());
		let startMonth = this.getMonthName( start.getMonth());
		let startDate = start.getDate();
		let startYear = start.getFullYear();
		let endDay =  this.getDayName( end.getDay());
		let endDate = end.getDate();
		let endYear = end.getFullYear();

		if( this.isSameDay( start, end ) ) {
			let startTimeString = this.formatTimeString( start );
			let endTimeString = this.formatTimeString( end );

			formattedDate = `${startDay} ${startMonth} ${startDate}, ${startYear} - ${startTimeString} - ${endTimeString}`;
		} else {
			formattedDate = `${startDay} ${startMonth} ${startDate} - ${endDay} ${endDate}, ${endYear}`;
		}

		return formattedDate;
	}

	private displaySpecialEvents( events: CalendarEvents) {
		let listElement : HTMLElement = document.getElementById('special-events');

		events.items.forEach(element => {
			let eventElement : HTMLElement = document.createElement("li");
			
			eventElement.classList.add( "mdl-list__item" );
			eventElement.classList.add( "mdl-list__item--two-line" );
			
			let formatedDate = this.formatEventDate( element );

			let innerHTML : string = 
				`<span class="mdl-list__item-primary-content"> 
					<i class="material-icons mdl-list__item-avatar">event_note</i>
					<a href=${element.htmlLink}>
						<span>
							${element.summary}
						</span>
					</a>
					<span class="mdl-list__item-sub-title">
						${formatedDate}
					</span>
				</span>`;

			eventElement.innerHTML = innerHTML;

			listElement.appendChild( eventElement );
		});
	}

	loadCalendar() {
		var request = new XMLHttpRequest();

		var minTime = new Date();
		var maxTime = new Date();
		maxTime.setDate(maxTime.getDate() + 90);

		var finalURL : string = this.calendarURL;
		finalURL += '&fields=items(summary,start,end,recurrence,htmlLink)'; // Only return the needed fields
		finalURL += '&timeMin=' + minTime.toISOString();
		finalURL += '&timeMax=' + maxTime.toISOString();

		request.open('GET', finalURL, true);

		request.onload = (event) => {
			if (request.status >= 200 && request.status < 400) {
				let events : CalendarEvents = JSON.parse(request.responseText);

				let specialEvents : CalendarEvents = this.orderNonReoccuringEvents(events);

				this.displaySpecialEvents(specialEvents);
				
			} else {
				console.error(request.statusText);
			}
		};

		request.onerror = function () {
			console.error(request.statusText);
		};

		request.send();
	}
}

export = new App