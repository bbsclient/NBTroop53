import React from 'react';
import PropTypes from 'prop-types';

class CalendarEvent extends React.PureComponent {
  render() {
    let rsvpButton = '';
    const {
      rsvp, title, date, url,
    } = this.props;
    if (rsvp !== undefined) {
      rsvpButton = <a href={rsvp} className="link-btn link-btn-red text-s">RSVP</a>;
    }

    return (
      <tr className="calendarEvent hover:bg-gray-400">
        <td>
          <div className="block flex-none">
            <div className="font-bold">
              <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
            </div>
            <div className="text-blue-500">
              {date}
            </div>
          </div>
        </td>
        <td>
          {rsvpButton}
        </td>
      </tr>
    );
  }
}

CalendarEvent.defaultProps = {
  rsvp: undefined,
};

CalendarEvent.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rsvp: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default CalendarEvent;
