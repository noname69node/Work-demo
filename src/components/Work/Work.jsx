import React from "react";
import { FileText, XCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteWork } from "../../services/workServices";
import { timeDiff } from "../../helpers/work.helper";

const Work = (props) => {
  const { id, date, company, service, description, startTime, endTime } =
    props.data;

  const navigate = useNavigate();

  const deleteHandler = () => {
    console.log(`delete ${id}`);
    deleteWork(id);
    navigate("/works");
  };
  return (
    <tr key={id}>
      <td>{date}</td>
      <td>{company}</td>
      <td>{service}</td>
      <td>{description}</td>
      <td>{startTime}</td>
      <td>{endTime}</td>
      <td>{timeDiff(startTime, endTime)}</td>
      <td align="center">
        <Link to={`update/${id}`}>
          <FileText color="blue" size="18" />
        </Link>
      </td>
      <td align="center">
        <XCircle color="red" size="18" onClick={deleteHandler} />
      </td>
    </tr>
  );
};

export default Work;
