import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: form.name,
    };
  });
  const handleCarDelete = (data) => {
    dispatch(removeCar(data));
  };
  const renderCars = cars.map((data) => {
    const bold = name && data.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={data.id} className={`panel ${bold && "bold"} `}>
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
