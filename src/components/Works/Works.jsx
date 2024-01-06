import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import WorksTable from "../WorksTable/WorksTable";
import { getAllWorks } from "../../services/workServices";

const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    getAllWorks((works) => {
      setWorks(works);
    });
  }, []);

  return (
    <div className="container">
      <h4>
        <Link to="add">
          <button type="button" className="btn btn-primary">
            Add work
          </button>
        </Link>
      </h4>
      <Outlet />
      <WorksTable data={works} />
    </div>
  );
};

export default Works;
