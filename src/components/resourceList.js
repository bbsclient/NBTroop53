import React from "react"
import PropTypes from "prop-types";

class ResourceList extends React.Component {

    render() {
        const resources = this.props.resources.map((resource) => 
        <tr className="calendarEvent hover:bg-gray-200">            
        <td className="py-4 px-6 border-b border-gray-300">
            <div className="block flex-none">            
            <div className="font-bold">
                <a href={resource.url} className="text-bsa-blue underline">{resource.title}</a>
            </div>
            <div className="text-blue-500">
                {resource.description}
            </div>
        </div>
        </td>
        </tr>
              );      
        return(
            <div className="ResourceList w-2/3 mx-auto">
            <div className="bg-white shadow-md rounded my-6">
              <table className="text-left w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-gray-800 border-b border-gray-200">{this.props.title} Resources</th>
                  </tr>
                </thead>
                <tbody>
                  {resources}
                </tbody>
              </table>
            </div>
          </div>                 
        );
    } 
}

ResourceList.propTypes = {
    title: PropTypes.string.isRequired,
    resources: PropTypes.object.isRequired
};

export default ResourceList;