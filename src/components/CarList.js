import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => {
    return state.cars.data;
  });
  const handleCarDelete = (data) => {
    dispatch(removeCar(data));
  };
  const renderCars = cars.map((data) => {
    return (
      <div key={data.id} className="panel">
        <p>
          {data.name} - ${data.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(data.id)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderCars}
      <hr />
    </div>
  );
};

export default CarList;
