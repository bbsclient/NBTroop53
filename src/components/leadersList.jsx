import React from "react";
import PropTypes from "prop-types";

function LeadersList({ leaders, title })  {
  const leadersRows = leaders.map(leader => {
    const id = leader.name + leader.position;
    return (
      <tr key={id}>
        <td>{leader.name}</td>
        <td>{leader.position}</td>
      </tr>
    );
  });
  return (
    <div className="LeadersList">
      <div className="w-7/8 mx-auto md:w-2/3">
        <div className="bg-white shadow-md rounded my-6">
          <table>
            <thead>
              <tr>
                <th className="text-center text-xl" colSpan="2">
                  {title}
                </th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>{leadersRows}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

LeadersList.propTypes = {
  title: PropTypes.string.isRequired,
  leaders: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default LeadersList;
