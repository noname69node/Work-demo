import React, { useEffect, useState } from "react";
import { addWork, getWorkById, updateWork } from "../../services/workServices";
import { useNavigate, useParams, Link } from "react-router-dom";

const AddWork = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [workData, setWorkData] = useState({
    date: "",
    company: "",
    service: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  const [alertMessage, setAllertMessage] = useState([]);

  useEffect(() => {
    console.log(`getting ${id}`);
    id && getWorkById((work) => setWorkData(work), id);
  }, [id]);

  const handleChanges = (e) => {
    setWorkData({
      ...workData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];

    for (var key in workData) {
      if (workData[key] === "") {
        errors.push(`${key} must not be empty`);
      }
    }

    if (errors.length !== 0) {
      setAllertMessage(errors);
    } else {
      id ? updateWork(id, workData) : addWork(workData);
      navigate("/works");
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h2>Add done work</h2>

        {alertMessage.map((message) => (
          <p key={message}>{message}</p>
        ))}
      </div>
      <div className="card-body">
        <form className="form needs-validation" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="date">Choose date: </label>
            <input
              className="form-control"
              type="date"
              name="date"
              id="date"
              onChange={handleChanges}
              value={workData.date}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="company">Choose company: </label>
            <select
              name="company"
              id="company"
              className="form-control"
              onChange={handleChanges}
              value={workData.company}
              required
            >
              <option></option>
              <option value="com1">Company 1</option>
              <option value="com2">Company 2</option>
              <option value="com3">Company 3</option>
              <option value="com4">Company 4</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="service">Choose service: </label>
            <select
              name="service"
              id="service"
              className="form-control"
              onChange={handleChanges}
              value={workData.service}
              required
            >
              <option></option>
              <option value="serv1">Service 1</option>
              <option value="serv2">Service 2</option>
              <option value="serv3">Service 3</option>
              <option value="serv4">Service 4</option>
            </select>
          </div>
          <div className="mb-3">
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              className="form-control"
              onChange={handleChanges}
              value={workData.description}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="startTime">Start time:</label>
            <input
              type="time"
              name="startTime"
              id="startTime"
              className="form-control"
              onChange={handleChanges}
              value={workData.startTime}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="endTime">End time:</label>
            <input
              type="time"
              name="endTime"
              id="endTime"
              className="form-control"
              onChange={handleChanges}
              value={workData.endTime}
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              {!id ? "Save" : "Update"}
            </button>
            <Link to={"/works"}>
              <button className="btn btn-secondary">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWork;
