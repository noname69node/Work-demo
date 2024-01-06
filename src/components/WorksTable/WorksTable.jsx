import React from "react";

import Work from "../Work/Work";

const WorksTable = (props) => {
  const works = props.data;
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Client</th>
          <th>Service</th>
          <th>Description</th>
          <th>From</th>
          <th>To</th>
          <th>Spend</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {works.map((work) => (
          <Work key={work.id} data={work} />
        ))}
      </tbody>
    </table>
  );
};

export default WorksTable;
