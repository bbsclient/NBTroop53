import React from 'react';
import PropTypes from 'prop-types';

class ResourceList extends React.PureComponent {
  render() {
    const { resources, title } = this.props;
    const resourcesRows = resources.map(resource => (
      <tr key={resource.url} className="hover:bg-gray-200">
        <td>
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
    ));
    return (
      <div className="ResourceList w-7/8 md:w-2/3 mx-auto">
        <div className="bg-white shadow-md rounded my-6">
          <table>
            <thead>
              <tr>
                <th>
                  {title}
                  {' '}
Resources
                </th>
              </tr>
            </thead>
            <tbody>
              {resourcesRows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ResourceList.propTypes = {
  title: PropTypes.string.isRequired,
  resources: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default ResourceList;
