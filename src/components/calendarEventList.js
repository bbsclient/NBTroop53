import React from "react"

import CalendarEvent from "./calendarEvent";

  /*
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
    }*/

class CalendarEventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    getMonthName(month) {
      var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      return monthNames[month];
    }
  
    getDayName(day) {
      var dayNames = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'];
  
      return dayNames[day];
    }
  
    isSameDay( start , end )  {
      return start.toDateString() === end.toDateString();
    }
  
    formatTimeString( date )  {
      let hour = date.getHours();
      let min = date.getMinutes();
      let am = 'AM';
      let min_pad = '';
      let seperator =':';

      if( hour > 12 ) {
        hour -= 12;
        am = 'PM';
      }
  
      
      if( min === 0 ) {
        // don't display :00
        min = '';
        seperator = '';
      } else if( min < 10 ) {
        min_pad = '0';
      }


  
      return `${hour}${seperator}${min_pad}${min} ${am}`;
    }
  
    formatEventDate( event ) {
      let formattedDate;
  
      let start = this.getDate( event.start );
      let end = this.getDate( event.end );		
      let startDay = this.getDayName( start.getDay());
      let startMonth = start.getMonth() + 1;
      let startDate = start.getDate();
      let endDay =  this.getDayName( end.getDay());
      let endMonth = end.getMonth() +1;
      let endDate = end.getDate();
  
      if( this.isSameDay( start, end ) ) {
        let startTimeString = this.formatTimeString( start );
        let endTimeString = this.formatTimeString( end );
  
        formattedDate = `${startMonth}/${startDate} ${startDay} ${startTimeString} to ${endTimeString}`;
      } else {
        formattedDate = `${startMonth}/${startDate} ${startDay} - ${endMonth}/${endDate} ${endDay}`;
      }
  
      return formattedDate;
    }
  

	getDate(value) {
		return new Date( (value.date !== undefined) ? value.date : value.dateTime);
	}

  extractRSVP( description ) {
    let rsvpLink = undefined;

    if( description !== undefined ) {
      let result = description.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[A-Z0-9+&@#/%=~_|$])/igm);
    
      if( result !== null && result.length === 1 ) {
        rsvpLink = result[0];
      }
    }

    return rsvpLink;
  }

	processEvents(events) {
		// Sort by start time
		events.items.sort((a, b) => {
			let startA = this.getDate(a.start);
			let startB = this.getDate(b.start);

			return startA.getTime() - startB.getTime();
		});

		// Remove reoccuring events
		events.items = events.items.filter(event => event.recurrence === undefined);		

    events.items.forEach( event => {
      event.date = this.formatEventDate( event );
      event.rsvpLink = this.extractRSVP( event.description );
    });

		return events;
	}

    componentDidMount() {
        var xhttp = new XMLHttpRequest();
        var self = this;

        var minTime = new Date();
        var maxTime = new Date();
        maxTime.setDate(maxTime.getDate() + 90);   

        var finalURL = "https://www.googleapis.com/calendar/v3/calendars/sahdeafo8sgihvvjjkh9qg6ut0@group.calendar.google.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY";
        finalURL += '&fields=items(summary,start,end,recurrence,htmlLink,description)'; // Only return the needed fields
        finalURL += '&timeMin=' + minTime.toISOString();
        finalURL += '&timeMax=' + maxTime.toISOString();
    
        xhttp.onreadystatechange = function() {

          if (xhttp.readyState === 4 && xhttp.status === 200){
            let events = JSON.parse(xhttp.response);

            let specialEvents = this.processEvents(events);

            

            self.setState({
              events: specialEvents.items
            });
          }
        }.bind(this);

        xhttp.open("get", finalURL, true);
        xhttp.send();   
    }

    render() {
      const calendarItems = this.state.events.map((e) => 
        <CalendarEvent key={e.htmlLink} title={e.summary} date={e.date} rsvp={e.rsvpLink} url={e.htmlLink}/> 
        );
      
        return(
          <div className="w-7/8 mx-auto">
            <div className="bg-white shadow-md rounded my-6">
              <table>
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {calendarItems}
                </tbody>
              </table>
            </div>
          </div>                 
        );
    } 
}

export default CalendarEventList;