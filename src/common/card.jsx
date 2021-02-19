import { Link } from "react-router-dom";

const Card = ({ card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage }, onDelete }) => {
  return (
    <div className="card col-md-6 col-lg-4 my-4 mx-auto" style={{ width: "18rem" }}>
      <img className="card-img-top" src={bizImage} alt="Business logo" />
      <div className="card-body d-flex justify-content-end flex-column">
        <h5 className="card-title">{bizName}</h5>
        <p className="card-text">{bizDescription}</p>
        <address>{bizAddress}</address>
        <p>{bizPhone}</p>
        <Link className="btn btn-primary" to={`./edit/${_id}`}>
          Edit
        </Link>
        <button onClick={onDelete} className="btn btn-danger my-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
