import axios from "axios";
// import { getSession } from "next-auth/react";

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(
//   async (config) => {
//     const session = await getSession();

//     console.log(config);

//     if (session) {
//       console.log(session);
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;
