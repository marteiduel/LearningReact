import { useNavigate } from "react-router-dom";

function AddCategory() {
  const navigate = useNavigate();
  return <div onClick={() => navigate("/")}>Back</div>;
}

export default AddCategory;
