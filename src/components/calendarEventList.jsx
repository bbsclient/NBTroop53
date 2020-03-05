import React, {useState, useEffect } from "react";
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
    } */

const CalendarEventList = () => {
  const  [hasError, setErrors] =  useState(false)
  const  [events,setEvents ] = useState([{ summary: "Loading...", date: "", htmlLink: "void" }])

  async function fetchData() {
    const minTime = new Date();
    const maxTime = new Date();
    maxTime.setDate(maxTime.getDate() + 90);

    let finalURL = `https://www.googleapis.com/calendar/v3/calendars/d5imtm374liirqn82loksf80s75episc@import.calendar.google.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY&fields=items(summary,start,end,recurrence,htmlLink,description)&timeMin=${minTime.toISOString()}&timeMax=${maxTime.toISOString()}&orderBy=starttime&singleEvents=true`;

    fetch(finalURL)
      .then(response => response.json())
      .then(resultData => setEvents( processEvents(resultData) ))
      .catch(err => setErrors(err));
  }
  
  useEffect(() => {
    fetchData()
  }, []);

  const calendarItems = events.map(e => (
    <CalendarEvent
      key={e.htmlLink}
      title={e.summary}
      date={e.date}
      rsvp={e.rsvpLink}
      url={e.htmlLink}
    />
  ));

  return (
    <div className="w-7/8 mx-auto md:w-2/3">
      <div className="bg-white shadow-md rounded my-6">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>{calendarItems}</tbody>
        </table>
      </div>
    </div>
  );
}

function getDayName(day) {
  const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  return dayNames[day];
}

function isSameDay(start, end) {
  return start.toDateString() === end.toDateString();
}

function formatTimeString(date, addAmPm) {
  let hour = date.getHours();
  let min = date.getMinutes();
  let am = " AM";
  let minPad = "";
  let separator = ":";

  if (hour > 12) {
    hour -= 12;
    am = " PM";
  } else if( hour === 12 ) {
    am = " PM";
  }

  if (min === 0) {
    // don't display :00
    min = "";
    separator = "";
  } else if (min < 10) {
    minPad = "0";
  }

  if (addAmPm === false) {
    am = "";
  }

  return `${hour}${separator}${minPad}${min}${am}`;
}

function formatEventDate(event) {
  let formattedDate;

  if ("date" in event.start && "date" in event.end) {
    // All day
    const start = new Date(`${event.start.date}(CDT)`);
    let end = new Date(`${event.end.date}(CDT)`);

    // Adjust end date by one day
    end = new Date(end.valueOf() - new Date(86400000).valueOf());

    if (start.valueOf() === end.valueOf()) {
      formattedDate = formatDateString(start);
    } else {
      formattedDate = `${formatDateString(
        start
      )} - ${formatDateString(end)}`;
    }
  } else if ("dateTime" in event.start && "dateTime" in event.end) {
    const start = new Date(event.start.dateTime);
    const end = new Date(event.end.dateTime);

    if (isSameDay(start, end)) {
      const startDate = formatDateString(start);
      const startTimeString = formatTimeString(start, false);
      const endTimeString = formatTimeString(end, true);

      formattedDate = `${startDate} ${startTimeString} - ${endTimeString}`;
    } else {
      formattedDate = `${formatDateString(
        start
      )} - ${formatDateString(end)}`;
    }
  } else {
    formattedDate = "unknown";
  }

  return formattedDate;
}

function formatDateString(date) {
  const startMonth = date.getMonth() + 1;
  const startDate = date.getDate();
  const startDay = getDayName(date.getDay());

  return `${startMonth}/${startDate} ${startDay}`;
}

function extractRSVP(description) {
  if (description !== undefined) {
    const result = description.match(
      /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[A-Z0-9+&@#/%=~_|$])/gim
    );

    if (result !== null && result.length >= 1) {
      const [url] = result;
      return url;
    }
  }

  return undefined;
}

function processEvents(events) {
  // Remove regular troop meetings
  const filteredItems = events.items.filter(
    event => event.summary !== "Troop Meeting"
  );

  filteredItems.forEach(event => {
    event.date = formatEventDate(event);
    event.rsvpLink = extractRSVP(event.description);
  });

  return filteredItems;
}

export default CalendarEventList;

