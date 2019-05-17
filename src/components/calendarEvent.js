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
            rsvpButton = <a href={this.props.rsvp} class="text-grey-lighter no-underline font-bold py-2 px-3 mx-1 rounded text-xs bg-bsa-red hover:bg-green-dark">RSVP</a>
        }

        return(
            <tr className="calendarEvent hover:bg-grey-lighter">            
                <td className="py-4 px-6 border-b border-grey-light">
                    <div className="block flex-none">            
                    <div className="font-bold">
                        {this.props.title}
                    </div>
                    <div className="text-blue">
                        {this.props.date}
                    </div>
                </div>
                </td>
                <td className="py-4 px-6 border-b border-grey-light">
                    <a href={this.props.url} className="text-grey-lighter no-underline font-bold py-2 px-3 mx-1 rounded text-xs bg-bsa-blue hover:bg-blue-dark">View</a>
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