import { useNavigate } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";
import "./Back.css";

function Back() {
  const navigate = useNavigate();
  return (
    <button className="btn-back" onClick={() => navigate(-1)}>
      <IoChevronBackCircle />
    </button>
  );
}

export default Back;
