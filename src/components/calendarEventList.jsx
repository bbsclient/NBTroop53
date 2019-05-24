import React from 'react';

import CalendarEvent from './calendarEvent';

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
    } */

class CalendarEventList extends React.Component {
  static getMonthName(month) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return monthNames[month];
  }

  static getDayName(day) {
    const dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

    return dayNames[day];
  }

  static isSameDay(start, end) {
    return start.toDateString() === end.toDateString();
  }

  static formatTimeString(date, addAmPm) {
    let hour = date.getHours();
    let min = date.getMinutes();
    let am = ' AM';
    let minPad = '';
    let seperator = ':';

    if (hour > 12) {
      hour -= 12;
      am = ' PM';
    }


    if (min === 0) {
      // don't display :00
      min = '';
      seperator = '';
    } else if (min < 10) {
      minPad = '0';
    }

    if (addAmPm === false) {
      am = '';
    }

    return `${hour}${seperator}${minPad}${min}${am}`;
  }

  static formatEventDate(event) {
    let formattedDate;

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


  static getDate(value) {
    return new Date((value.date !== undefined) ? value.date : value.dateTime);
  }

  static extractRSVP(description) {
    if (description !== undefined) {
      const result = description.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[A-Z0-9+&@#/%=~_|$])/igm);

      if (result !== null && result.length === 1) {
        const [url] = result;
        return url;
      }
    }

    return undefined;
  }

  static processEvents(events) {
    // Sort by start time
    events.items.sort((a, b) => {
      const startA = this.getDate(a.start);
      const startB = this.getDate(b.start);

      return startA.getTime() - startB.getTime();
    });

    // Remove reoccuring events
    const filteredItems = events.items.filter(event => event.recurrence === undefined);

    filteredItems.forEach((event) => {
      // eslint-disable-next-line no-param-reassign
      event.date = this.formatEventDate(event);
      // eslint-disable-next-line no-param-reassign
      event.rsvpLink = this.extractRSVP(event.description);
    });

    return filteredItems;
  }

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    const xhttp = new XMLHttpRequest();
    const self = this;

    const minTime = new Date();
    const maxTime = new Date();
    maxTime.setDate(maxTime.getDate() + 90);

    let finalURL = 'https://www.googleapis.com/calendar/v3/calendars/sahdeafo8sgihvvjjkh9qg6ut0@group.calendar.google.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY';
    finalURL += '&fields=items(summary,start,end,recurrence,htmlLink,description)'; // Only return the needed fields
    finalURL += `&timeMin=${minTime.toISOString()}`;
    finalURL += `&timeMax=${maxTime.toISOString()}`;

    xhttp.onreadystatechange = function onReadyStateChange() {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        const events = JSON.parse(xhttp.response);

        const specialEvents = CalendarEventList.processEvents(events);

        self.setState({
          events: specialEvents,
        });
      }
    };

    xhttp.open('get', finalURL, true);
    xhttp.send();
  }

  render() {
    const {
      events,
    } = this.state;

    const calendarItems = events.map(
      e => (
        <CalendarEvent
          key={e.htmlLink}
          title={e.summary}
          date={e.date}
          rsvp={e.rsvpLink}
          url={e.htmlLink}
        />
      ),
    );

    return (
      <div className="w-7/8 mx-auto md:w-2/3">
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
