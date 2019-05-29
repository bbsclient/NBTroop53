
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
	description: string;
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
		const dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

		return dayNames[day];
	}

	private isSameDay( start : Date, end : Date) : boolean {
		return start.toDateString() === end.toDateString();
	}

	private formatTimeString( date : Date, addAmPm: boolean) : string {
		let hour = date.getHours();
		let min = date.getMinutes().toString();
		let am = 'AM';
		let seperator = ':';

		if( hour > 12 ) {
			hour -= 12;
			am = 'PM';
		}

		if (min === '0') {
      // don't display :00
      min = '';
      seperator = '';
    } else if (min.length === 1) {
      min = `0${min}`;
    }

    if (addAmPm === false) {
      am = '';
    }

    return `${hour}${seperator}${min}${am}`;
	}

	private getDate( value : any) : Date {
		return new Date( (value.date != undefined) ? value.date : value.dateTime);
	}

	private formatEventDate( event : CalendarEvent ) : string {
		let formattedDate : string;

    const start = this.getDate(event.start);
    const end = this.getDate(event.end);
    const startDay = this.getDayName(start.getDay());
    const startMonth = start.getMonth() + 1;
    const startDate = start.getDate();
    const endDay = this.getDayName(end.getDay());
    const endMonth = end.getMonth() + 1;
    const endDate = end.getDate();

    if (this.isSameDay(start, end)) {
      const startTimeString = this.formatTimeString(start, false);
      const endTimeString = this.formatTimeString(end, true);

      formattedDate = `${startMonth}/${startDate} ${startDay} ${startTimeString} - ${endTimeString}`;
    } else {
      formattedDate = `${startMonth}/${startDate} ${startDay} - ${endMonth}/${endDate} ${endDay}`;
    }

    return formattedDate;
	}

	private extractRSVP(event: CalendarEvent) {
		let { description } = event;

		if (description !== undefined) {
		  const result = description.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[A-Z0-9+&@#/%=~_|$])/igm);
	
		  if (result !== null && result.length === 1) {
			const [url] = result;
			return url;
		  }
		}
	
		return undefined;
	  }

	private formatRSVP( event: CalendarEvent ) : string {
		const url = this.extractRSVP(event);
		let rsvpButton : string = '';

		if( url !== undefined) {
			rsvpButton = `<a href=${url} class="link-btn link-btn-red text-s">RSVP</a>`;
		}

		return rsvpButton;
	}

	private displaySpecialEvents( events: CalendarEvents) {
		let table : HTMLElement = document.getElementById('special-events');

		events.items.forEach(element => {
			let tableRow : HTMLElement = document.createElement("tr");
			
			let formatedDate = this.formatEventDate( element );
			let rsvpButton = this.formatRSVP( element );
			
			let innerHTML : string =
				`<td>
					<div class="block flex-none">
				  		<div class="font-bold text-gray-900">
							<a href=${element.htmlLink} target="_blank" rel="noopener noreferrer">${element.summary}</a>
				  		</div>
				  		<div class="text-blue-500">
						  ${formatedDate}
				  		</div>
					</div>
			  	</td>
			  	<td>
					${rsvpButton}
			  	</td>
			  `; 

				tableRow.innerHTML = innerHTML;

			table.appendChild( tableRow );
		});
	}

	loadCalendar() {
		var request = new XMLHttpRequest();

		var minTime = new Date();
		var maxTime = new Date();
		maxTime.setDate(maxTime.getDate() + 90);

		var finalURL : string = this.calendarURL;
		finalURL += '&fields=items(summary,start,end,recurrence,htmlLink,description)'; // Only return the needed fields
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