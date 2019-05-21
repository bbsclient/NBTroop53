import React from "react"
import PropTypes from "prop-types";

class LeadersList extends React.Component {

    render() {
        const leaders = this.props.leaders.map((leader) => 
        <tr className="hover:bg-gray-200">            
        <td className="py-4 px-6 border-b border-gray-400">
          {leader.name}
        </td>
        <td className="py-4 px-6 border-b border-gray-400">
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
              <table className="text-left w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-700 border-b border-gray-300">Name</th>
                    <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-700 border-b border-gray-300">Position</th>
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
