import React from "react"
import PropTypes from "prop-types";

class LeadersList extends React.Component {

    render() {
        const leaders = this.props.leaders.map((leader) => 
        <tr className="hover:bg-gray-200">            
        <td>
          {leader.name}
        </td>
        <td>
          {leader.position}
        </td>
      </tr>   
              );      
        return(
            <div className="LeadersList"> 
            <h4 className="text-center">
                {this.props.title}
            </h4>
          <div className="w-7/8 mx-auto">
            <div className="bg-white shadow-md rounded my-6">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {leaders}
                </tbody>
              </table>
            </div>
          </div>    
          </div>             
        );
    } 
}

LeadersList.propTypes = {
    title: PropTypes.string.isRequired,
    leaders: PropTypes.object.isRequired
};

export default LeadersList;
