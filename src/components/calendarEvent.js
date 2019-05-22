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
            rsvpButton = <a href={this.props.rsvp} class="link-btn link-btn-red text-xs">RSVP</a>
        }

        return(
            <tr className="calendarEvent hover:bg-gray-400">            
                <td>
                    <div className="block flex-none">            
                    <div className="font-bold">
                        {this.props.title}
                    </div>
                    <div className="text-blue-500">
                        {this.props.date}
                    </div>
                </div>
                </td>
                <td>
                    <a href={this.props.url} className="link-btn link-btn-blue text-xs">View</a>
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