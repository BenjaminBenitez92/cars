import { configureStore } from "@reduxjs/toolkit";
import {
  carsSliceReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsSliceReducer,
    form: formReducer,
  },
});

export { store, addCar, removeCar, changeCost, changeName, changeSearchTerm };
