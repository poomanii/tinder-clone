import axios from "axios";
const instance = axios.create({
  baseURL: "https://tinder-backend-co.herokuapp.com/",
});

export default instance;
