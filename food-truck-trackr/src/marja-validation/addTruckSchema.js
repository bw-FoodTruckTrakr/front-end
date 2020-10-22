import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Truck name is required"),
  truckImage: yup.string(),
  departure: yup.string().required("Departure time is required"),
  cuisine: yup.string().required("Cuisine type is required"),
  ratings: yup.array(),
});
