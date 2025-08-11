import axios from "axios";

const Api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// console.log(process.env.NEXT_PUBLIC_BACKEND_URL);

export default Api;
