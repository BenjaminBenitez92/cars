import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/index";

const CarSearch = () => {
  const dispatch = useDispatch();
  const seachTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });
  const handleChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div className="list-header">
      <h3 className="title is-3"> My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label"> Search</label>
        <input className="input" value={seachTerm} onChange={handleChange} />
      </div>
    </div>
  );
};

export default CarSearch;
