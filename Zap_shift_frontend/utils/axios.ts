import axios from "axios"; 
const prod = 'https://rick-and-morty-full-stack-app.vercel.app/api/'
const local = 'http://localhost:3002/'

const instance = axios.create({
  baseURL : local,
});

export default instance;