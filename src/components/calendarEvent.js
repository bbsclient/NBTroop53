import React from "react";
import PropTypes from "prop-types";
 
class CalendarEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            date: "",
            rsvp: undefined,
            url: "#"
        }
    }

    render() {
        let rsvpButton = "";

        if( this.props.rsvp !== undefined ) {
            rsvpButton = <a href={this.props.rsvp} class="text-gray-200 no-underline font-bold py-2 px-3 mx-1 rounded text-xs bg-bsa-red hover:bg-red-900">RSVP</a>
        }

        return(
            <tr className="calendarEvent hover:bg-gray-400">            
                <td className="py-4 px-6 border-b border-gray-400">
                    <div className="block flex-none">            
                    <div className="font-bold">
                        {this.props.title}
                    </div>
                    <div className="text-blue-500">
                        {this.props.date}
                    </div>
                </div>
                </td>
                <td className="py-4 px-6 border-b border-gray-2 00">
                    <a href={this.props.url} className="text-gray-200 no-underline font-bold py-2 px-3 mx-1 rounded text-xs bg-bsa-blue hover:bg-blue-900">View</a>
                    {rsvpButton}
                </td>
            </tr> 
        );
    }
}

CalendarEvent.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rsvp: PropTypes.string,
    url: PropTypes.string.isRequired
};

export default CalendarEvent;